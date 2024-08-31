import { init } from '@easy-track/core';

import type { InitOptions } from '@easy-track/core/types';

/**
 * 注册插件
 *
 * @param {*} _app
 * @param {InitOptions} options
 */
function install(_app: any, options: InitOptions) {
  console.log('vue3 install', options);
  init(options);
}

export default install;

export * from '@easy-track/core';
