import eventTrack from '../event';
import { EventType, NetworkStatus, StatusType } from '../types';
import {
  __EASY_TRACK__,
  _global,
  eventEmitter,
  getCurrentNetworkInfo,
  getTimestamp,
  on
} from '../utils';

export const listenNetwork = () => {
  on({
    el: _global,
    eventName: 'online',
    event: () => {
      eventEmitter.emit(EventType.NETWORK, NetworkStatus.ONLINE);
    }
  });

  on({
    el: _global,
    eventName: 'offline',
    event: () => {
      eventEmitter.emit(EventType.NETWORK, NetworkStatus.OFFLINE);
    }
  });
};

export const networkCallback = () => {
  return (networkState: NetworkStatus) => {
    // 网络状态与最后的标识对比, 未发生变化不发送网络事件
    if (__EASY_TRACK__.networkStatus === networkState) {
      return;
    }

    __EASY_TRACK__.networkStatus = networkState;
    const curNetworkInfo = getCurrentNetworkInfo();
    eventTrack.send({
      type: EventType.NETWORK,
      category: networkState,
      time: getTimestamp(),
      status: networkState === NetworkStatus.OFFLINE ? StatusType.Error : StatusType.Ok,
      data: {
        networkState,
        networkType: curNetworkInfo?.effectiveType,
        networkSpeed: curNetworkInfo?.downlink
      }
    });
  };
};
