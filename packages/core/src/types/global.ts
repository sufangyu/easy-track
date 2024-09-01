/**
 * 设备信息
 *
 * @export
 * @interface DeviceInfo
 */
export interface DeviceInfo {
  browserVendor: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  device: string;
  deviceType: string;
  deviceVendor: string;
}

export interface EasyTrack {
  /**
   * 设备信息
   * - 
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
