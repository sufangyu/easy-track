import { isArray, isEmpty, merge, uniqBy } from 'lodash-es';
import { EventType, CacheType, Switch, SwitchMap, type InitOptions } from './types';
import { logger } from './utils';
import eventTrack from './event/event';
import report from './report';

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
    xhr: true,
    fetch: true,
    error: true,
    unhandledrejection: true,
    blankScreen: true,
    hashchange: true,
    history: false,
    performance: true,
    resource: true
  },
  containerElements: ['html', 'body', '#app', '#root'],
  skeleton: false,
  maxEvents: 10,
  historyUrlsNum: 3,
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
    // TODO: 校验参数
    // this.validate();
  }

  get(): InitOptions {
    const {
      dsn,
      appCode,
      appVersion,
      userId,
      debug = false,
      cacheType = 'normal',
      containerElements = [],
      skeleton = false,
      maxEvents = 10,
      filterHttpUrl,
      checkHttpStatus,
      historyUrlsNum
    } = this.options;

    return {
      dsn,
      appCode,
      appVersion,
      userId,
      debug,
      cacheType,
      containerElements,
      skeleton,
      report: this.getReport(),
      globalClickListeners: this.getGlobalClickListeners(),
      maxEvents,
      filterHttpUrl,
      checkHttpStatus,
      historyUrlsNum
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
      xhr,
      fetch,
      error,
      unhandledrejection,
      blankScreen,
      hashchange,
      history,
      performance,
      resource
      // recordScreen,
    } = this.getSwitchs();

    if (hashchange && history) {
      logger.warn('hashchange 和 history 不能同时开启, 需按项目路由模式开启');
    }

    this.switchMap[EventType.EVENT_TRACK] = eventTrack;
    this.switchMap[EventType.XHR] = xhr;
    this.switchMap[EventType.FETCH] = fetch;
    this.switchMap[EventType.ERROR] = error;
    this.switchMap[EventType.UNHANDLEDREJECTION] = unhandledrejection;
    this.switchMap[EventType.BLANK_SCREEN] = blankScreen;
    this.switchMap[EventType.HASH_CHANGE] = hashchange;
    this.switchMap[EventType.HISTORY] = history;
    this.switchMap[EventType.PERFORMANCE] = performance;
    this.switchMap[EventType.RESOURCE] = resource;
  }
}

/**
 * 必传项校验
 *
 * @param {*} val 值
 * @param {string} name 名称
 * @return {*}  {boolean}
 */
function _validateOptionMustFill(val: any, name: string): boolean {
  if (typeof val === 'function') {
    return true;
  }

  if (isEmpty(val)) {
    logger.warn(`【${name}】参数必填`);
    return false;
  }

  return true;
}

/**
 * 必传校验
 *
 * @param {Options} options
 * @return {*}  {boolean}
 */
function _validateMustFill(options: InitOptions): boolean {
  const validateList: boolean[] = [
    _validateOptionMustFill(options.dsn, 'dsn'),
    _validateOptionMustFill(options.appCode, 'appCode'),
    _validateOptionMustFill(options.userId, 'userId')
  ];

  return validateList.every((res) => !!res);
}

export const options = new Options();

export function initOptions(initOptions: InitOptions): boolean {
  const { debug } = initOptions;
  logger.setFlag(debug);

  // 必传校验 && TODO: 入参类型校验
  if (!_validateMustFill(initOptions)) {
    return false;
  }

  options.set(initOptions);
  const curOptions = options.get();
  console.log('curOptions', curOptions);

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

export default options;
