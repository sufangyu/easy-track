/**
 * 数据存储类型
 */
declare type CacheType = 'normal' | 'storage' | 'db';

/**
 * 公共上报信息
 */
declare interface CommonReportParams {
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
 * 设备信息
 *
 * @export
 * @interface DeviceInfo
 */
declare interface DeviceInfo {
    browserVendor: string;
    browserVersion: string;
    os: string;
    osVersion: string;
    device: string;
    deviceType: string;
    deviceVendor: string;
}

declare type EventCategory = 'click' | 'request' | 'xhr' | 'fetch' | 'download' | 'request' | 'enter_page' | 'error' | 'unhandledrejection' | 'leave_page' | 'hide_page' | 'show_page' | 'push_page' | 'performance' | 'blank_screen' | 'longtask' | 'resource' | 'memory' | 'recordscreen' | 'hashchange' | 'history' | 'history_pushstate' | 'history_replaceState' | 'pv';

/**
 * 事件上报信息
 */
declare interface EventParams {
    type: EventType;
    category: EventCategory;
    time: number;
    status: StatusType;
    data: any;
}

declare const enum EventType {
    BLANK_SCREEN = "blank_screen",
    PERFORMANCE = "performance",
    XHR = "xhr",
    FETCH = "fetch",
    HTTP = "http",
    ERROR = "error",
    UNHANDLEDREJECTION = "unhandledrejection",
    EVENT_TRACK = "click",
    PV = "pv",
    HASH_CHANGE = "hashchange",
    HISTORY = "history",
    HISTORY_PUSHSTATE = "history_pushState",
    HISTORY_REPLACESTATE = "history_replaceState",
    Resource = "resource"
}

declare interface GlobalClickListenerItem {
    /**
     * 元素选择器
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

/**
 * 初始化函数
 *
 * @param {InitOptions} options
 * @return {*}
 */
export declare const init: (options: InitOptions) => Promise<void>;

/**
 * SDK 初始化配置
 *
 * @export
 * @interface InitOptions
 */
export declare interface InitOptions {
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
     *  - headers: 自定义请求头
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
     * @type {CacheType}
     * @memberof InitOptions
     */
    cacheType?: CacheType;
    /**
     * 全局点击监听器
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

/**
 * 数据上报配置
 *
 * - headers: 自定义请求头
 * - reportType: 上报类型
 * - format: 自定义上报格式
 * - customReport: 自定义上报方法
 * - isReport: 自定义上报条件
 */
declare interface ReportOptions {
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

/**
 * 上报信息
 */
declare type ReportParams = EventParams & CommonReportParams;

declare const enum StatusType {
    Ok = "ok",
    Error = "error"
}

declare interface Switch {
    /** 事件埋点 */
    eventTrack: boolean;
    xhr: boolean;
    fetch: boolean;
    error: boolean;
    unhandledrejection: boolean;
    blankScreen: boolean;
    hashchange: boolean;
    history: boolean;
    recordScreen: boolean;
    performance: boolean;
}

/**
 * 用户 ID
 */
declare type UserIdType = string | (() => string);

export { }
