import { onLCP, onFID, onCLS, onFCP, onTTFB, onINP, type Metric } from 'web-vitals';

import { getCLS, getFCP, getFID, getLCP, getResources, getTTFB, isSafari, onFSP } from './utils';
import eventTrack from '../../event';
import { Callback, EventType, StatusType } from '../../types';
import { _global, on, getTimestamp, eventEmitter } from '../../utils';

/**
 * 性能监控
 *
 * @export
 * @class WebPerformance
 */
class WebPerformance {
  constructor() {
    this.getWebVitals((res: Metric) => {
      const { name, rating, value } = res;
      eventTrack.add({
        type: EventType.PERFORMANCE,
        category: 'performance',
        status: StatusType.Ok,
        time: getTimestamp(),
        data: {
          name,
          rating,
          value
        }
      });
    });

    this.getLongtask();

    this.getMemory();
  }

  /**
   * 获取 FCP、LCP、TTFB、FID、FSP 等指标
   *
   * @private
   * @param {Callback} cb
   * @memberof WebPerformance
   */
  private getWebVitals(cb: Callback) {
    onFSP(cb);

    if (isSafari()) {
      // 兼容safari浏览器
      getLCP((res) => cb(res));
      getFID((res) => cb(res));
      getCLS((res) => cb(res));
      getFCP((res) => cb(res));
      getTTFB((res) => cb(res));
      // getINP((res) => cb(res));
      return;
    }

    onLCP((res) => cb(res));
    onFID((res) => cb(res));
    onCLS((res) => cb(res));
    onFCP((res) => cb(res));
    onTTFB((res) => cb(res));
    onINP((res) => cb(res));
  }

  /**
   * 获取长任务上报
   *
   * @private
   * @memberof WebPerformance
   */
  private getLongtask() {
    const observer = new PerformanceObserver((entries) => {
      for (const long of entries.getEntries()) {
        eventTrack.add({
          type: EventType.PERFORMANCE,
          category: 'longtask',
          time: getTimestamp(),
          status: StatusType.Ok,
          data: JSON.parse(JSON.stringify(long))
        });
      }
    });
    observer.observe({ entryTypes: ['longtask'] });
  }

  /**
   * 获取内存情况
   *
   * - 注意: safari、firefox不支持该属性
   *
   * @private
   * @memberof WebPerformance
   */
  private getMemory() {
    on({
      el: _global,
      eventName: 'load',
      event: () => {
        const performance = window.performance as any;
        if (performance.memory) {
          eventTrack.add({
            type: EventType.PERFORMANCE,
            category: 'memory',
            time: getTimestamp(),
            status: StatusType.Ok,
            data: {
              // 上下文内可用堆的最大体积，以字节计算
              jsHeapSizeLimit: performance.memory?.jsHeapSizeLimit ?? 0,
              // 已分配的堆体积，以字节计算
              totalJSHeapSize: performance.memory?.totalJSHeapSize ?? 0,
              // 当前 JS 堆活跃段（segment）的体积，以字节计算
              usedJSHeapSize: performance.memory?.usedJSHeapSize ?? 0
            }
          });
        }
      }
    });
  }
}

/**
 * 监听web性能指标
 *
 */
export const listenWebPerformance = () => {
  new WebPerformance();
};

/**
 * web 资源
 *
 */
export const listenWebResource = () => {
  on({
    el: _global,
    eventName: 'load',
    event: () => {
      const source = getResources();
      eventEmitter.emit(EventType.RESOURCE, source);
    }
  });
};

/**
 * web 资源回调
 *
 */
export const webResourceCallback = () => (data: PerformanceResourceTiming[]) => {
  eventTrack.add({
    type: EventType.PERFORMANCE,
    category: 'resource',
    time: getTimestamp(),
    status: StatusType.Ok,
    data
  });
};
