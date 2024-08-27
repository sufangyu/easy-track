import { Callback } from '../../types';
import { on } from '../../utils/event-listener';

/**
 * 最大内容绘制
 *
 * 通常关注下面的元素：
 * - <img> 元素
 * - <image> 元素内的 <svg> 元素
 * - 通过 url() 函数加载背景图片的元素
 * - 包含文本节点或其他内联文本元素子级的块级元素。
 *
 * @param {Callback} cb
 */
export const getLCP = (cb: Callback) => {
  const entryHandler = (entries: PerformanceObserverEntryList) => {
    for (const entry of entries.getEntries()) {
      observer.disconnect();
      cb({
        name: 'LCP',
        value: entry.startTime,
        rating: entry.startTime > 2500 ? 'poor' : 'good'
      });
    }
  };
  const observer = new PerformanceObserver(entryHandler);
  observer.observe({ type: 'largest-contentful-paint', buffered: true });
};

/**
 * 用户首次与网页进行交互时的响应速度
 *
 * @export
 * @param {Callback} cb
 */
export function getFID(cb: Callback): void {
  const entryHandler = (entries: PerformanceObserverEntryList) => {
    for (const entry of entries.getEntries()) {
      observer.disconnect();
      const eventEntry = entry as PerformanceEventTiming;
      const value = eventEntry.processingStart - eventEntry.startTime;
      cb({
        name: 'FID',
        value,
        rating: value > 100 ? 'poor' : 'good'
      });
    }
  };
  const observer = new PerformanceObserver(entryHandler);
  observer.observe({ type: 'first-input', buffered: true });
}

/**
 * 首次绘制布局偏移
 *
 * @param {Callback} cb
 */
export const getCLS = (cb: Callback) => {
  let clsValue = 0;
  let sessionValue = 0;
  let sessionEntries: any[] = [];

  const entryHandler = (entries: any) => {
    for (const entry of entries.getEntries()) {
      // 只将不带有最近用户输入标志的布局偏移计算在内。
      if (!entry.hadRecentInput) {
        const firstSessionEntry = sessionEntries[0];
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
        // 如果条目与上一条目的相隔时间小于 1 秒且
        // 与会话中第一个条目的相隔时间小于 5 秒，那么将条目
        // 包含在当前会话中。否则，开始一个新会话。
        if (
          sessionValue &&
          entry.startTime - lastSessionEntry.startTime < 1000 &&
          entry.startTime - firstSessionEntry.startTime < 5000
        ) {
          sessionValue += entry.value;
          sessionEntries.push(entry);
        } else {
          sessionValue = entry.value;
          sessionEntries = [entry];
        }

        // 如果当前会话值大于当前 CLS 值，
        // 那么更新 CLS 及其相关条目。
        if (sessionValue > clsValue) {
          clsValue = sessionValue;
          // clsEntries = sessionEntries;
          observer.disconnect();

          cb({
            name: 'CLS',
            value: clsValue,
            rating: clsValue > 2500 ? 'poor' : 'good'
          });
        }
      }
    }
  };

  const observer = new PerformanceObserver(entryHandler);
  observer.observe({ type: 'layout-shift', buffered: true });
};

/**
 * 首次内容绘制时间
 *
 * @export
 * @param {Callback} callback
 */
export function getFCP(callback: Callback): void {
  const entryHandler = (entries: PerformanceObserverEntryList) => {
    for (const entry of entries.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        observer.disconnect();
        callback({
          name: 'FCP',
          value: entry.startTime,
          rating: entry.startTime > 2500 ? 'poor' : 'good'
        });
      }
    }
  };
  const observer = new PerformanceObserver(entryHandler);
  observer.observe({ type: 'paint', buffered: true });
}

/**
 * 首字节时间
 *
 * @export
 * @param {Callback} cb
 */
export function getTTFB(cb: Callback): void {
  on({
    el: window,
    eventName: 'load',
    event: () => {
      const { responseStart, navigationStart } = window.performance.timing;
      const value = responseStart - navigationStart;
      cb({
        name: 'TTFB',
        value,
        rating: value > 100 ? 'poor' : 'good'
      });
    }
  });
}

/**
 * 监听首屏渲染时间
 * @param cb
 */
