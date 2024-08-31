import { isFunction, isString } from 'lodash-es';

import { unknownToString } from './validate';
import options from '../options';
import { HttpData, HttpStatusCode, SpanStatus, StatusType } from '../types';

/**
 * 截取字符串并拼接提示信息
 *
 * @param {string} str 要截取的字符串
 * @param {number} interceptLength 截取的长度
 * @return {*} 返回截取后的字符串，如果原始字符串长度大于截取长度，则在末尾添加提示信息
 */
export const interceptStr = (str: string, interceptLength: number) => {
  if (isString(str)) {
    return (
      str.slice(0, interceptLength) +
      (str.length > interceptLength ? `:截取前${interceptLength}个字符` : '')
    );
  }

  return '';
};

/**
 * http 请求数据转换处理
 *
 * @param {HttpData} data http 数据
 * @return {*}  {HttpData}
 */
export const httpTransform = (data: HttpData): HttpData => {
  const { checkHttpStatus } = options.get();
  const { response } = data;
  let status: StatusType;
  let message = `请求成功, HTTP状态码(${response?.status})`;

  if (response?.status === 0) {
    status = StatusType.Error;
    message = `请求失败, HTTP状态码(${response?.status}), ${fromHttpStatus(response?.status)}`;
  } else if (response?.status! < HttpStatusCode.BAD_REQUEST) {
    status = StatusType.Ok;
    if (isFunction(checkHttpStatus)) {
      status = checkHttpStatus(response as Response) ? StatusType.Ok : StatusType.Error;

      status === StatusType.Error && (message = `接口报错, 错误信息：${unknownToString(response)}`);
    }
  } else {
    status = StatusType.Error;
    message = `请求失败, HTTP状态码(${response?.status}), ${fromHttpStatus(response?.status)}`;
  }

  data.status = status;
  data.message = message;
  return data;
};

export function fromHttpStatus(httpStatus: any) {
  if (httpStatus === 0) {
    return SpanStatus.Bad;
  }
  if (httpStatus < 400) {
    return SpanStatus.Ok;
  }
  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return SpanStatus.Unauthenticated;
      case 403:
        return SpanStatus.PermissionDenied;
      case 404:
        return SpanStatus.NotFound;
      case 409:
        return SpanStatus.AlreadyExists;
      case 413:
        return SpanStatus.FailedPrecondition;
      case 429:
        return SpanStatus.ResourceExhausted;
      default:
        return SpanStatus.InvalidArgument;
    }
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return SpanStatus.Unimplemented;
      case 503:
        return SpanStatus.Unavailable;
      case 504:
        return SpanStatus.DeadlineExceeded;
      default:
        return SpanStatus.InternalError;
    }
  }
  return SpanStatus.UnknownError;
}

/**
 * 将 `XMLHttpRequest.getAllResponseHeaders` 返回的字符串转换为对象。
 *
 * @param allHeaders - 从 `xhr.getAllResponseHeaders()` 获取的原始响应头字符串。
 * @returns 响应头的键值对对象。
 */
export const parseResponseHeaders = (allHeaders: string): Record<string, string> => {
  const headers: Record<string, string> = {};

  allHeaders
    .trim()
    .split(/[\r\n]+/)
    .forEach((line) => {
      const parts = line.split(': ');
      // 将键转为小写以确保一致性
      const key = parts.shift()?.toLowerCase();
      // 处理可能存在的冒号
      const value = parts.join(': ');
      key && (headers[key] = value);
    });

  return headers;
};
