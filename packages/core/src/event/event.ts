import { cloneDeep, isPlainObject } from 'lodash-es';
import { CacheType, EventOptions, EventParams } from '../types';
import { logger } from '../utils';
import report from '../report';
import { db, storage } from '../setup/cache/cache.utils';
import { DB_EVENT_STORE_NAME } from '../setting';

/**
 * 事件追踪
 *
 * @export
 * @class EventTrack
 */
export class EventTrack {
  private data: EventParams[] = [];

  private cacheType!: CacheType;

  private appCode!: string;

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
    logger.log('添加到待上报队列的数据 =>', params);
    logger.log('---------- END ----------');

    if (!this.validate(params)) {
      return;
    }

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
      this.report(cloneDeep(data));
    }
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

  private async report(data: EventParams[]) {
    await this.clearReportData();
    report.send(data, () => this.clearReportData());
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

const eventTrack = new EventTrack();

export default eventTrack;
