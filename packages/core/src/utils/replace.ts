import { VoidFunc } from '../types';

/**
 * 替换函数对象中的方法
 *
 * @param source 源对象
 * @param name 要替换的方法名
 * @param replacement 替换函数
 * @param isForced 是否强制替换（即使源对象中没有对应的方法）
 * @returns
 */
export const replaceAop = (
  source: Record<string, any>,
  name: string,
  replacement: VoidFunc,
  isForced: boolean = false
) => {
  if (source === undefined) {
    return;
  }

  if (name in source || isForced) {
    const original = source[name];
    const wrapped = replacement(original);
    if (typeof wrapped === 'function') {
      source[name] = wrapped;
    }
  }
};
