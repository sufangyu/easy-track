import { Callback } from './base';
import { DeviceInfo } from './global';
import { CacheType } from './options';

/**
 * 事件类型
 *
 * @export
 * @enum {number}
 */
export enum EventType {
  BLANK_SCREEN = 'blank-screen',
  PERFORMANCE = 'performance',
  RESOURCE = 'resource',
  NETWORK = 'network',
  LOGGER = 'logger',
  XHR = 'xhr',
  FETCH = 'fetch',
  REQUEST = 'request',
  ERROR = 'error',
  UNHANDLEDREJECTION = 'unhandledrejection',
  EVENT_TRACK = 'event-track',
  EXPOSURE_TRACK = 'exposure-track',
  RECORD_SCREEN = 'record-screen',
  PV = 'pv',
  HASH_CHANGE = 'hashchange',
  HISTORY = 'history',
  HISTORY_PUSHSTATE = 'history-pushState',
  HISTORY_REPLACESTATE = 'history-replaceState'
}

/**
 * 事件状态
 *
 * @export
 * @enum {number}
 */
export enum StatusType {
  Ok = 'ok',
  Error = 'error'
}

/**
 * 事件基础参数
 *
 * @interface EventParamsBase
 */
interface EventParamsBase {
  /** 事件发生时间 */
  time: number;
  /** 事件状态 */
  status: StatusType;
  /** 基础信息 */
  baseInfo?: BaseInfo;
  /** 事件数据 */
  data: any;
}

// 白屏事件
interface EventParamsBlankScreen extends EventParamsBase {
  type: EventType.BLANK_SCREEN;
  category: 'blank-screen';
}

// 网络状态事件
interface EventParamsNetwork extends EventParamsBase {
  type: EventType.NETWORK;
  category: NetworkStatus;
}

// 控制台日志事件
interface EventParamsLogger extends EventParamsBase {
  type: EventType.LOGGER;
  category: keyof Console,
}

// 性能事件
interface EventParamsPerformance extends EventParamsBase {
  type: EventType.PERFORMANCE;
  category: 'performance' | 'longtask' | 'resource' | 'memory';
}

// 埋点事件、曝光事件
interface EventParamsEventTrack extends EventParamsBase {
  type: EventType.EVENT_TRACK;
  category: 'click' | 'exposure';
}

// 录屏事件
interface EventParamsRecordScreen extends EventParamsBase {
  type: EventType.RECORD_SCREEN;
  category: 'record-screen';
}

// 错误事件
interface EventParamsError extends EventParamsBase {
  type: EventType.ERROR | EventType.UNHANDLEDREJECTION | EventType.RESOURCE;
  category: 'error' | 'unhandledrejection' | 'resource';
}

// 网络请求事件
interface EventParamsHttp extends EventParamsBase {
  type: EventType.REQUEST;
  category: 'xhr' | 'fetch';
}

// 页面访问事件
interface EventParamsPage extends EventParamsBase {
  type: EventType.PV;
  category:
    | 'hashchange'
    | 'history'
    | 'history-pushstate'
    | 'history-replaceState'
    | 'pagehide'
    | 'pageshow'
    | 'beforeunload';
}

/**
 * 事件上报信息
 */
export type EventParams =
  | EventParamsBlankScreen
  | EventParamsNetwork
  | EventParamsLogger
  | EventParamsPerformance
  | EventParamsError
  | EventParamsHttp
  | EventParamsEventTrack
  | EventParamsRecordScreen
  | EventParamsPage;

/**
 * 公共信息
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
   * uuid
   * - 使用浏览器指纹标识
   *
   * @type {string}
   * @memberof CommonReportParams
   */
  uuid: string;
  // /**
  //  * 基础信息
  //  *
  //  * @type {BaseInfo}
  //  * @memberof CommonReportParams
  //  */
  // baseInfo: BaseInfo;
  /**
   * 设备信息
   *
   * @type {DeviceInfo}
   * @memberof CommonReportParams
   */
  deviceInfo: DeviceInfo;
}

/**
 * 基础信息
 *
 * @export
 * @interface BaseInfo
 */
export interface BaseInfo {
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
   * 来源地址
   *
   * @type {string}
   * @memberof BaseInfo
   */
  referer: string;
  /**
   * 浏览器信息
   *
   * @type {string}
   * @memberof CommonReportParams
   */
  userAgent: string;
  /**
   * 设备屏幕物理宽度
   * - window.screen.width
   *
   * @type {number}
   * @memberof BaseInfo
   */
  screenWidth: number;
  /**
   * 设备屏幕物理高度
   * - window.screen.height
   *
   * @type {number}
   * @memberof BaseInfo
   */
  screenHeight: number;
  /**
   * 页面内容宽度
   * - document.body.clientWidth
   *
   * @type {number}
   * @memberof BaseInfo
   */
  vireportWidth: number;
  /**
   * 页面内容高度
   * - document.body.clientHeight
   *
   * @type {number}
   * @memberof BaseInfo
   */
  vireportHeight: number;
  /**
   * 浏览器用户界面的语言
   *
   * @type {string}
   * @memberof BaseInfo
   */
  language: string;
  /**
   * 设备像素比
   * - window.devicePixelRatio
   *
   * @type {number}
   * @memberof BaseInfo
   */
  dpr: number;
  /**
   * 网络类型
   *
   * - 2g, 3g, 4g, wifi
   * - 只做参考, PC 端不一定准确
   *
   * @type {string}
   * @memberof BaseInfo
   */
  networkType: string;
  /**
   * 网络速度
   *
   * - 直接使用 navigator.connection.downlink 的值
   *
   * @type {number}
   * @memberof BaseInfo
   */
  networkSpeed: number;
}

/**
 * 上报信息
 */
export type ReportParams = EventParams & CommonReportParams;

/**
 * 事件上报配置
 */
export interface EventOptions {
  /**
   * 应用编码
   *
   * @type {string}
   * @memberof Options
   */
  appCode: string;
  /**
   * 数据存储类型
   *
   * - 建议使用 storage
   *
   * @type {CacheType}
   * @memberof InitOptions
   */
  cacheType?: CacheType;
  /**
   * 待上传队列数据最大个数,
   *
   * - 默认 10
   * - 超出该值时，会触发数据上报, 上报成功后清空数据
   *
   * @type {number}
   * @memberof InitOptions
   */
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

/**
 * 网络状态
 *
 * @export
 * @enum {number}
 */
export enum NetworkStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  CHANGE = 'change'
}
