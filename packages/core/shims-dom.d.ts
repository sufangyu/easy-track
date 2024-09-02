declare global {
  interface Navigator {
    readonly connection?: NavigatorConnection;
  }

  interface NavigatorConnection {
    /**
     * 网络类型
     *
     * @type {('2g' | '3g' | '4g' | 'slow-2g')}
     * @memberof NavigatorConnection
     */
    readonly effectiveType?: '2g' | '3g' | '4g' | 'slow-2g';
    /**
     * 设备正在与网络进行通信的连接类型
     *
     * @type {('bluetooth'
     *       | 'cellular'
     *       | 'ethernet'
     *       | 'mixed'
     *       | 'none'
     *       | 'other'
     *       | 'unknown'
     *       | 'wifi'
     *       | 'wimax')}
     * @memberof NavigatorConnection
     */
    readonly type?:
      | 'bluetooth'
      | 'cellular'
      | 'ethernet'
      | 'mixed'
      | 'none'
      | 'other'
      | 'unknown'
      | 'wifi'
      | 'wimax';
    /**
     * 下行速度
     *
     * - Mbps 为单位
     *
     * @type {number}
     * @memberof NavigatorConnection
     */
    readonly downlink?: number;
    /**
     * 最大下行速
     * - 可能为 undefined
     * - 某些浏览器可能不支持
     *
     * @type {number}
     * @memberof NavigatorConnection
     */
    readonly downlinkMax?: number;
    /**
     * 往返延迟
     *
     * @type {number}
     * @memberof NavigatorConnection
     */
    readonly rtt?: number;
    /**
     * 是否启用了数据节省模式
     *
     * @type {boolean}
     * @memberof NavigatorConnection
     */
    readonly saveData?: boolean;
    // onchange?: () => void; // EventListener
  }
}

export {};
