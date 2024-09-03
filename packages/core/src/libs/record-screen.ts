import { Base64 } from 'js-base64';
import { isFunction } from 'lodash-es';
import pako from 'pako';
import { record } from 'rrweb';

import eventTrack from '../event';
import { EventType, StatusType } from '../types';
import { __EASY_TRACK__, getTimestamp } from '../utils';

/**
 * 监控操作录屏
 *
 */
export const listenRecordScreen = () => {
  handleRecordScreen({
    callback: (result) => {
      eventTrack.send({
        type: EventType.RECORD_SCREEN,
        category: 'record-screen',
        time: getTimestamp(),
        status: StatusType.Error,
        data: {
          recordData: result
        }
      });
    }
  });
};

/**
 * 录屏
 *
 * @param {RecordScreenOptions} [options]
 */
const handleRecordScreen = (options?: RecordScreenOptions) => {
  const rerecordTime = options?.rerecordTime ?? 10;
  const rerecordEventsMax = options?.rerecordEventsMax ?? 50;

  // events存储录屏信息
  let events: any[] = [];
  // 压缩后的数据
  let eventsBase64 = '';

  record({
    emit(event, isCheckout) {
      // console.log('录屏', events.length, isCheckout, __EASY_TRACK__.hasError);
      if (isCheckout) {
        if (__EASY_TRACK__.hasError) {
          eventsBase64 = zipData(events);
          isFunction(options?.callback) && options?.callback(eventsBase64);
          events = [];
          __EASY_TRACK__.hasError = false;
        } else {
          events = [];
        }
      }

      events.push(event);
    },
    recordCanvas: true,
    checkoutEveryNms: 1000 * rerecordTime, // 重新制作快照间隔
    checkoutEveryNth: rerecordEventsMax // 重新制作快照的最大事件数量
  });
};

interface RecordScreenOptions {
  /**
   * 重新制作快照间隔
   *
   * @type {number}
   * @memberof RecordScreenOptions
   */
  rerecordTime?: number;
  /**
   * 重新制作快照的最大事件数量
   *
   * @type {number}
   * @memberof RecordScreenOptions
   */
  rerecordEventsMax?: number;
  /**
   * 上报回调
   *
   * @memberof RecordScreenOptions
   */
  callback: (result?: string) => void;
}

/**
 * 压缩录屏数据
 *
 * @param {*} data
 * @return {*}  {string}
 */
const zipData = (data: any): string => {
  if (!data) {
    return data;
  }

  const dataJson =
    typeof data !== 'string' && typeof data !== 'number' ? JSON.stringify(data) : data;
  const str = Base64.encode(dataJson as string);
  const binaryData = pako.gzip(str);
  const arr = Array.from(binaryData);
  let resStr = '';
  arr.forEach((it: any) => {
    resStr += String.fromCharCode(it);
  });
  return Base64.btoa(resStr);
};

/**
 * 解压录屏数据
 *
 * @param {string} b64Data
 * @return {*}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unzipData = (b64Data: string) => {
  let strData = Base64.atob(b64Data);
  let charData = strData.split('').map(function (x) {
    return x.charCodeAt(0);
  });
  let binData = new Uint8Array(charData);
  let data = pako.ungzip(binData);

  // 切片处理数据，防止内存溢出报错
  let str = '';
  const chunk = 8 * 1024;
  let i;
  for (i = 0; i < data.length / chunk; i++) {
    // @ts-ignore
    str += String.fromCharCode.apply(null, data.slice(i * chunk, (i + 1) * chunk));
  }
  // @ts-ignore
  str += String.fromCharCode.apply(null, data.slice(i * chunk));

  const unzipStr = Base64.decode(str);
  let result = '';
  // 对象或数组进行JSON转换
  try {
    result = JSON.parse(unzipStr);
  } catch (error) {
    if (/Unexpected token o in JSON at position 0/.test(error as string)) {
      // 如果没有转换成功，代表值为基本数据，直接赋值
      result = unzipStr;
    }
  }
  return result;
};

// const base64 = '';
// const data = unzipData(base64);
// console.log('demo =>', JSON.stringify(data));
