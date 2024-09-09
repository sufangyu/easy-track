import { getCurrentReferrer, getLocationHref } from './common';
import { __EASY_TRACK__ } from './global';

/**
 * 获取页面访问时间
 *
 * @param {number} time 当前时间戳
 * @param {string} url 当前页面地址
 * @return {*}  {{
 *   entryTime: number;
 *   leaveTime: number;
 *   visitTime: number;
 *   pageUrl: string;
 * }}
 */
export const getPVTime = (
  time: number,
  url?: string
): {
  // 进入时间
  entryTime: number;
  // 离开时间
  leaveTime: number;
  // 停留时间
  stayTime: number;
  // 页面地址
  pageUrl: string;
  // 跳转来源
  referer: string;
} => {
  const { entryTime } = __EASY_TRACK__.pv!;
  const leaveTime = time;
  const stayTime = time - entryTime;
  const pageUrl = url ?? getLocationHref();
  const referer = getCurrentReferrer();
  __EASY_TRACK__.pv!.entryTime = time;

  return {
    entryTime,
    leaveTime,
    stayTime,
    pageUrl,
    referer
  };
};
