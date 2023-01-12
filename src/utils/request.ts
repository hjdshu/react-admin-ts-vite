import axios from "axios";
import { getLocalAuthorization, login } from "./index";
import { Modal, message } from "antd";

// 创建一个错误
function errorCreate(errMsg: string) {
  console.log(errMsg);

  const error = new Error(errMsg);
  errorLog(error);
  throw error;
}

// 显示错误
function errorLog(error: any): void {
  // 打印到控制台
  if (import.meta.env.MODE === "development") {
    console.log(error);
  }
  // 显示提示
  message.error({
    content: error.message ? error.message : "请求错误",
    duration: 3,
  });
}

//设置axios基础路径
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const authorization = getLocalAuthorization();
    if (!authorization) {
      login();
      return config;
    }
    //设置请求头
    config.headers = {
      Authorization: authorization,
    };
    return config;
  },
  (error) => {
    return error;
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: any) => {
    // 根据 code 进行判断
    return new Promise((resolve, reject) => {
      const { errcode } = response.data;
      if (response.status === 200) {
        if (errcode === 0) {
          resolve(response.data);
          return;
        }
        errorCreate(response.data.msg);
        reject({ errcode: errcode, message: response.data.msg });
      } else {
        if (response.status === 401) {
          login();
        } else {
          message.error(response.data.msg);
        }
        reject(response);
      }
    });
  },
  (err) => {
    console.log("err-----------:");
    console.log(err);
    if (
      err?.response?.status === 401 ||
      err?.response?.data?.message === "令牌已过期"
    ) {
      login();
    } else {
      message.error(
        err.response.data.Message || err.response.data.message || "未知错误"
      );
    }
    Promise.reject(err);
  }
);

export const requestGet = <T>(
  url: string,
  params?: object,
  options?: object
): Promise<T> => {
  return service({
    method: "GET",
    url,
    params,
    ...options,
  }) as Promise<any>;
};

export const requestPost = <T>(
  url: string,
  params?: object,
  options?: object
): Promise<T> => {
  return service({
    method: "POST",
    url,
    data: params,
    ...options,
  }) as Promise<any>;
};

export const requestDelete = (
  url: string,
  params?: object,
  options?: object
) => {
  return service({
    method: "DELETE",
    url,
    data: params,
    ...options,
  });
};

export const requestPut = (url: string, params?: object, options?: object) => {
  return service({
    method: "PUT",
    url,
    data: params,
    ...options,
  });
};
