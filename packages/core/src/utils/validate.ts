import { isString, isUndefined } from 'lodash-es';

/**
 * 任意格式数据转为字符串
 *
 * @param {unknown} target 数据
 * @return {*}
 */
export const unknownToString = (target: unknown) => {
  if (isString(target)) {
    return target as string;
  }

  if (isUndefined(target)) {
    return 'undefined';
  }

  return JSON.stringify(target);
};

/**
 * 任意格式尝试转为对象
 * - 成功: 返回对象
 * - 失败: 返回原始数据
 *
 * @param {unknown} target
 * @return {*}
 */
export const unknownToObject = (target: unknown): Record<string, any> | any => {
  try {
    return JSON.parse(target as string);
  } catch (_error) {
    return target;
  }
};
