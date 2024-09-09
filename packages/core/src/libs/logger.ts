/* eslint-disable no-console, no-undef */
import { isFunction } from 'lodash-es';

import eventTrack from '../event';
import { EventType, StatusType } from '../types';
import { _global, eventEmitter, getTimestamp } from '../utils';

const wrapConsoleMethod = (
  level: keyof Console,
  callback: (level: keyof Console, args: any[]) => void
) => {
  if (!('console' in _global) || !(level in (_global as Window & typeof globalThis).console)) {
    return;
  }

  const originalMethod = console[level] as (...args: any[]) => void;

  (console as any)[level] = function (...args: any[]) {
    isFunction(callback) && callback(level, args);
    originalMethod(...args);
  };
};

/**
 * 重写 console
 *
 */
export const replaceConsole = () => {
  const consoleLevels: Array<keyof Console> = ['warn', 'error'];

  consoleLevels.forEach((level) => {
    wrapConsoleMethod(level, (level, message) => {
      eventEmitter.emit(EventType.LOGGER, { level, message });
    });
  });
};

/**
 * logger 回调上报
 *
 * @return {*}
 */
export const loggerCallback = () => {
  return (data: { level: keyof Console; message: any[] }) => {
    const { level, message } = data;
    eventTrack.add({
      type: EventType.LOGGER,
      category: level,
      time: getTimestamp(),
      status: StatusType.Error,
      data: {
        level,
        message: message
      }
    });
  };
};
