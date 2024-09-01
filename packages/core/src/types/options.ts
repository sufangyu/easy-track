import { EventType, ReportParams } from './event';
import { ExposureTrackElement } from './track';

/**
 * 用户 ID
 */
export type UserIdType = string | (() => string);

/**
 * 数据存储类型
 */
export type CacheType = 'normal' | 'storage' | 'db';

/**
 * 数据上报配置
 *
 * - headers: 自定义请求头
 * - reportType: 上报类型
 * - format: 自定义上报格式
 * - customReport: 自定义上报方法
 * - isReport: 自定义上报条件
 */
export interface ReportOptions {
  /**
   * 自定义请求头
   *
   * @memberof ReportOptions
   */
  headers?: Object | (() => Object);
  /**
   * 上报类型
   *
   * @type {("img" | "http" | "beacon")}
   * @memberof ReportOptions
   */
  reportType?: 'img' | 'http' | 'beacon';
  /**
   * 自定义上报格式
   * @param data 上报数据
   * @returns
   */
  format?: (data: ReportParams[]) => any;
  /**
   * 自定义上报方法
   * @param data 上报数据
   * @returns
   */
  customReport?: (data: ReportParams[]) => any;
  /**
   * 返回一个布尔值决定要不要上报
   * @param data 上报数据
   * @returns
   */
  isReport?: (data: any[]) => boolean;
}

export interface GlobalClickListenerItem {
  /**
   * 元素选择器
   *
   * - 默认: [data-track], 即元素有 data-track 属性的元素
   * - #ID
   * - .class
   * - tag
   *
   * @type {string}
   * @memberof GlobalClickListenerItem
   */
  selector?: string;
  /**
   * 元素文本
   *
   * @type {string}
   * @memberof GlobalClickListenerItem
   */
  elementText?: string;
  /**
   * 事件名称
   *
   * @type {string}
   * @memberof GlobalClickListenerItem
   */
  eventName?: string;
  /**
   * 事件数据
   *
   * @type {string}
   * @memberof GlobalClickListenerItem
   */
  data?: string | Record<string, any>;
}

export interface Switch {
  /** 事件埋点 */
  eventTrack: boolean;
  /** 元素曝光 */
  exposureTrack: boolean;
  /** XMLHttpRequest 请求 */
  xhr: boolean;
  /** fetch 请求 */
  fetch: boolean;
  /** 错误 */
  error: boolean;
  /** 异步错误 */
  unhandledrejection: boolean;
  /** 白屏检测 */
  blankScreen: boolean;
  /** hashchange 模式页面监听 */
  hashchange: boolean;
  /** history 模式页面监听 */
  history: boolean;
  /** 性能 */
  performance: boolean;
  /** 加载资源 */
  resource: boolean;
  /** 录屏 */
  recordScreen: boolean;
}

/**
 * 功能开关
 */
export type SwitchMap = Record<EventType, boolean>;

/**
 * SDK 初始化配置
 *
 * @export
 * @interface InitOptions
 */
export interface InitOptions {
  /**
   * 上报地址
   *
   * @type {string}
   * @memberof Options
   */
  dsn: string;
  /**
   * 应用编码
   *
   * @type {string}
   * @memberof Options
   */
  appCode: string;
  /**
   * 应用版本
   *
   * @type {string}
   * @memberof Options
   */
  appVersion?: string;
  /**
   * 用户 ID
   *
   * @type {UserIdType}
   * @memberof InitOptions
   */
  userId: UserIdType;
  /**
   * 设备 ID
   * - TODO: 改为浏览器指纹
   *
   * @type {string}
   * @memberof InitOptions
   */
  uuid?: string;
  /**
   * 请求上报配置
   *
   * - headers: 自定义请求头
   * - reportType: 上报类型
   * - format: 自定义上报格式
   * - customReport: 自定义上报方法
   * - isReport: 自定义上报条件
   *
   * @type {ReportOptions}
   * @memberof InitOptions
   */
  report?: ReportOptions;
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
   * 全局点击监听器
   *
   * - 默认值: '[{ selector: '[data-track]' }]
   * - 设置为空数组时, 表示全监听
   *
   * ```ts
   * // 示例
   * [
   *   {
   *     selector: ".r", // 选择器 + 元素文本
   *     elementText: "report3",
   *     data: "report data3", // 上报数据
   *   },
   * ]
   * ```
   *
   * @type {GlobalClickListenerItem[]}
   * @memberof InitOptions
   */
  globalClickListeners?: GlobalClickListenerItem[];
  /**
   * 元素容器集合
   *
   * @type {string[]}
   * @memberof InitOptions
   */
  containerElements?: string[];
  /**
   * 是否骨架屏项目
   *
   * @type {boolean}
   * @memberof InitOptions
   */
  skeleton?: boolean;
  /**
   * 功能开关配置
   *
   * @type {Partial<Switch>}
   * @memberof Options
   */
  switchs?: Partial<Switch>;
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
  /**
   * 判断响应数据是否是成功
   *
   * - 默认不传时 HTTP 状态码在 >=200 & < 400 时为成功
   *
   * ```ts
   * // 示例
   * checkHttpStatus: (res) => {
   *   return res.status === 200
   * }
   * ```
   * @memberof InitOptions
   */
  checkHttpStatus?: (res: Partial<Response>) => boolean;
  /**
   * 过滤上报的请求 url
   *
   * 返回 true 则不上报该 url
   *
   * @memberof InitOptions
   */
  filterHttpUrl?: (url: string, method: string) => boolean;
  /**
   * 需要记录的url跳转数组长度上限, 默认 3
   *
   * @type {number}
   * @memberof InitOptions
   */
  historyUrlsNum?: number;
  /**
   * 性能监控配置
   *
   * @memberof InitOptions
   */
  performance?: {
    /**
     * 过滤长任务上报, 默认上报所有长任务
     * 
     * - 返回 true 时不上报该长任务, 通常针对某个页面 URL 做判断
     */
    filterLongtask?: () => boolean;
  };
  /**
   *  元素曝光配置
   */
  exposureTrack?: {
    /**
     * 监控元素集合
     * 
     * - 默认值: '[data-exposure-track]'
     * @type {ExposureTrackElement[]}
     */
    elements?: ExposureTrackElement[];
    /**
     * 曝光标记属性
     * 
     * - 默认值: 'data-exposure'
     * @type {string}
     */
    exposureIdAttr?: string;
    /**
     * 最小曝光时间, 超过即表示为曝光
     * 
     * - 默认值: 500
     * @type {number}
     */
    minObserveTime?: number;
  };
  /**
   * 是否开启调试
   *
   * - 默认 false
   * - 会打印 log 日志
   *
   * @type {boolean}
   * @memberof InitOptions
   */
  debug?: boolean;
}
