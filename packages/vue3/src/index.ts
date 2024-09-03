import { eventEmitter, EventType, init, type InitOptions } from '@easy-track/core';

import { ViewModel, Plugin } from './types';
import pkg from '../package.json';

/**
 *  监控插件
/** @type {*} */
const easyTrackPlugin: Plugin = {
  version: pkg.version,
  /**
   * 安装插件
   *
   * @param {*} app
   * @param {InitOptions} options
   */
  install(app: any, options: InitOptions) {
    init(options);

    // Vue3 全局错误处理
    const handlerOrigin = app?.config?.errorHandler;

    // 重写 Vue3 全局错误处理
    app.config.errorHandler = function (err: Error, vm: ViewModel, info: string): void {
      eventEmitter.emit(EventType.ERROR, err);
      handlerOrigin && handlerOrigin.apply(null, [err, vm, info]);
    };
  }
};

export default easyTrackPlugin;
export * from '@easy-track/core';
