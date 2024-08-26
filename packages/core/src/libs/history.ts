import { cloneDeep, takeRight } from 'lodash-es';
import options from '../options';
import { EventType, RouteParams, StatusType, type VoidFunc } from '../types';
import {
  _global,
  eventEmitter,
  getLocationHref,
  getPVTime,
  getTimestamp,
  parseUrlToObj,
  replaceAop
} from '../utils';
import eventTrack from '../event/event';

// 记录最后一次页面, 初始化时为当前页面
let lastHref: string = getLocationHref();

/**
 * 重写 history.pushState
 *
 * @return {*}
 */
export const replaceHistoryPushState = (): void => {
  if (!('history' in _global) || !('pushState' in _global.history)) {
    return;
  }

  const replaceFunc = (originalFn: VoidFunc): VoidFunc =>
    function (this: any, ...args: any[]) {
      const url = args?.[2];
      if (url) {
        const from = lastHref;
        const to = url;
        lastHref = to;

        eventEmitter.emit(EventType.HISTORY_PUSHSTATE, {
          from,
          to
        });
      }

      return originalFn.apply(this, args);
    };

  replaceAop(_global.history, 'pushState', replaceFunc);
};

/**
 * 重写 history.replaceState
 *
 * @return {*}
 */
export const replaceHistoryReplaceState = (): void => {
  if (!('history' in _global) || !('replaceState' in _global.history)) {
    return;
  }

  const replaceFunc = (originalFn: VoidFunc): VoidFunc =>
    function (this: any, ...args: any[]) {
      const url = args?.[2];
      if (url) {
        const from = lastHref;
        const to = url;
        lastHref = to;

        eventEmitter.emit(EventType.HISTORY_REPLACESTATE, {
          from,
          to
        });
      }

      return originalFn.apply(this, args);
    };

  replaceAop(_global.history, 'replaceState', replaceFunc);
};

/**
 * 重写 onpopstate 事件
 *
 */
export const replaceHistory = () => {
  const onPopstate = window.onpopstate;

  window.onpopstate = function (this: any, ...args: any) {
    const [lastPopState] = args as PopStateEvent[];
    const { current, forward } = lastPopState.state || {};
    eventEmitter.emit(EventType.HISTORY, {
      from: forward,
      to: current
    });

    onPopstate?.apply(this, args);
  };
};

/**
 * history 事件回调函数
 *
 * @param {("history" | "history_pushstate" | "history_replaceState")} category
 * @return {*}
 */
export const historyCallback = (
  category: 'history' | 'history-pushstate' | 'history-replaceState'
) => {
  let urls: string[] = [];
  return (data: RouteParams) => {
    const { historyUrlsNum } = options.get();
    const { from, to } = data;
    const { relative: currentFrom } = parseUrlToObj(from);
    const { relative: currentTo } = parseUrlToObj(to);

    const isSame = currentFrom === currentTo;
    if (isSame) {
      return;
    }

    // fix: 修复 Vue - router 的 push 会同时触发 pushState 和 replaceState,
    // 其中 replaceState 的 to 地址和当前的地址相同导致重复上报无效数据, 此处采用过滤掉
    if (category === EventType.HISTORY_REPLACESTATE) {
      const curLocationUrl = getLocationHref();
      const { relative: currentRelative } = parseUrlToObj(curLocationUrl);

      if (currentTo === currentRelative) {
        return;
      }
    }

    currentTo && urls.push(currentTo);
    urls = takeRight(urls, historyUrlsNum);

    const time = getTimestamp();
    const pv = getPVTime(time, currentFrom);

    eventTrack.add({
      type: EventType.PV,
      category,
      status: StatusType.Ok,
      time,
      data: {
        from: currentFrom || '/',
        to: currentTo || '/',
        urls: cloneDeep(urls),
        pv
      }
    });
  };
};
