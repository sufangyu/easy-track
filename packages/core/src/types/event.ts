import { Callback } from './base';
import { DeviceInfo } from './global';
import { CacheType } from './options';
import { HttpData } from './request';
import { ExposureObserveItem } from './track';

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
  /** 事件数据 */
  data: {
    /** 白屏状态. ok、error  */
    status?: StatusType;
    /** 页面 URL */
    url?: string;
  };
}

// 网络状态事件
interface EventParamsNetwork extends EventParamsBase {
  type: EventType.NETWORK;
  category: NetworkStatus;
  /** 事件数据 */
  data: {
    /** 网络状态 */
    networkState?: NetworkStatus;
    /** 网络类型 */
    // @ts-ignore
    networkType?: NavigatorConnection['effectiveType'];
    /** 网络速度, 单位 Mbps */
    networkSpeed?: number;
  };
}

// 控制台日志事件
interface EventParamsLogger extends EventParamsBase {
  type: EventType.LOGGER;
  category: keyof Console;
  data: {
    /** 日志级别. warn、error */
    level?: keyof Console;
    /** 日志信息 */
    message?: any[];
  };
}

// 性能事件
interface EventParamsPerformance extends EventParamsBase {
  type: EventType.PERFORMANCE;
  category: 'performance' | 'longtask' | 'resource' | 'memory';
  data: // 获取 FCP、LCP、TTFB、FID、FSP 等指标
  | {
        /** 指标名称 */
        name?: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';
        /** 指标评级 */
        rating?: 'good' | 'needs-improvement' | 'poor';
        /** 指标值 */
        value?: number;
      }
    // 长任务
    | PerformanceEntry

    // 内存信息
    | {
        /** 上下文内可用堆的最大体积，以字节计算 */
        jsHeapSizeLimit?: number;
        /** 已分配的堆体积，以字节计算 */
        totalJSHeapSize?: number;
        /** 当前 JS 堆活跃段（segment）的体积，以字节计算 */
        usedJSHeapSize?: number;
      }
    // 资源加载信息
    | PerformanceResourceTiming[];
}

// 埋点事件、曝光事件
interface EventParamsEventTrack extends EventParamsBase {
  type: EventType.EVENT_TRACK;
  category: 'click' | 'blur' | 'exposure';
  data: // click、blur 数据
  | {
        /** 元素选择器 */
        selector?: string;
        /** 输入框的值, input、textarea 才有该值 */
        inputValue?: string;
        /** 元素内容 */
        elementText?: string;
        /** 元素 xPath */
        xPath?: string | null;
        /** 元素坐标尺寸信息 */
        rect?: DOMRect;
        /** 页面 URL */
        url?: string;
        /** 事件名称 */
        eventName?: string;
        /** 事件参数, 主要使用该数据 */
        params?: Record<string, any>;
        /** 事件参数 */
        data?: Record<string, any>;
      }
    // exposure 数据
    | ExposureObserveItem[];
}

// 录屏事件
interface EventParamsRecordScreen extends EventParamsBase {
  type: EventType.RECORD_SCREEN;
  category: 'record-screen';
  data: {
    /** 录屏数据, 已压缩 */
    recordData?: string;
  };
}

// 错误事件
interface EventParamsError extends EventParamsBase {
  type: EventType.ERROR | EventType.UNHANDLEDREJECTION | EventType.RESOURCE;
  category: 'error' | 'unhandledrejection' | 'resource';
  data: {
    /** 文件名称 */
    fileName?: string;
    /** 错误信息的类型 */
    errorType?: string;
    /** 函数名称 */
    functionName?: string;
    /** 行号 */
    line?: number;
    /** 列号 */
    column?: number;
    /** 错误信息 */
    message?: string;
  };
}

// 网络请求事件
interface EventParamsHttp extends EventParamsBase {
  type: EventType.REQUEST;
  category: 'xhr' | 'fetch';
  data: HttpData;
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
  data: {
    /** 页面跳转来源 */
    from?: string;
    /** 页面跳转目标 */
    to?: string;
    /** 历史页面信息 */
    urls?: string[];
    /** 页面访问数据 */
    pv?: {
      /** 进入页面时间 */
      entryTime: number;
      /** 离开页面时间 */
      leaveTime: number;
      /** 停留时间 */
      stayTime: number;
      /** 页面 URL */
      pageUrl: string;
      /** 上一个页面 URL */
      referer: string;
    };
  };
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
