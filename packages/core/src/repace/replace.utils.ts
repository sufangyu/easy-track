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
  listenPageVisibility,
  listenWebResource,
  listenExposureTrack,
  listenRecordScreen,
  listenNetwork,
  replaceConsole
} from '../libs';
import { EventType, type ReplaceParams } from '../types';
import { _global, eventEmitter } from '../utils';

const listenOrReplace = (type: EventType) => {
  const listenOrReplaceFuncMap: Record<EventType, () => void> = {
    [EventType.BLANK_SCREEN]: listenBlankScreen,
    [EventType.PERFORMANCE]: listenWebPerformance,
    [EventType.RESOURCE]: listenWebResource,
    [EventType.NETWORK]: listenNetwork,
    [EventType.LOGGER]: replaceConsole,

    [EventType.XHR]: replaceXHR,
    [EventType.FETCH]: replaceFetch,
    // 不用具体实现, 具体在 xhr、fetch
    [EventType.REQUEST]: () => {},

    [EventType.ERROR]: listenError,
    [EventType.UNHANDLEDREJECTION]: listenUnhandledrejection,

    [EventType.EVENT_TRACK]: listenEventTrack,
    [EventType.EXPOSURE_TRACK]: listenExposureTrack,
    [EventType.RECORD_SCREEN]: listenRecordScreen,

    [EventType.PV]: listenPageVisibility,
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
