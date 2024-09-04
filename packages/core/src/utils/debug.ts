/* eslint-disable no-console */
import { PACKAGES_NAME } from '../setting';

const logPrefix = [`%c[${PACKAGES_NAME}]:`, 'font-weight: normal; color: white'];

export const logger = {
  _flag: false,
  setFlag: (flag: boolean = false) => {
    logger._flag = flag;
  },
  log: (...args: any[]) => {
    if (!logger._flag) {
      return;
    }
    console.log(...logPrefix, ...args);
  },
  warn: (...args: any[]) => {
    if (!logger._flag) {
      return;
    }
    console.warn(...logPrefix, ...args);
  },
  error: (...args: any[]) => {
    if (!logger._flag) {
      return;
    }
    console.error(...logPrefix, ...args);
  }
};

/**
 * 安全执行函数
 *
 * @template T
 * @param {() => T} executor
 * @param {() => T} [errorHandler]
 * @return {*}
 */
export const safeExecute = <T = any>(executor: () => T, errorHandler?: () => T) => {
  try {
    return executor();
  } catch (err) {
    logger.warn(err as string);
    return errorHandler?.();
  }
};
