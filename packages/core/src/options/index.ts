/* eslint-disable no-console */
import { isArray, isUndefined, merge, uniqBy } from 'lodash-es';

import eventTrack from '../event';
import report from '../report';
import { PACKAGES_NAME } from '../setting';
import { EventType, CacheType, Switch, SwitchMap, type InitOptions } from '../types';
import { isTypeofAny, logger } from '../utils';

const getDefaultOptions = (): InitOptions => ({
  dsn: '',
  appCode: '',
  appVersion: '',
  userId: '',
  report: {
    headers: {},
    reportType: 'http'
  },
  cacheType: 'storage',
  switchs: {
    eventTrack: true,
    exposureTrack: true,
    xhr: true,
    fetch: true,
    error: true,
    unhandledrejection: true,
    blankScreen: true,
    hashchange: true,
    history: false,
    performance: true,
    resource: true,
    recordScreen: true,
    network: true,
    logger: true
  },
  containerElements: ['html', 'body', '#app', '#root'],
  skeleton: false,
  maxEvents: 10,
  historyUrlsNum: 3,
  exposureTrack: {},
  debug: false
});

class Options {
  private options: InitOptions = getDefaultOptions();

  private switchMap = {} as SwitchMap;

  constructor(options?: InitOptions) {
    if (options) {
      this.options = options;
    }
  }

  set(otps: InitOptions) {
    const { options } = this;
    this.options = merge(options, otps);
    this.setSwitchMap();
  }

  get(): InitOptions {
    return {
      ...this.options,
      report: this.getReport(),
      globalClickListeners: this.getGlobalClickListeners()
    };
  }

  setCacheType(cacheType: CacheType) {
    this.options = merge(this.options, { cacheType });
  }

  getReport() {
    return this.options.report;
  }

  getGlobalClickListeners() {
    const { globalClickListeners } = this.options;
    if (!isArray(globalClickListeners)) return [];
    return uniqBy(globalClickListeners, (o) => `${o.selector}${o.elementText}${o.data}`);
  }

  getSwitchMap(): SwitchMap {
    return this.switchMap;
  }

  getSwitchs(): Switch {
    const curSwitchs = (this.options?.switchs ?? {}) as Switch;

    return {
      ...curSwitchs
    };
  }

  /**
   * 设置监控功能开关
   *
   * @memberof Options
   */
  setSwitchMap() {
    const {
      eventTrack,
      exposureTrack,
      xhr,
      fetch,
      error,
      unhandledrejection,
      blankScreen,
      hashchange,
      history,
      performance,
      resource,
      recordScreen,
      network,
      logger: log
    } = this.getSwitchs();

    if (hashchange && history) {
      logger.warn('hashchange 和 history 不能同时开启, 需按项目路由模式开启');
    }

    this.switchMap[EventType.EVENT_TRACK] = eventTrack;
    this.switchMap[EventType.EXPOSURE_TRACK] = exposureTrack;
    this.switchMap[EventType.RECORD_SCREEN] = recordScreen;
    this.switchMap[EventType.XHR] = xhr;
    this.switchMap[EventType.FETCH] = fetch;
    this.switchMap[EventType.ERROR] = error;
    this.switchMap[EventType.UNHANDLEDREJECTION] = unhandledrejection;
    this.switchMap[EventType.BLANK_SCREEN] = blankScreen;
    this.switchMap[EventType.HASH_CHANGE] = hashchange;
    this.switchMap[EventType.HISTORY] = history;
    this.switchMap[EventType.PERFORMANCE] = performance;
    this.switchMap[EventType.RESOURCE] = resource;
    this.switchMap[EventType.NETWORK] = network;
    this.switchMap[EventType.LOGGER] = log;
  }
}

/**
 * 必传项校验
 *
 * @param {*} val 值
 * @param {string} name 名称
 * @return {*}  {boolean}
 */
const validateOptionMustFill = (val: any, name: string): boolean => {
  if (typeof val === 'function') {
    return true;
  }

  if (isUndefined(val)) {
    console.warn(`【${name}】参数必填`);
    return false;
  }

  return true;
};

/**
 * 必传校验
 *
 * @param {Options} options
 * @return {*}  {boolean}
 */
const _validateMustFill = (options: InitOptions): boolean => {
  const validateList: boolean[] = [
    validateOptionMustFill(options.dsn, 'dsn'),
    validateOptionMustFill(options.appCode, 'appCode'),
    validateOptionMustFill(options.userId, 'userId')
  ];

  return validateList.every((res) => !!res);
};

/**
 * 验证选项的类型是否符合要求
 * @param value 值
 * @param targetName 对象名
 * @param expectType 期望类型
 * @returns 是否通过验证
 */
