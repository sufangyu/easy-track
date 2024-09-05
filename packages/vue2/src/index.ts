import { PluginObject } from 'vue';

import { eventEmitter, EventType, init, type InitOptions } from '@easy-track/core';

import { version } from '../package.json';

const easyTrackPlugin: PluginObject<InitOptions> = {
  version,
  /**
   * 注册插件
   *
   * @param {*} Vue
   * @param {InitOptions} options
   */
  install: function (Vue, options) {
    init(options!);

    // Vue 全局错误处理
    const handlerOrigin = Vue.config?.errorHandler;

    Vue.config.errorHandler = function (err: Error, vm: any, info: string): void {
      eventEmitter.emit(EventType.ERROR, err);
      handlerOrigin && handlerOrigin.apply(null, [err, vm, info]);
    };
  }
};

export default easyTrackPlugin;
export * from '@easy-track/core';
