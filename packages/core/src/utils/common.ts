// 获取当前时间戳
export const getTimestamp = () => Date.now();

// 获取当前href
export const getLocationHref = () => window.location.href;

// 获取当前域名
export const getCurrentDomain = () => window.location.host;

// 获取当前页面路径
export const getCurrentHref = () => window.location.href;

// 获取user-agent
export const getUserAgent = () => navigator.userAgent;

// 获取uuid
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
 * html 元素转字符串
 *
 * - tagName + id + class集合 + 文本
 *
 * @param {HTMLElement} target
 * @return {*}  {string}
 */
export function htmlElementAsString(target: HTMLElement): string {
  const tagName = target.tagName.toLowerCase();
  if (tagName === 'body') {
    return '';
  }
  let classNames = target.classList.value;

  classNames = classNames !== '' ? ` class='${classNames}'` : '';
  const id = target.id ? ` id="${target.id}"` : '';
  const { innerText } = target;
  return `<${tagName}${id}${classNames !== '' ? classNames : ''}>${innerText}</${tagName}>`;
}

/**
 * 据鼠标指针事件获取目标 DOM 元素
 *
 * @param {PointerEvent} ev 鼠标指针事件对象
 * @return {*}
 */
export const getTargetDomByPointerEvent = (ev: PointerEvent): HTMLElement | null => {
  const el = document.elementFromPoint(ev.pageX, ev.pageY);
  return el ? (el as HTMLElement) : null;
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
