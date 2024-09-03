import { cloneDeep, isPlainObject } from 'lodash-es';

import report from '../report';
import { DB_EVENT_STORE_NAME } from '../setting';
import { db, storage } from '../setup/cache/cache.utils';
import { CacheType, Callback, EventOptions, EventParams, EventType, StatusType } from '../types';
import { __EASY_TRACK__, _global, logger } from '../utils';

/**
 * 事件追踪
 *
 * @export
 * @class EventTrack
 */
export class EventTrack {
  private cacheType!: CacheType;

  private appCode!: string;

  // 待上报队列数据
  private data: EventParams[] = [];

  // 待上传队列数据最大个数
  private maxEvents!: number;

  setOptions(options: EventOptions) {
    const { appCode, cacheType = 'normal', maxEvents = 10 } = options;
    this.appCode = appCode;
    this.cacheType = cacheType;
    this.maxEvents = maxEvents;
  }

  /**
   * 添加上报数据到待上报队列中
   *
   * - 判断上报数据是否合法
   * - 记录上报数据到相应的缓存中
   * - 判断上报数据是否达到/超出队列个数最大限制, 达到则上报数据
   *
   * @param {EventParams} params
   * @memberof EventTrack
   */
  async add(params: EventParams) {
    const { maxEvents, cacheType } = this;
    logger.log('添加到队列:', params);

    if (!this.validate(params)) {
      return;
    }

    this.setErrorForRecordScreen(params);

    let data: EventParams[] = [];
    switch (cacheType) {
      case 'normal':
        this.data.push(params);
        data = this.data;
        break;
      case 'storage':
        storage.putItem(this.appCode, params);
        data = storage.getItem<EventParams[]>(this.appCode) || [];
        break;
      case 'db':
        await db.add(DB_EVENT_STORE_NAME, params);
        data = (await db.getAll(DB_EVENT_STORE_NAME)) || [];
        break;
    }

    if (data.length >= maxEvents) {
      await this.report(cloneDeep(data));
    }
  }

  /**
   * 立即上报数据
   *
   * - 实际上是调用 `report.send` 发送数据
   *
   * @param {(EventParams | EventParams[])} data
   * @param {Callback} [beforeSend]
   * @return {*}
   * @memberof Report
   */
  async send(data: EventParams | EventParams[], beforeSend?: Callback): Promise<void> {
    this.setErrorForRecordScreen(data);

    report.send(data, beforeSend);
  }

  /**
   * 设置错误状态
   *
   * - 当请求报错时出现错误时, 设置 `__EASY_TRACK__.hasError` 为 `true`,
   *   用于上报当前时间段的操作录屏
   *
   * @private
   * @param {EventParams} params
   * @memberof EventTrack
   */
  private setErrorForRecordScreen(params: EventParams | EventParams[]) {
    const paramsList = Array.isArray(params) ? params : [params];

    paramsList.forEach((curParams) => {
      if (curParams.type === EventType.REQUEST && curParams.status === StatusType.Error) {
        __EASY_TRACK__.hasError = true;
      }
    });
  }

  private async clearReportData() {
    const { cacheType, appCode } = this;

    switch (cacheType) {
      case 'normal':
        this.data = [];
        break;
      case 'storage':
        storage.removeItem(appCode);
        break;
      case 'db':
        await db.clear(DB_EVENT_STORE_NAME);
        break;
    }
  }

  /**
   * 上报数据
   *
   * @private
   * @param {EventParams[]} data
   * @memberof EventTrack
   */
  private async report(data: EventParams[]) {
    await this.clearReportData();
    report.send(data, async () => await this.clearReportData());
  }

  private validate(params: EventParams): boolean {
    if (!isPlainObject(params)) {
      logger.warn('上报参数检验错误, 参数必须为对象');
      return false;
    }

    const keys = ['category', 'data', 'status', 'time', 'type'];
    if (Object.keys(params).some((key) => !keys.includes(key))) {
      logger.warn('上报参数检验错误, 缺少必要参数');
      return false;
    }

    return true;
  }
}

/**
 * 监控事件
 *
 * - add: (params: EventParams): Promise<void>
 *     - 添加上报数据到待上报队列中 & 缓存中, 达到/超出队列个数最大限制, 达到则上报数据
 *     - params: 添加的数据
 *
 * - send: (data: EventParams | EventParams[], beforeSend?: Callback): Promise<void>
 *     - 立即上报数据, 实际上是调用 report.send 发送数据
 *     - data: 上报数据
 *     - beforeSend: 发送前回调
 */
const eventTrack = new EventTrack();

export default eventTrack;
