import {
  listenError,
  listenEventTrack,
  listenHashChange,
  listenUnhandledrejection,
  listenWebPerformance,
  listenBlankScreen,
  replaceFetch,
  replaceHistory,
  replaceHistoryPushState,
  replaceHistoryReplaceState,
  replaceXHR,
  listenPageVisiable,
  listenWebResource
} from '../libs';
import { _global, eventEmitter } from '../utils';
import { EventType, type ReplaceParams } from '../types';

const listenOrReplace = (type: EventType) => {
  const listenOrReplaceFuncMap: Record<EventType, () => void> = {
    [EventType.BLANK_SCREEN]: listenBlankScreen,
    [EventType.PERFORMANCE]: listenWebPerformance,
    [EventType.RESOURCE]: listenWebResource,

    [EventType.XHR]: replaceXHR,
    [EventType.FETCH]: replaceFetch,
    [EventType.REQUEST]: () => {},

    [EventType.ERROR]: listenError,
    [EventType.UNHANDLEDREJECTION]: listenUnhandledrejection,

    [EventType.EVENT_TRACK]: listenEventTrack,
    [EventType.PV]: listenPageVisiable,
    [EventType.HASH_CHANGE]: listenHashChange,
    [EventType.HISTORY]: replaceHistory,
    [EventType.HISTORY_PUSHSTATE]: replaceHistoryPushState,
    [EventType.HISTORY_REPLACESTATE]: replaceHistoryReplaceState
  };

  listenOrReplaceFuncMap[type]?.();
};

/**
 * 添加监听或替换
 *
 * 监听：如果存在，则替换
 *
 * @param {ReplaceParams} replaceParams
 */
export const addListenOrReplace = (replaceParams: ReplaceParams) => {
  const { type, callback } = replaceParams;
  // console.log('addListenOrReplace =>>', type);
  callback && eventEmitter.subscribe(type, callback);
  listenOrReplace(type);
};
