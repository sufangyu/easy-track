/**
 * 曝光元素信息
 *
 * @export
 * @interface ExposureTrackElement
 */
export interface ExposureTrackElement {
  /** 选择器 */
  selector?: string;
}

/**
 * 曝光元素信息
 *
 * @export
 * @interface ExposureObserveItem
 */
export interface ExposureObserveItem {
  /** 标记唯一表示 */
  id: string;
  /** 标记元素 */
  element?: Element;
  /** 标记元素（字符串） */
  selector?: string;
  /** 标记元素在页面中的 XPath */
  xPath: string;
  /** 曝光元素名称 */
  exposureName: string;
  /** 曝光元素数据 */
  exposureParams: Record<string, any> | string;
  /** 开始曝光时间 */
  startTime: number;
  /** 结束曝光时间 */
  endTime: number;
  /** 曝光时长 */
  exposureTime: number;
  /** 是否已经上报 */
  isReported?: boolean;
}
