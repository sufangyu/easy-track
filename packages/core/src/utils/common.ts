/** 获取当前时间戳 */
export const getTimestamp = () => Date.now();

/** 获取当前页面 href */
export const getLocationHref = () => window.location.href;

/** 获取当前域名 */
export const getCurrentDomain = () => window.location.host;

/** 获取当前来源地址 */
export const getCurrentReferrer = () => document.referrer;

/** 设备像素比 */
export const getCurrentDpr = () => window.devicePixelRatio ?? '1';

export const getCurrentLanguage = () => navigator.language ?? '';

/**
 * 获取当前页面尺寸信息
 *
 * @return {*}
 */
export const getCurrentSize = () => {
  return {
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    viewportWidth: document.body.clientWidth,
    viewportHeight: document.body.clientHeight
  };
};

/**
 * 获取当前网络信息
 *
 * @return {*}
 */
export const getCurrentNetworkInfo = () => {
  const isSupport = 'connection' in navigator;
  if (!isSupport) {
    return null;
  }

  // @ts-ignore
  return navigator.connection ?? null;
};

/** 获取user-agent */
export const getUserAgent = () => navigator.userAgent;

/**
 * 获取uuid
 * @returns
 */
export const getUUID = (): string => {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

/**
 * 格式化 URL
 *
 * @param {string} url
 * @return {*}
 */
export const parseUrlToObj = (url: string) => {
  if (!url) {
    return {};
  }
  // eslint-disable-next-line no-useless-escape
  const match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }

  const query = match[6] || '';
  const fragment = match[8] || '';
  let relative = match[5] + query + fragment;
  relative = relative.startsWith('#') ? `/${relative}` : relative;

  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    relative
  };
};
