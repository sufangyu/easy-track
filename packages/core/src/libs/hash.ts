import { cloneDeep, takeRight } from 'lodash-es';

import eventTrack from '../event';
import options from '../options';
import { EventType, StatusType } from '../types';
import { _global, eventEmitter, getPVTime, getTimestamp, on, parseUrlToObj } from '../utils';

/**
 * 监听hashchange事件
 *
 */
export const listenHashChange = () => {
  on({
    el: _global,
    eventName: 'hashchange',
    event: (ev) => {
      eventEmitter.emit(EventType.HASH_CHANGE, ev as HashChangeEvent);
    }
  });
};

/**
 * hashchange 事件回调函数
 *
 * @return {*}
 */
export const hashCallback = () => {
  let urls: string[] = [];
  return (data: HashChangeEvent) => {
    const { historyUrlsNum } = options.get();
    const { oldURL, newURL } = data;
    const { relative: currentFrom } = parseUrlToObj(oldURL);
    const { relative: currentTo } = parseUrlToObj(newURL);
    const isSame = currentFrom === currentTo;
    if (isSame) {
      return;
    }

    currentTo && urls.push(currentTo);
    // 截取最新的 urls
    urls = takeRight(urls, historyUrlsNum);

    const time = getTimestamp();
    const pv = getPVTime(time, currentFrom);

    eventTrack.add({
      type: EventType.PV,
      category: 'hashchange',
      status: StatusType.Ok,
      time,
      data: {
        from: currentFrom,
        to: currentTo,
        urls: cloneDeep(urls),
        pv
      }
    });
  };
};
