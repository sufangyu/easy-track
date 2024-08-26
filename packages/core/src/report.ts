import { isArray, isFunction } from 'lodash-es';
import {
  Callback,
  CommonReportParams,
  EventParams,
  ReportClassOptions,
  ReportParams,
  RequestMethod
} from './types';
import { getCurrentDomain, getCurrentHref, getUserAgent, getUUID } from './utils/common';
import { __EASY_TRACK__, isSupportFetch, logger, Queue } from './utils';

export class Report {
  private options!: ReportClassOptions;

  private queue = new Queue();

  setOptions(options: ReportClassOptions) {
    this.options = options;
  }

  private getUserId(): string {
    const { userId } = this.options;
    return isFunction(userId) ? userId() : userId;
  }

  private getHeaders() {
    const { headers } = this.options;
    return isFunction(headers) ? headers() : headers;
  }

  /**
   * 获取公共上报数据
   *
   * TODO: 增加屏幕信息、DPR、网络信息、浏览器指纹等
   *
   * @return {*}  {CommonReportParams}
   * @memberof Report
   */
  getCommonReportData(): CommonReportParams {
    return {
      userId: this.getUserId(),
      uuid: getUUID(),
      domain: getCurrentDomain(),
      href: getCurrentHref(),
      userAgent: getUserAgent(),
      deviceInfo: __EASY_TRACK__.deviceInfo!
    };
  }

  /**
   * 获取上报数据
   *
   * @param {EventParams} data
   * @return {*}  {ReportParams}
   * @memberof Report
   */
  getReportData(data: EventParams): ReportParams {
    return {
      ...data,
      ...this.getCommonReportData()
    };
  }

  /**
   * 上报数据
   *
   * @param {(EventParams | EventParams[])} data
   * @param {Callback} [beforeSend]
   * @return {*}
   * @memberof Report
   */
  async send(data: EventParams | EventParams[], beforeSend?: Callback) {
    const currentData = isArray(data) ? data : [data];
    const { dsn: url, format, customReport, reportType = 'http', isReport } = this.options;

    // TODO: 分开上报数据和基础公共数据
    let reportData = currentData.map((item) => this.getReportData(item));
    reportData = isFunction(format) ? format(reportData) : reportData;

    // 当前不上报
    if (isFunction(isReport) && !isReport(reportData)) {
      logger.log('Cancel Report', reportData);
      return;
    }

    logger.log('Report data：', reportData);
    beforeSend?.();

    // 自定义上报
    if (isFunction(customReport)) {
      customReport(reportData);
      return;
    }

    // 内置上报方法
    switch (reportType) {
      case 'beacon':
        this.beaconReport(url, reportData);
        break;
      case 'img':
        this.imgReport(url, reportData);
        break;
      default:
        this.httpReport(url, reportData);
        break;
    }
  }

  beaconReport(url: string, data: ReportParams[]): boolean {
    return navigator.sendBeacon(url, JSON.stringify(data));
  }

  imgReport(url: string, data: ReportParams[]) {
    const requestFunc = () => {
      const img = new Image();
      const spliceStr = url.indexOf('?') === -1 ? '?' : '&';
      img.src = `${url}${spliceStr}data=${encodeURIComponent(JSON.stringify(data))}`;
    };
    this.queue.addFunc(requestFunc);
  }

  async httpReport(url: string, data: ReportParams[]): Promise<void> {
    isSupportFetch() ? this.fetchReport(url, data) : this.xhrReport(url, data);
  }

  async fetchReport(url: string, data: ReportParams[]): Promise<void> {
    const headers = this.getHeaders() ?? {};
    const allHeaders: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    Object.keys(headers).forEach((key) => {
      allHeaders[key] = encodeURIComponent(headers[key]);
    });

    const requestFunc = () => {
      fetch(url, {
        method: RequestMethod.POST,
        body: JSON.stringify(data),
        headers: allHeaders
      });
    };

    this.queue.addFunc(requestFunc);
  }

  async xhrReport(url: string, data: ReportParams[]): Promise<void> {
    const requestFunc = () => {
      const xhr = new XMLHttpRequest();

      xhr.open(RequestMethod.POST, url, true);

      xhr.setRequestHeader('Content-Type', 'application/json');
      const headers = this.getHeaders() ?? {};
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, encodeURIComponent(headers[key]));
      });

      xhr.send(JSON.stringify(data));
    };

    this.queue.addFunc(requestFunc);
  }
}

const report = new Report();

export default report;
