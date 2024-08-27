import { isFunction } from 'lodash-es';
import options from '../options';
import { EventType, HttpData, RequestMethod, StatusType } from '../types';
import {
  _global,
  eventEmitter,
  getTimestamp,
  httpTransform,
  replaceAop,
  unknownToObject
} from '../utils';
import eventTrack from '../event';

type FetchFunc = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

/**
 * 替换全局的fetch方法
 *
 * - 注意: chrome 等浏览器中使用的第三方扩展插件可能会影响到该重写方法无法执行, 此时需要停用扩展插件
 *
 * @return {*}
 */
export const replaceFetch = () => {
  if (!('fetch' in _global)) {
    return;
  }

  const replaceFunc = (originalFetch: FetchFunc) => {
    return function (url: string, config: Partial<Request> = {}) {
      const startTime = getTimestamp();
      const method = config?.method ?? 'GET';
      const headers = new Headers(config.headers || {});
      // Object.assign(headers, { setRequestHeader: headers.set });
      config = { ...config, ...headers };

      const fetchData: HttpData = {
        status: StatusType.Ok,
        url,
        method: (method as string).toUpperCase(),
        elapsedTime: getTimestamp() - startTime,
        time: startTime,
        request: {
          ...config,
          headers: config?.headers,
          body: config?.body
        },
        response: {
          status: 200,
          data: null
        }
      };

      return originalFetch.apply(_global, [url, config]).then(
        (res: Response) => {
          const tempRes = res.clone();
          tempRes.text().then((data) => {
            if (checkIsIgnoreUrl(url, method)) {
              return;
            }

            const { checkHttpStatus } = options.get();
            const { status = 200 } = tempRes;
            fetchData.elapsedTime = getTimestamp() - startTime;
            fetchData.response!.status = status;
            if (
              (isFunction(checkHttpStatus) && checkHttpStatus(tempRes)) ||
              (!checkHttpStatus && status >= 200 && status < 400)
            ) {
              fetchData.response!.data = data && unknownToObject(data);
            }

            eventEmitter.emit(EventType.FETCH, fetchData);
          });

          return res;
        },
        (err) => {
          if (checkIsIgnoreUrl(url, method)) {
            return;
          }

          fetchData.status = StatusType.Error;
          fetchData.response!.status = 0;
          fetchData.elapsedTime = getTimestamp() - startTime;

          eventEmitter.emit(EventType.FETCH, fetchData);

          throw err;
        }
      );
    };
  };

  replaceAop(window, 'fetch', replaceFunc);
};

/**
 * 判断是否需要忽略上报的请求
 *
 * - 过滤上报的请求
 * - 过滤上报的请求配置方法 (根据 url 和 method 判断)
 *
 * @param {string} url
 * @param {string} method
 * @return {*}  {boolean}
 */
export const checkIsIgnoreUrl = (url: string, method: string): boolean => {
  const { filterHttpUrl, dsn } = options.get();
  const isReportUrl = dsn === url && method === RequestMethod.POST;
  const isFilterHttpUrl = isFunction(filterHttpUrl) && filterHttpUrl(url, method);
  return isReportUrl || isFilterHttpUrl;
};

/**
 * 网络请求回调函数
 *
 * @param {(EventType.FETCH | EventType.XHR)} type
 * @return {*}
 */
export const httpCallback = (type: EventType.FETCH | EventType.XHR) => (data: HttpData) => {
  const result = httpTransform(data);
  const { dsn } = options.get();

  if (result.status === StatusType.Error) {
    // 立即上报接口错误
    eventTrack.send({
      type: EventType.REQUEST,
      category: type,
      status: StatusType.Error,
      time: data.time,
      data: result
    });
    return;
  }

  if (!data.url.includes(dsn)) {
    eventTrack.add({
      type: EventType.REQUEST,
      category: type,
      status: StatusType.Ok,
      time: data.time,
      data: result
    });
  }
};
