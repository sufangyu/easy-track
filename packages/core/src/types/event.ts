import { Callback } from './base';
import { DeviceInfo } from './global';
import { CacheType } from './options';

/**
 * 事件类型
 *
 * @export
 * @enum {number}
 */
export const enum EventType {
  BLANK_SCREEN = 'blank-screen',
  PERFORMANCE = 'performance',
  RESOURCE = 'resource',
  XHR = 'xhr',
  FETCH = 'fetch',
  REQUEST = 'request',
  ERROR = 'error',
  UNHANDLEDREJECTION = 'unhandledrejection',
  EVENT_TRACK = 'event-track',
  EXPOSURE_TRACK = 'exposure-track',
  PV = 'pv',
  HASH_CHANGE = 'hashchange',
  HISTORY = 'history',
  HISTORY_PUSHSTATE = 'history-pushState',
  HISTORY_REPLACESTATE = 'history-replaceState'
}

export const enum StatusType {
  Ok = 'ok',
  Error = 'error'
}

// 基础事件参数
interface EventParamsBase {
  time: number;
  status: StatusType;
  data: any;
}

// 白屏
interface EventParamsBlankScreen extends EventParamsBase {
  type: EventType.BLANK_SCREEN;
  category: 'blank-screen';
}

// 性能
interface EventParamsPerformance extends EventParamsBase {
  type: EventType.PERFORMANCE;
  category: 'performance' | 'longtask' | 'resource' | 'memory';
}

// 埋点、曝光
interface EventParamsEventTrack extends EventParamsBase {
  type: EventType.EVENT_TRACK;
  category: 'click' | 'exposure';
}

// 错误
interface EventParamsError extends EventParamsBase {
  type: EventType.ERROR | EventType.UNHANDLEDREJECTION | EventType.RESOURCE;
  category: 'error' | 'unhandledrejection' | 'resource';
}

// 网络请求
interface EventParamsHttp extends EventParamsBase {
  type: EventType.REQUEST;
  category: 'xhr' | 'fetch';
}

// 页面访问
interface EventParamsPage extends EventParamsBase {
  type: EventType.PV;
  category:
    | 'hashchange'
    | 'history'
    | 'history-pushstate'
    | 'history-replaceState'
    | 'pagehide'
    | 'pageshow';
}

/**
 * 事件上报信息
 */
export type EventParams =
  | EventParamsBlankScreen
  | EventParamsPerformance
  | EventParamsError
  | EventParamsHttp
  | EventParamsEventTrack
  | EventParamsPage;

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

/**
 *  路由参数
 */
export interface RouteParams {
  from: string;
  to: string;
}
