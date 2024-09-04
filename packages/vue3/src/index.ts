import { eventEmitter, EventType, init, type InitOptions } from '@easy-track/core';

import { version } from '../package.json';

import type { ViewModel, Plugin } from './types';

/**
 *  监控插件
/** @type {*} */
const easyTrackPlugin: Plugin = {
  version,
  /**
   * 注册插件
   *
   * @param {*} app
   * @param {InitOptions} options
   */
  install(app: any, options: InitOptions) {
    init(options);

    // Vue 全局错误处理
    const handlerOrigin = app.config?.errorHandler;

    app.config.errorHandler = function (err: Error, vm: ViewModel, info: string): void {
      eventEmitter.emit(EventType.ERROR, err);
      handlerOrigin && handlerOrigin.apply(null, [err, vm, info]);
    };
  }
};

export default easyTrackPlugin;
export * from '@easy-track/core';
