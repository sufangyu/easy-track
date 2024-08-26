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
  /** 设备信息 */
  deviceInfo: DeviceInfo;
  /** 页面信息 */
  pv: {
    /** 访问页面的时间 */
    entryTime: number;
  };

  report: any;
  // TODO: 给录屏使用
  hasError: boolean;
  recordScreenId: any;
}

export interface Global extends Window {
  // /**
  //  * 是否已经初始化
  //  *
  //  * @type {boolean}
  //  * @memberof Global
  //  */
  // __easyTracingInit__?: boolean;
  /**
   * 监控器对象
   *
   * @type {EasyTrack}
   * @memberof Global
   */
  __EASY_TRACK__?: Partial<EasyTrack>;
}
