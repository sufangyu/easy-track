import {
  hashCallback,
  historyCallback,
  unhandledrejectionCallback,
  eventTrackCallback,
  httpCallback,
  pvCallback
} from '../libs';
import { errorCallback } from '../libs/error';
import options from '../options';
import { EventType } from '../types';
import { addListenOrReplace } from './replace.utils';

export const initReplace = () => {
  const siwtchMap = options.getSwitchMap();
  // eslint-disable-next-line no-console
  console.log('initReplace siwtchMap', siwtchMap);

  // 事件埋点
  if (siwtchMap[EventType.EVENT_TRACK]) {
    addListenOrReplace({
      type: EventType.EVENT_TRACK,
      callback: eventTrackCallback()
    });
  }

  // 全局错误
  if (siwtchMap[EventType.ERROR]) {
    addListenOrReplace({ type: EventType.ERROR, callback: errorCallback() });
  }

  // 全局异步错误
  if (siwtchMap[EventType.UNHANDLEDREJECTION]) {
    addListenOrReplace({
      type: EventType.UNHANDLEDREJECTION,
      callback: unhandledrejectionCallback()
    });
  }

  // 性能监控
  if (siwtchMap[EventType.PERFORMANCE]) {
    addListenOrReplace({ type: EventType.PERFORMANCE });
  }

  // 页面跳转 - hash
  if (siwtchMap[EventType.HASH_CHANGE]) {
    addListenOrReplace({
      type: EventType.HASH_CHANGE,
      callback: hashCallback()
    });
  }
  // 页面跳转 - history
  if (siwtchMap[EventType.HISTORY]) {
    addListenOrReplace({
      type: EventType.HISTORY,
      callback: historyCallback('history')
    });
  }
  // 路由内置的页面跳转方法 - history-pushState、history-replaceState
  if (siwtchMap[EventType.HASH_CHANGE] || siwtchMap[EventType.HISTORY]) {
    addListenOrReplace({
      type: EventType.HISTORY_PUSHSTATE,
      callback: historyCallback('history_pushstate')
    });
    addListenOrReplace({
      type: EventType.HISTORY_REPLACESTATE,
      callback: historyCallback('history_replaceState')
    });
    addListenOrReplace({
      type: EventType.PV,
      callback: pvCallback()
    });
  }

  // 网络请求 - Fetch
  if (siwtchMap[EventType.FETCH]) {
    addListenOrReplace({
      type: EventType.FETCH,
      callback: httpCallback(EventType.FETCH)
    });
  }

  // 资源请求 - XHR
  if (siwtchMap[EventType.XHR]) {
    addListenOrReplace({
      type: EventType.XHR,
      callback: httpCallback(EventType.XHR)
    });
  }

  // 白屏检测
  if (siwtchMap[EventType.BLANK_SCREEN]) {
    addListenOrReplace({ type: EventType.BLANK_SCREEN });
  }
};
