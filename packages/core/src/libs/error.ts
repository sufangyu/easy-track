import { parse } from 'error-stack-parser-es';
import { EventType, StatusType } from '../types';
import { _global, eventEmitter, getTimestamp, interceptStr, on } from '../utils';
import eventTrack from '../event/event';

/**
 * 监听全局错误事件
 *
 * - 运行时错误、语法错误、跨域脚本时, 会触发ErrorEvent接口的error事件
 * - 资源（如图片、样式、脚本等）加载失败时,会触发Event接口的error事件
 *
 */
export const listenError = () => {
  on({
    el: _global,
    eventName: 'error',
    event: (err) => {
      eventEmitter.emit(EventType.ERROR, err as ErrorEvent);
    },
    capture: true
  });
};

/**
 * error 事件回调函数
 *
 * @return {*}
 */
export const errorCallback: () => (
  data: ErrorEvent & {
    target?: { localName?: string; src?: string; href?: string };
    error?: any;
    message?: string;
  }
) => void = () => (ev) => {
  const { target, error = '' } = ev;

  if (target && !target?.localName) {
    // 语法错误
    const [stackFrame] = parse(!target ? ev : error);
    const { fileName = '', functionName = '', columnNumber: column, lineNumber: line } = stackFrame;

    // 过滤浏览器插件的报错
    if (fileName.startsWith('chrome-extension://')) {
      return;
    }

    const data = {
      fileName,
      functionName,
      line,
      column
    };
    eventTrack.send({
      type: EventType.ERROR,
      category: 'error',
      time: getTimestamp(),
      status: StatusType.Error,
      data
    });
  }

  if (target?.localName) {
    // 资源加载错误
    const url = target?.src || target?.href || '';
    const data = {
      name: target?.localName || '',
      url: interceptStr(url, 250),
      message: `${interceptStr(url, 250)}资源加载失败`
    };

    eventTrack.send({
      type: EventType.ERROR,
      category: 'resource',
      time: getTimestamp(),
      status: StatusType.Error,
      data
    });
  }
};
