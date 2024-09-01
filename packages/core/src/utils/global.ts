import { UAParser } from 'ua-parser-js';

import { getTimestamp } from './common';
import { isWindow } from './is';
import { EasyTrack, Global } from '../types';

const ua = new UAParser().getResult();

export const UNKNOWN = 'Unknown';

export const __EASY_TRACK__: Partial<EasyTrack> = {
  deviceInfo: {
    browserVendor: ua.browser.name ?? UNKNOWN,
    browserVersion: ua.browser.version ?? UNKNOWN,
    os: ua.os.name ?? UNKNOWN,
    osVersion: ua.os.version ?? UNKNOWN,
    device: ua.device.model ?? UNKNOWN,
    deviceType: ua.device.type ?? UNKNOWN,
    deviceVendor: ua.device.vendor ?? UNKNOWN
  },
  pv: {
    entryTime: getTimestamp()
  },
  hasError: false
};

/**
 * 是否为浏览器环境
 */
export const isBrowserEnv = isWindow(typeof window !== 'undefined' ? window : 0);

/**
 * 是否为 electron 环境
 */
export const isElectronEnv = !!window?.process?.versions?.electron;

const getGlobal = (): Global => {
  if (isBrowserEnv || isElectronEnv) {
    return window;
  }

  return {} as Global;
};

export const _global = getGlobal();
_global.__EASY_TRACK__ = __EASY_TRACK__;

// 是否支持 fetch
export const isSupportFetch = () => 'fetch' in _global;
