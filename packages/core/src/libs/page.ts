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

export const listenPageVisiable = () => {
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
      eventEmitter.emit(EventType.PV);
    }
  });
};

export const pvCallback = () => () => {
  const time = getTimestamp();
  const curPageUrl = getLocationHref();
  const pv = getPVTime(time, curPageUrl);

  eventTrack.add({
    type: EventType.PV,
    category: 'pagehide',
    status: StatusType.Ok,
    time,
    data: {
      pv
    }
  });
};
