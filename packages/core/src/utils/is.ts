function isType(type: any) {
  return function (value: any): boolean {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
  };
}

export const isRegExp = isType('RegExp');
export const isNumber = isType('Number');
export const isString = isType('String');
export const isBoolean = isType('Boolean');
export const isNull = isType('Null');
export const isUndefined = isType('Undefined');
export const isSymbol = isType('Symbol');
export const isFunction = isType('Function');
export const isObject = isType('Object');
export const isArray = isType('Array');
export const isProcess = isType('process');
export const isWindow = isType('Window');
export const isFlase = (val: any) => isBoolean(val) && String(val) === 'false';

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
