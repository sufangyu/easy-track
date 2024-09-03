import { isObject, isString } from 'lodash-es';

function isType(type: any) {
  return function (value: any): boolean {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
  };
}

export const isWindow = isType('Window');

/**
 * 判断值是否为空对象
 */
export function isEmptyObject(obj: object): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

/**
 * 判断值是否为空 ['', undefined, null]
 */
export function isEmpty(wat: any): boolean {
  return (isString(wat) && wat.trim() === '') || wat === undefined || wat === null;
}

/**
 * 判断入参类型
 * @param target 任意入参
 * @returns 类型
 */
export function isTypeofAny(target: any): string {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
