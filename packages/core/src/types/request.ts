import { StatusType } from './event';

/**
 * 请求方法
 *
 * @export
 * @enum {number}
 */
export const enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

/**
 * http请求
 */
export interface HttpData {
  /**
   * 事件状态
   *
   * @type {StatusType}
   * @memberof HttpData
   */
  status?: StatusType;
  /**
   * 事件发生时间
   *
   * @type {number}
   * @memberof HttpData
   */
  time: number;
  /**
   * 请求地址
   *
   * @type {string}
   * @memberof HttpData
   */
  url: string;
  /**
   * 请求方法
   *
   * @type {string}
   * @memberof HttpData
   */
  method?: string;
  /**
   * 接口请求结果描述信息
   *
   * @type {string}
   * @memberof HttpData
   */
  message?: string;
  /**
   * 接口响应时长
   *
   * @type {number}
   * @memberof HttpData
   */
  elapsedTime: number;
  /**
   * 接口请求数据
   *
   * @type {{
   *   headers?: Headers | Record<string, string>; // 请求头
   *   withCredentials?: boolean; // 跨域请求时, Cookie 和认证的HTTP 头信息是否会包含在请求之中
   *   responseType?: XMLHttpRequestResponseType; // 响应类型, 只在正常响应后才能获取到值
   *   body?: any; // 请求数据
   * }}
   * @memberof HttpData
   */
  request?: {
    headers?: Headers | Record<string, string>; // 请求头
    withCredentials?: boolean; // 跨域请求时, Cookie 和认证的HTTP 头信息是否会包含在请求之中
    responseType?: XMLHttpRequestResponseType; // 响应类型, 只在正常响应后才能获取到值
    body?: any; // 请求数据
  };
  /**
   * 接口响应数据
   *
   * @type {{
   *   status: number; // 状态
   *   headers?: Headers | Record<string, string>; // 响应头
   *   data?: any; // 响应数据
   * }}
   * @memberof HttpData
   */
  response?: {
    status: number; // 状态
    headers?: Headers | Record<string, string>; // 响应头
    data?: any; // 详情数据
  };
}

/**
 * HTTP 状态码
 *
 * @export
 * @enum {number}
 */
export const enum HttpStatusCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401
}

/**
 * 接口错误状态
 */
export enum SpanStatus {
  Ok = 'ok',
  Bad = 'bad',
  DeadlineExceeded = 'deadline_exceeded',
  Unauthenticated = 'unauthenticated',
  PermissionDenied = 'permission_denied',
  NotFound = 'not_found',
  ResourceExhausted = 'resource_exhausted',
  InvalidArgument = 'invalid_argument',
  Unimplemented = 'unimplemented',
  Unavailable = 'unavailable',
  InternalError = 'internal_error',
  UnknownError = 'unknown_error',
  Cancelled = 'cancelled',
  AlreadyExists = 'already_exists',
  FailedPrecondition = 'failed_precondition',
  Aborted = 'aborted',
  OutOfRange = 'out_of_range',
  DataLoss = 'data_loss'
}
