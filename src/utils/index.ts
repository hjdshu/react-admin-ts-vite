import jsUri from "jsuri";
import lodashCloneDeep from "lodash/cloneDeep";
import { Modal, message } from 'antd';

// 获取url参数
export function urlQuery(name: string) {
  let urlAry: any = location.href.split("?") || [];
  urlAry.shift();
  // disable
  urlAry = urlAry.map((n: any) => new jsUri("?" + n));
  let res = undefined;
  urlAry.forEach((item: any) => {
    const getRes = item.getQueryParamValue(name);
    if (getRes) {
      res = getRes;
    }
  });
  return res;
}

// 验证是否为数组
export function isArray(obj: object) {
  return (
    Array.isArray(obj) ||
    Object.prototype.toString.call(obj) === "[object Array]"
  );
}

// cloudDeep
export function cloudDeep(obj: object) {
  return lodashCloneDeep(obj);
}


// 生成简单随机字符串
export function randomString(len = 32) {
  const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  const maxPos = chars.length;
  let pwd = "";
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd + new Date().getTime();
}

// 邮箱校验
export function isEmail(s: string) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
}
// 邮箱校验
export function isPhone(s: string) {
  return /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(
    s
  );
}

// 登录
export function login() {
  localStorage.removeItem('authorization');
}

// 退出登录
export function loginOut() {
  localStorage.removeItem('authorization');
}

// 获取本地登录信息
export function getLocalAuthorization() {
  const authInfo = localStorage.getItem('authorization') || '';
  return authInfo;
}

// 设置本地登录信息
export function setLocalAuthorization(obj: any) {
  localStorage.setItem('authorization', JSON.stringify(obj));
}
