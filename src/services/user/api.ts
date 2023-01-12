import { requestPost, requestGet } from "../../utils/request";
import { GetParams, ReturnParams } from "./type";

/**
 * @description: 用户登录
 */
export function getUserList(params: GetParams) {
  return requestPost<ReturnParams>("/login", params);
}
