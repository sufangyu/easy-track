import { addListenOrReplace } from './replace.utils';
import {
  hashCallback,
  historyCallback,
  unhandledrejectionCallback,
  eventTrackCallback,
  httpCallback,
  pvCallback,
  webResourceCallback,
  networkCallback,
  loggerCallback
} from '../libs';
import { errorCallback } from '../libs/error';
import options from '../options';
import { EventType } from '../types';

export const initReplace = () => {
  const siwtchMap = options.getSwitchMap();

  // 事件埋点
  if (siwtchMap[EventType.EVENT_TRACK]) {
    addListenOrReplace({
      type: EventType.EVENT_TRACK,
      callback: eventTrackCallback()
    });
  }

  // 元素曝光
  if (siwtchMap[EventType.EXPOSURE_TRACK]) {
    addListenOrReplace({ type: EventType.EXPOSURE_TRACK });
  }

  // 录屏
  if (siwtchMap[EventType.RECORD_SCREEN]) {
    addListenOrReplace({ type: EventType.RECORD_SCREEN });
  }

  // 网络情况
  if (siwtchMap[EventType.NETWORK]) {
    addListenOrReplace({ type: EventType.NETWORK, callback: networkCallback() });
  }

  // 日志
  if (siwtchMap[EventType.LOGGER]) {
    addListenOrReplace({ type: EventType.LOGGER, callback: loggerCallback() });
  }

  // 全局错误
  if (siwtchMap[EventType.ERROR]) {
    addListenOrReplace({
      type: EventType.ERROR,
      callback: errorCallback()
    });
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

  // 资源加载
  if (siwtchMap[EventType.RESOURCE]) {
    addListenOrReplace({
      type: EventType.RESOURCE,
      callback: webResourceCallback()
    });
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
      callback: historyCallback('history-pushstate')
    });
    addListenOrReplace({
      type: EventType.HISTORY_REPLACESTATE,
      callback: historyCallback('history-replaceState')
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