const validateOption = (value: any, targetName: string, expectType: string): boolean => {
  // console.log(
  //   '当前参数:',
  //   targetName,
  //   '值 =>',
  //   value,
  //   '类型 =>',
  //   isTypeofAny(value),
  //   '期望类型 =>',
  //   expectType,
  //   '结果=>',
  //   !value || isTypeofAny(value) === expectType
  // );

  if (!value || isTypeofAny(value) === expectType) {
    return true;
  }

  console.error(
    `[${PACKAGES_NAME}]:`,
    `参数类型错误!【${targetName}】期望传入${expectType}类型，目前是${isTypeofAny(value)}类型`
  );
  return false;
};

const _validateInitOption = (options: InitOptions): boolean => {
  const {
    dsn,
    appCode,
    appVersion,
    userId,
    uuid,
    report,
    cacheType,
    globalClickListeners,
    containerElements,
    skeleton,
    switchs,
    maxEvents,
    checkHttpStatus,
    filterHttpUrl,
    historyUrlsNum,
    performance,
    exposureTrack,
    debug
  } = options;

  const validateList = [
    validateOption(dsn, 'dsn', 'string'),
    validateOption(appCode, 'appCode', 'string'),
    validateOption(appVersion, 'appVersion', 'string'),

    validateOption(cacheType, 'cacheType', 'string'),
    validateOption(globalClickListeners, 'globalClickListeners', 'array'),
    validateOption(containerElements, 'containerElements', 'array'),
    validateOption(skeleton, 'skeleton', 'boolean'),
    validateOption(switchs, 'switchs', 'object'),
    validateOption(maxEvents, 'maxEvents', 'number'),
    validateOption(checkHttpStatus, 'checkHttpStatus', 'function'),
    validateOption(filterHttpUrl, 'filterHttpUrl', 'function'),
    validateOption(historyUrlsNum, 'historyUrlsNum', 'number'),
    validateOption(debug, 'debug', 'boolean')
  ];

  // userId
  if (userId && typeof userId === 'function') {
    validateList.push(validateOption(userId, 'userId', 'function'));
  } else {
    validateList.push(validateOption(userId, 'userId', 'string'));
  }

  // uuid
  if (uuid && typeof uuid === 'function') {
    validateList.push(validateOption(uuid, 'uuid', 'function'));
  } else {
    validateList.push(validateOption(uuid, 'uuid', 'string'));
  }

  // 上报配置
  if (report && typeof report === 'object') {
    if (typeof report.headers === 'function') {
      validateList.push(validateOption(report.headers, 'report.headers', 'function'));
    } else {
      validateList.push(validateOption(report.headers, 'report.headers', 'object'));
    }
    validateList.push(validateOption(report.reportType, 'report.reportType', 'string'));
    validateList.push(validateOption(report.format, 'report.format', 'function'));
    validateList.push(validateOption(report.customReport, 'report.customReport', 'function'));
    validateList.push(validateOption(report.isReport, 'report.isReport', 'function'));
  }

  // 性能
  if (performance) {
    validateList.push(
      validateOption(performance.filterLongtask, 'performance.filterLongtask', 'function')
    );
  }

  // 曝光配置
  validateList.push(validateOption(exposureTrack, 'exposureTrack', 'object'));
  validateList.push(validateOption(exposureTrack?.elements, 'exposureTrack.elements', 'array'));
  validateList.push(
    validateOption(exposureTrack?.exposureIdAttr, 'exposureTrack.exposureIdAttr', 'string')
  );
  validateList.push(
    validateOption(exposureTrack?.minObserveTime, 'exposureTrack.minObserveTime', 'number')
  );

  return validateList.every((res) => !!res);
};

export const options = new Options();

export default options;

/**
 * 初始化配置
 *
 * @param {InitOptions} initOptions 初始化参数
 * @return {*}  {boolean}
 */
export function initOptions(initOptions: InitOptions): boolean {
  const { debug } = initOptions;
  logger.setFlag(debug);

  // 必传校验 && 入参类型校验
  if (!_validateMustFill(initOptions) || !_validateInitOption(initOptions)) {
    console.error(`[${PACKAGES_NAME}]:`, '初始化失败, 请检查初始化参数');
    return false;
  }

  options.set(initOptions);
  const curOptions = options.get();

  const { dsn, report: reportOptions, appCode, cacheType, maxEvents, userId } = curOptions;

  // 初始化监控模块
  eventTrack.setOptions({
    appCode,
    cacheType,
    maxEvents
  });

  // 初始化上报模块
  report.setOptions({
    dsn,
    userId,
    ...reportOptions
  });

  return true;
}