export const onFSP = (cb: Callback) => {
  getFirstScreenPaint((res) => {
    const data = {
      name: 'FSP',
      value: res,
      rating: res > 2500 ? 'poor' : 'good'
    };
    cb(data);
  });
};

/**
 * 获取首屏加载时间
 *
 * @param {Callback} cb
 */
function getFirstScreenPaint(cb: Callback) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback((deadline) => {
      // timeRemaining：表示当前空闲时间的剩余时间
      if (deadline.timeRemaining() > 0) {
        observeFirstScreenPaint(cb);
      }
    });
  } else {
    observeFirstScreenPaint(cb);
  }
}

let observer: MutationObserver;
let timer: number;
let entries: any[] = [];

/**
 * 获取渲染时间
 *
 * @return {*}  {number}
 */
function getRenderTime(): number {
  let startTime = new Date().getTime();
  entries.forEach((entry) => {
    if (entry.startTime > startTime) {
      startTime = entry.startTime;
    }
  });

  // performance.timing.navigationStart 页面的起始时间
  return startTime - performance.timing.navigationStart;
}

/**
 * 检查 DOM 变化
 *
 * 定时器循环监听dom的变化，当document.readyState === 'complete'时，停止监听
 *
 * @param {Callback} callback
 */
function checkDOMChange(callback: Callback) {
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(() => {
    // 页面是否渲染完成
    const isOnLoaded = document.readyState === 'complete';

    if (isOnLoaded) {
      // 取消监听
      observer && observer.disconnect();
      // document.readyState === 'complete'时，计算首屏渲染时间
      const firstScreenPaint = getRenderTime();
      callback && callback(firstScreenPaint);
      entries = [];
    } else {
      checkDOMChange(callback);
    }
  });
}

/**
 * 监听首屏加载时间
 *
 * @param {Callback} cb
 */
function observeFirstScreenPaint(cb: Callback) {
  const ignoreDOMList = ['STYLE', 'SCRIPT', 'LINK'];
  observer = new MutationObserver((mutationList) => {
    const entry = { children: [], startTime: 0 };
    for (const mutation of mutationList) {
      if (mutation.addedNodes.length && isInScreen(mutation.target as Element)) {
        for (const node of mutation.addedNodes) {
          // 忽略掉以上标签的变化
          if (
            node.nodeType === 1 &&
            !ignoreDOMList.includes((node as Element).tagName) &&
            isInScreen(node as Element)
          ) {
            entry.children.push(node as never);
          }
        }
      }
    }

    if (entry.children.length) {
      entry.startTime = new Date().getTime();
      entries.push(entry);
    }

    checkDOMChange(cb);
  });

  observer.observe(document, {
    childList: true, // 监听添加或删除子节点
    subtree: true, // 监听整个子树
    characterData: true, // 监听元素的文本是否变化
    attributes: true // 监听元素的属性是否变化
  });
}

/**
 * DOM 对象是否在屏幕内
 *
 * @param {Element} dom
 * @return {*}  {boolean}
 */
function isInScreen(dom: Element): boolean {
  const { left, top } = dom.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  return left < viewportWidth && top < viewportHeight;
}

/**
 * 是否是safari浏览器
 *
 * @export
 * @return {*}  {boolean}
 */
export function isSafari(): boolean {
  return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
}

// 判断资料是否来自缓存
export function isCache(entry: PerformanceResourceTiming): boolean {
  return (entry as any).deliveryType !== undefined
    ? (entry as any).deliveryType === 'cache'
    : entry.transferSize === 0 || (entry.transferSize !== 0 && entry.encodedBodySize === 0);
}

/**
 *
 *
 * @return {*}  {PerformanceResourceTiming[]}
 */
export const getResources = (): PerformanceResourceTiming[] => {
  const entries = performance.getEntriesByType('resource');
  // 过滤掉非静态资源的 fetch、 xmlhttprequest、beacon
  const list = entries
    .filter((entry) => ['fetch', 'xmlhttprequest', 'beacon'].indexOf(entry.initiatorType) === -1)
    .map((entry) => {
      (entry as any).isCache = isCache(entry);
      return JSON.parse(JSON.stringify(entry));
    });

  return list;
};
