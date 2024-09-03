import eventTrack from './event';
import { initOptions } from './options';
import { initReplace } from './repace';
import { setupCache } from './setup';
import { EventType, StatusType, type InitOptions } from './types';
import { _global, eventEmitter } from './utils';

/**
 * 初始化函数
 *
 * @param {InitOptions} options
 * @return {*}
 */
const init = async (options: InitOptions) => {
  // 初始化配置
  if (!initOptions(options)) {
    return;
  }

  // 注册缓存
  await setupCache();

  // 注册全局AOP/拦截器
  initReplace();
};

export { init, eventTrack, eventEmitter, EventType, StatusType, type InitOptions };
