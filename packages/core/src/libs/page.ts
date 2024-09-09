import eventTrack from '../event';
import { EventType, StatusType } from '../types';
import {
  __EASY_TRACK__,
  _global,
  eventEmitter,
  getLocationHref,
  getPVTime,
  getTimestamp,
  on
} from '../utils';

// 页面是否已加载过
let isLoaded = false;

/**
 * 监听页面显示和隐藏事件
 *
 * - 普通 HTML 在页面加载时会触发 pageshow
 * - 普通 HTML 在页面刷新时会触发 pagehide、beforeunload
 */
export const listenPageVisibility = () => {
  on({
    el: _global,
    eventName: 'pageshow',
    event: () => {
      __EASY_TRACK__.pv!.entryTime = getTimestamp();
    }
  });

  on({
    el: _global,
    eventName: 'pagehide',
    event: () => {
      isLoaded && eventEmitter.emit(EventType.PV, 'pagehide');
    }
  });

  on({
    el: _global,
    eventName: 'visibilitychange',
    event: () => {
      if (document.visibilityState === 'visible') {
        __EASY_TRACK__.pv!.entryTime = getTimestamp();
      }

      if (document.visibilityState === 'hidden') {
        isLoaded && eventEmitter.emit(EventType.PV, 'pagehide');
      }
    }
  });

  // 处理原生 HTML 站点 PV 情况 -------------------------------------------------
  on({
    el: _global,
    eventName: 'beforeunload',
    event: () => {
      eventEmitter.emit(EventType.PV, 'beforeunload');
    }
  });
};

export const pvCallback = () => (category: 'beforeunload' | 'pagehide') => {
  const time = getTimestamp();
  const curPageUrl = getLocationHref();
  const pv = getPVTime(time, curPageUrl);

  if (category === 'pagehide') {
    isLoaded = true;
  }

  eventTrack.add({
    type: EventType.PV,
    category,
    status: StatusType.Ok,
    time,
    data: {
      pv
    }
  });
};
