import { isElement, isFunction } from 'lodash-es';

import { NATIVE_EVENTS } from '../setting';

interface Params {
  el: HTMLElement | Document | Window | XMLHttpRequest;
  eventName: keyof WindowEventMap | 'loadend';
  event: EventListenerOrEventListenerObject; // Event;
  capture?: boolean;
}

/**
 * 验证事件
 * - 验证 el 是否为 HTMLElement、Window、Document、XMLHttpRequest
 * - 验证 eventName 是否为指定的原生事件
 * - 验证 event 是否为函数
 *
 * @param {Params} { el, eventName, event }
 * @return {*}
 */
const validEvent = ({ el, eventName, event }: Params) => {
  const isEl =
    isElement(el) || [window, document].includes(el as any) || el instanceof XMLHttpRequest;
  const isAllowEventName = NATIVE_EVENTS.includes(eventName);
  const isEventFn = isFunction(event);

  return isEl && isAllowEventName && isEventFn;
};

/**
 * 事件监听
 *
 * - el: 监听 DOM
 * - eventName: 事件名/事件类型
 * - event: 事件处理函数
 * - capture: 是否捕获
 *
 * @param {Params} { el, eventName, event, capture = false }
 * @return {*}
 */
export const on = ({ el, eventName, event, capture = false }: Params): void => {
  const validate = validEvent({ el, eventName, event });
  if (!validate) {
    return;
  }

  el.addEventListener(eventName, event, capture);
};
