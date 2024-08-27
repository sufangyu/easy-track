import { throttle } from 'lodash-es';
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
import { EventType, StatusType } from '../types';
import options from '../options';
import eventTrack from '../event/event';

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
};

/**
 * 事件埋点回调函数
 *
 * @return {*}
 */
export const eventTrackCallback = () => (ev: PointerEvent) => {
  const el = getTargetDomByPointerEvent(ev);
  const globalClickListeners = options.getGlobalClickListeners() ?? [];

  if (!el) {
    return;
  }

  // 元素标签信息
  const htmlString = htmlElementAsString(el);
  // 位置信息信息
  const rect = el.getBoundingClientRect();
  // 元素上的自定义事件名称、上报数据
  const curEventName = el.getAttribute('data-event-name') ?? '';
  const curEventParams = el.getAttribute('data-event-params') ?? '';
  // 元素的 xPath
  const xPath = getElementXPath(el);

  // 上报指定的配置元素
  if (globalClickListeners.length > 0) {
    globalClickListeners.forEach(
      ({ selector = '', elementText = '', eventName = '', data = '' }) => {
        // 是否目标元素
        let isTargetEle = false;
        if (selector) {
          const elements = document.querySelectorAll(selector);
          isTargetEle = [...elements].includes(el);
        } else if (el.textContent === elementText) {
          isTargetEle = true;
        }

        if (!isTargetEle) {
          return;
        }

        eventTrack.add({
          type: EventType.EVENT_TRACK,
          category: 'click',
          status: StatusType.Ok,
          time: getTimestamp(),
          data: {
            selector,
            elementText: elementText ?? el.textContent,
            rect,
            url: getLocationHref(),
            eventName: eventName || curEventName,
            xPath,
            data: unknownToObject(data),
            params: unknownToObject(curEventParams)
          }
        });
      }
    );
    return;
  }

  // 全部元素上报
  if (htmlString) {
    eventTrack.add({
      type: EventType.EVENT_TRACK,
      category: 'click',
      status: StatusType.Ok,
      time: getTimestamp(),
      data: {
        el: interceptStr(htmlString, 200),
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
