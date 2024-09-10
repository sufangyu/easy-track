import { throttle } from 'lodash-es';

import eventTrack from '../event';
import options from '../options';
import { EventType, StatusType } from '../types';
import {
  _global,
  eventEmitter,
  getLocationHref,
  getElementXPath,
  getTargetDomByPointerEvent,
  getTimestamp,
  htmlElementAsString,
  interceptStr,
  on,
  unknownToObject
} from '../utils';

/**
 * 事件埋点
 *
 * - click 事件
 */
export const listenEventTrack = () => {
  on({
    el: _global,
    eventName: 'click',
    event: throttle((ev) => {
      eventEmitter.emit(EventType.EVENT_TRACK, ev as PointerEvent);
    }, 250),
    capture: true
  });

  on({
    el: _global,
    eventName: 'blur',
    event: throttle((ev) => {
      eventEmitter.emit(EventType.EVENT_TRACK, ev as PointerEvent);
    }, 250),
    capture: true
  });
};

/**
 * 事件埋点回调函数
 *
 * @return {*}
 */
export const eventTrackCallback = () => (ev: PointerEvent) => {
  const curType = ev.type as 'click' | 'blur';
  const el = ev.type !== 'blur' ? getTargetDomByPointerEvent(ev) : (ev.target as HTMLElement);
  const globalClickListeners = options.getGlobalClickListeners() ?? [{ selector: '[data-track]' }];

  // 不处理事件埋点的情况 ----------------------------------------
  if (!el || (el && el instanceof Window)) {
    return;
  }

  const isUnInputElement = !(
    (el?.hasAttribute('contenteditable') && el?.getAttribute('contenteditable') !== 'false') ||
    ['INPUT', 'TEXTAREA'].includes(el?.tagName!)
  );
  // console.log('isUnInputElement', isUnInputElement);
  if (curType === 'blur' && isUnInputElement) {
    return;
  }

  // 元素标签信息
  const htmlString = htmlElementAsString(el);
  // 位置信息信息
  const rect = el.getBoundingClientRect();
  // 元素上的自定义事件名称、上报数据、XPath
  let curEventName = el.getAttribute('data-event-name') ?? '';
  let curEventParams = el.getAttribute('data-event-params') ?? '';
  let xPath = getElementXPath(el);

  // 上报指定的配置元素 --------------------------------------------
  if (globalClickListeners.length > 0) {
    // 是否目标元素
    let isTargetEle = false;
    let curSelector = '';
    let curElementText = '';
    let curData = null;

    for (let i = 0; i < globalClickListeners.length; i++) {
      const {
        selector = '',
        elementText = '',
        eventName = '',
        data = ''
      } = globalClickListeners[i];

      curSelector = selector;
      curElementText = elementText;
      curData = data;

      // 匹配是否是目标元素
      if (selector) {
        const elements = document.querySelectorAll(selector);
        const curEle = findTargetNode(el, [...elements]);
        if (curEle) {
          // 从当前节点取相关数据
          curEventName = curEventName || curEle.getAttribute('data-event-name') || eventName || '';
          curEventParams = curEventParams || curEle.getAttribute('data-event-params') || '';
        }

        isTargetEle = !!curEle;
      } else if (el.textContent === elementText) {
        isTargetEle = true;
      }

      if (isTargetEle) {
        break;
      }
    }

    if (!isTargetEle) {
      return;
    }

    eventTrack.add({
      type: EventType.EVENT_TRACK,
      category: curType,
      status: StatusType.Ok,
      time: getTimestamp(),
      data: {
        selector: curSelector,
        inputValue: (el as HTMLInputElement).value ?? el.innerText ?? '',
        elementText: curElementText ?? el.textContent,
        rect,
        url: getLocationHref(),
        eventName: curEventName,
        xPath,
        data: unknownToObject(curData),
        params: unknownToObject(curEventParams)
      }
    });

    return;
  }

  // 全部元素上报 ------------------------------------------------
  if (htmlString) {
    eventTrack.add({
      type: EventType.EVENT_TRACK,
      category: curType,
      status: StatusType.Ok,
      time: getTimestamp(),
      data: {
        selector: interceptStr(htmlString, 200),
        inputValue: (el as HTMLInputElement).value ?? el.innerText ?? '',
        elementText: interceptStr(el.innerText || '', 100),
        rect,
        url: getLocationHref(),
        eventName: curEventName,
        xPath,
        params: unknownToObject(curEventParams)
      }
    });
  }
};

/**
 * 查找目标节点
 *
 * - 循环向上查找，找到目标节点则返回该节点
 *
 * @param {HTMLElement} currentNode
 * @param {Element[]} targetNodes
 * @param {number} [maxDepth=5]
 * @return {*}  {(HTMLElement | null)}
 */
const findTargetNode = (
  currentNode: HTMLElement,
  targetNodes: Element[],
  maxDepth: number = 5
): HTMLElement | null => {
  let depth = 0;
  let node: HTMLElement | null = currentNode;

  // 循环向上查找
  while (node && depth < maxDepth) {
    // 如果当前节点是目标节点，返回该节点
    if ([...targetNodes].includes(node)) {
      return node;
    }

    // 如果当前节点是 body，停止查找
    if (node.tagName.toLowerCase() === 'body') {
      break;
    }

    // 向上移动到父节点
    node = node.parentElement;
    depth++;
  }

  // 如果查找过程中没有找到目标节点，返回 null
  return null;
};
