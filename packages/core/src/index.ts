import { initOptions } from './options';
import { initReplace } from './repace';
import { setupCache } from './setup';
import { _global } from './utils';
import type { InitOptions } from './types';

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

export { init, type InitOptions };
