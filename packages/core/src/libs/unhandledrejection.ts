import { parse } from 'error-stack-parser-es';

import eventTrack from '../event';
import { EventType, StatusType } from '../types';
import { _global, eventEmitter, getTimestamp, on, unknownToString } from '../utils';

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
  // 过滤字符串类型的报错
  if (!(reason instanceof Error)) {
    return;
  }

  const [stackFrame] = parse(reason);
  const { fileName = '', functionName = '', columnNumber: column, lineNumber: line } = stackFrame;

  // 过滤浏览器插件的报错
  if (fileName.startsWith('chrome-extension://')) {
    return;
  }

  eventTrack.send({
    type: EventType.UNHANDLEDREJECTION,
    category: 'unhandledrejection',
    status: StatusType.Error,
    time: getTimestamp(),
    data: {
      fileName,
      errorType: reason.name ?? 'unknown',
      functionName,
      line,
      column,
      message: unknownToString(reason.message || reason.stack)
    }
  });
};
