import { checkIsIgnoreUrl } from './fetch';
import options from '../options';
import { EventType, HttpData, StatusType, VoidFunc } from '../types';
import {
  eventEmitter,
  getTimestamp,
  isFunction,
  on,
  parseResponseHeaders,
  replaceAop,
  unknownToObject
} from '../utils';

type XMLHttpRequestExtend = XMLHttpRequest & { xhrData: HttpData };

/**
 * 替换原生 XHR
 *
 */
export const replaceXHR = () => {
  const xhrProto = XMLHttpRequest.prototype;

  const replaceOpenFunc = (originalOpen: VoidFunc) => {
    return function (this: XMLHttpRequestExtend, ...args: any[]): void {
      const [method, url] = args;
      const { withCredentials, responseType } = this;
      const startTime = getTimestamp();

      const xhrData: HttpData = {
        status: StatusType.Ok,
        url,
        method: (method as string).toUpperCase(),
        elapsedTime: getTimestamp() - startTime,
        time: startTime,
        request: {
          withCredentials,
          responseType,
          headers: {},
          body: null
        },
        response: {
          status: 200,
          headers: {},
          data: null
        }
      };
      this.xhrData = xhrData;

      originalOpen.apply(this, args);
    };
  };

  let headers: Record<string, string> = {};
  /**
   * 重写 setRequestHeader
   * - axios 内部请求头设置会先于 xhr.setRequestHeader 执行, 导致请求头可能会出现丢失
   *
   * @param {*} originalSetRequestHeader
   * @return {*}
   */
  const replaceSetRequestHeaderFunc = (originalSetRequestHeader: any) => {
    return function (this: XMLHttpRequestExtend, ...args: [key: string, value: string]): void {
      const [key = '', value = ''] = args;
      headers[key] = value;

      this.xhrData!.request!.headers = {
        ...headers
      };

      originalSetRequestHeader.apply(this, args);
    };
  };

  const replaceSendFunc = (originalSend: VoidFunc) => {
    return function (this: XMLHttpRequestExtend, ...args: any[]): void {
      const { xhrData, responseType, withCredentials } = this;
      const { method, url, time } = xhrData ?? {};
      const [body] = args ?? [];

      // 请求信息（此处设置 withCredentials、responseType 才是实际的值）
      xhrData.request!.withCredentials = withCredentials;
      xhrData.request!.responseType = responseType;
      xhrData.request!.body = body;

      on({
        el: this,
        eventName: 'loadend',
        event(this: any) {
          if (checkIsIgnoreUrl(url, method!)) {
            return;
          }

          const { responseType, response, status, statusText } = this;
          const allHeaders = this.getAllResponseHeaders();
          const isResponseFailed = status === 0 || status >= 400;
          const isResponseSuccessed = status >= 200 && status < 400;

          xhrData.status = isResponseFailed ? StatusType.Error : StatusType.Ok;
          xhrData.elapsedTime = getTimestamp() - time;
          xhrData.response!.status = status;
          xhrData.response!.headers = parseResponseHeaders(allHeaders);

          if (['', 'json', 'text'].includes(responseType)) {
            const { checkHttpStatus } = options.get();
            const resData: Partial<Response> = { status, statusText };
            if (
              (isFunction(checkHttpStatus) && checkHttpStatus?.(resData)) ||
              (!checkHttpStatus && isResponseSuccessed)
            ) {
              xhrData.response!.data = response && unknownToObject(response);
            }
          }

          eventEmitter.emit(EventType.XHR, xhrData);
        }
      });

      headers = {};
      originalSend.apply(this, args);
    };
  };

  replaceAop(xhrProto, 'open', replaceOpenFunc);
  replaceAop(xhrProto, 'setRequestHeader', replaceSetRequestHeaderFunc);
  replaceAop(xhrProto, 'send', replaceSendFunc);
};
