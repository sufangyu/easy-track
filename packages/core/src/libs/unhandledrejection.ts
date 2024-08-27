import { parse } from 'error-stack-parser-es';
import { EventType, StatusType } from '../types';
import { _global, eventEmitter, getTimestamp, on, unknownToString } from '../utils';
import eventTrack from '../event';

/**
 * 监听 unhandledrejection 事件
 *
 */
export const listenUnhandledrejection = () => {
  on({
    el: _global,
    eventName: 'unhandledrejection',
    event: (ev) => {
      eventEmitter.emit(EventType.UNHANDLEDREJECTION, ev as PromiseRejectionEvent);
    }
  });
};

/**
 * unhandledrejection 事件回调函数
 *
 * @return {*}
 */
export const unhandledrejectionCallback = () => (ev: PromiseRejectionEvent) => {
  const { reason } = ev;
  const [stackFrame] = parse(reason);
  const { fileName = '', functionName = '', columnNumber: column, lineNumber: line } = stackFrame;

  // 过滤浏览器插件的报错
  if (fileName.startsWith('chrome-extension://')) {
    return;
  }

  const data = {
    fileName,
    functionName,
    line,
    column,
    message: unknownToString(reason.message || reason.stack)
  };

  eventTrack.send({
    type: EventType.UNHANDLEDREJECTION,
    category: 'unhandledrejection',
    status: StatusType.Error,
    time: getTimestamp(),
    data
  });
};
