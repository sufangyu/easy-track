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

  if ('connection' in navigator) {
    const connection = navigator.connection;

    // @ts-ignore
    connection?.addEventListener('change', () => {
      // 当前或之前是断网状态, 不触发 change 回调
      if (!navigator.onLine || __EASY_TRACK__.networkStatus === NetworkStatus.OFFLINE) {
        return;
      }

      eventEmitter.emit(EventType.NETWORK, NetworkStatus.CHANGE);
    });
  }
};

export const networkCallback = () => {
  return (networkState: NetworkStatus) => {
    // 网络状态 或 网络类型与最后的标识对比, 未发生变化不发送网络事件
    if (__EASY_TRACK__.networkStatus === networkState) {
      return;
    }

    if (networkState !== NetworkStatus.CHANGE) {
      __EASY_TRACK__.networkStatus = networkState;
    }

    const curNetworkInfo = getCurrentNetworkInfo();
    const eventType = networkState === NetworkStatus.CHANGE ? 'add' : 'send';
    eventTrack[eventType]({
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
