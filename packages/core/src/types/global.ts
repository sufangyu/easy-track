import { NetworkStatus } from './event';

/**
 * 设备信息
 *
 * @export
 * @interface DeviceInfo
 */
export interface DeviceInfo {
  /** 浏览器供应商或厂商 */
  browserVendor: string;
  /** 浏览器版本 */
  browserVersion: string;
  /** 操作系统类型 */
  os: string;
  /** 操作系统版本 */
  osVersion: string;
  /** 设备模型 */
  device: string;
  /** 设备类型, 如:mobile、tablet */
  deviceType: string;
  /** 设备供应商或厂商 */
  deviceVendor: string;
}

export interface EasyTrack {
  /**
   * 设备信息
   * - 操作系统类型、版本；浏览器版本等
   *
   * @type {DeviceInfo}
   * @memberof EasyTrack
   */
  deviceInfo: DeviceInfo;
  /**
   * 页面信息
   */
  pv: {
    /** 访问页面的时间 */
    entryTime: number;
  };
  /**
   * 是否有错误
   * - 有错误，会上报当前操作的前N秒录屏数据。
   * - 在 数据类型 request 发生错误时, 会设置 hasError 为 true
   *
   * @type {boolean}
   * @memberof EasyTrack
   */
  hasError?: boolean;
  /**
   * 网络离线状态
   *
   * - NetworkStatus.ONLINE: 网络正常（默认值）
   * - NetworkStatus.OFFLINE: 网络异常
   *
   * @type {NetworkStatus}
   * @memberof EasyTrack
   */
  networkStatus: NetworkStatus;
  /**
   * 网络类型
   *
   * @type {('slow-2g' | '2g' | '3g' | '4g' | '5g' | 'wifi' | 'unknown' | '')}
   * @memberof EasyTrack
   */
  networkType: 'slow-2g' | '2g' | '3g' | '4g' | '5g' | 'wifi' | 'unknown' | '';
}

export interface Global extends Window {
  /**
   * 监控器对象
   *
   * @type {EasyTrack}
   * @memberof Global
   */
  __EASY_TRACK__?: Partial<EasyTrack>;
}
