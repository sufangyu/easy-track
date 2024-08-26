import { Callback } from './base';
import { DeviceInfo } from './global';
import { CacheType } from './options';

export const enum EventType {
  BLANK_SCREEN = 'blank_screen',
  PERFORMANCE = 'performance',

  XHR = 'xhr',
  FETCH = 'fetch',
  HTTP = 'http',

  ERROR = 'error',
  UNHANDLEDREJECTION = 'unhandledrejection',

  EVENT_TRACK = 'click',

  PV = 'pv',
  HASH_CHANGE = 'hashchange',
  HISTORY = 'history',
  HISTORY_PUSHSTATE = 'history_pushState',
  HISTORY_REPLACESTATE = 'history_replaceState',

  Resource = 'resource'
}

export const enum StatusType {
  Ok = 'ok',
  Error = 'error'
}

export type EventCategory =
  | 'click'
  | 'request'
  | 'xhr'
  | 'fetch'
  | 'download'
  | 'request'
  | 'enter_page'
  | 'error'
  | 'unhandledrejection'
  | 'leave_page'
  | 'hide_page'
  | 'show_page'
  | 'push_page'
  | 'performance'
  | 'blank_screen'
  | 'longtask'
  | 'resource'
  | 'memory'
  | 'recordscreen'
  | 'hashchange'
  | 'history'
  | 'history_pushstate'
  | 'history_replaceState'
  | 'pv';

/**
 * 事件上报信息
 */
export interface EventParams {
  type: EventType;
  category: EventCategory;
  time: number;
  status: StatusType;
  data: any;
}

/**
 * 公共上报信息
 */
export interface CommonReportParams {
  /**
   * 用户信息
   *
   * @type {string}
   * @memberof CommonReportParams
   */
  userId: string;
  /**
   * 域名
   *
   * @type {string}
   * @memberof CommonReportParams
   */
  domain: string;
  /**
   * 页面地址
   *
   * @type {string}
   * @memberof CommonReportParams
   */
  href: string;
  /**
   * uuid
   * TODO: 改成浏览器指纹
   *
   * @type {string}
   * @memberof CommonReportParams
   */
  uuid: string;
  /**
   * 浏览器信息
   *
   * @type {string}
   * @memberof CommonReportParams
   */
  userAgent: string;
  /**
   * 设备信息
   *
   * @type {DeviceInfo}
   * @memberof CommonReportParams
   */
  deviceInfo: DeviceInfo;
}

/**
 * 上报信息
 */
export type ReportParams = EventParams & CommonReportParams;

/**
 * 事件上报配置
 */
export interface EventOptions {
  appCode: string;
  cacheType?: CacheType;
  maxEvents?: number;
}

/**
 * AOP 事件参数
 */
export interface ReplaceParams {
  /**
   *  事件类型
   */
  type: EventType;
  /**
   * 事件订阅触发的回调函数
   *
   * @type {Callback}
   * @memberof ReplaceParams
   */
  callback?: Callback;
}

export interface RouteParams {
  from: string;
  to: string;
}
