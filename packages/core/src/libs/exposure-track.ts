import 'intersection-observer';
import { cloneDeep, isFunction } from 'lodash-es';
import eventTrack from '../event';
import { getElementXPath, getTimestamp, htmlElementAsString, unknownToObject } from '../utils';
import { EventType, StatusType } from '../types';

/**
 * 元素曝光监听
 *
 */
export const listenExposureTrack = () => {
  const exposureTrack = new ExposureTrack({
    callback(exposureLise) {
      eventTrack.add({
        type: EventType.EVENT_TRACK,
        category: 'exposure',
        time: getTimestamp(),
        status: StatusType.Ok,
        data: exposureLise
      });
    }
  });
  exposureTrack.start();
};

/**
 * 元素曝光监控
 *
 * - https://juejin.cn/post/7391117519779069991
 * - https://juejin.cn/post/7083122975502761998
 *
 * **实现原理:**
 *
 * 1. 初始化时，根据className查找出已渲染的曝光监测元素，然后使用IntersectionObserver统一监听，
 *    如果有元素发生曝光，则触发对应曝光事件；
 *
 * 2. 对于一些动态渲染的曝光监测元素，需要使用MutationObserver监听dom变化。当有节点新增时，新增节
 *    点若包含曝光监测元素，则使用IntersectionObserver进行监听；当有节点被移除时，移除节点若包含曝
 *    光监测元素，则取消对其的监听；
 *
 * 3. 维护一个observe列表，元素开始曝光时将元素信息添加到列表，元素退出曝光时如果曝光时长符合规则，则
 *    触发对应曝光事件，并在observe列表中将该元素标记为已曝光，已曝光后再重复曝光则不进行采集。如果元
 *    素在DOM上被卸载，则将该元素在observe列表中的曝光事件删除，下次重新挂载时，则重新采集。
 *
 * 4. 设置一个定时器，定时检查observe列表，若列表中有未完成曝光且符合曝光时长规则的元素，则触发其曝光
 *    事件，并更新列表中曝光信息。
 *
 *
 * **使用方法：**
 *
 * 只需要给需要监控的元素添加 `data-exposure-track` 属性即可。此外,
 * 还可以添加 `data-exposure-name="xxx"` 属性用于自定义曝光事件名称,
 * 添加 `data-exposure-params="xxx"` 属性用于自定义曝光数据。
 *
 * ```html
 * <div data-exposure-track />
 * <img data-exposure-track />
 * ```
 *
 * @class ExposureTrack
 */
class ExposureTrack {
  /** 最小曝光时长, 超过即上报 */
  private minObserveTime = 500;
  private intersectionObserver: IntersectionObserver | null = null;
  private mutationObserver: MutationObserver | null = null;

  /** 曝光定时检查 */
  private timer: NodeJS.Timeout | null = null;
  /** 曝光检查循环时长 */
  private LOOP_TIME = 1000;
  /** 监控元素集合 */
  private trackElements: TrackElement[] = [];
  /** 元素采集标记的属性名 */
  private exposureIdAttr: string;
  /** 元素曝光信息列表 */
  private observeList: ObserveItem[] = [];
  /** 回调函数 */
  private callback?: (data: ObserveItem[]) => void;

  constructor(options?: ExposureOptions) {
    this.trackElements = options?.elements || [{ selector: '[data-exposure-track]' }];
    this.exposureIdAttr = options?.exposureIdAttr || 'data-exposure';
    this.minObserveTime = options?.minObserveTime || 500;
    this.callback = options?.callback;

    this.initObserver();
  }

  /**
   * 初始化监听器
   *
   * @private
   * @memberof ExposureTrack
   */
  private initObserver() {
    // 监听元素是否出现在可视区域
    this.intersectionObserver = new IntersectionObserver(
      (entries) => this.intersectionObserverCallback(entries),
      { threshold: 0.5 }
    );

    // 监听 DOM 变化
    this.mutationObserver = new MutationObserver((mutationList) => {
      mutationList.forEach((mutation) => {
        if (mutation.type !== 'childList') {
          return;
        }

        // 新增节点时，将新增节点中包含的元素添加到监听
        mutation.addedNodes.forEach((node) => {
          // console.log('节点变化:添加', node.nodeType, node);
          node.nodeType === 1 && this.start(node as Element);
        });

        // 移除节点时，将移除节点中包含的元素从监听中删除
        mutation.removedNodes.forEach((node) => {
          // console.log('节点变化:移除', node.nodeType, node);
          node.nodeType === 1 && this.removeObserve(node as Element);
        });
      });
    });
    this.mutationObserver.observe(document.body, {
      subtree: true,
      childList: true
    });
  }

  /**
   * 开始监听
   *
   * @param {(Element | Document)} [baseElement=document]
   * @memberof Exposure
   */
  start(baseElement: Element | Document = document) {
    this.trackElements.forEach((ele) => {
      if (!ele.selector) {
        return;
      }

      const elements = baseElement.querySelectorAll(ele.selector) ?? [];
      elements.forEach((el) => {
        this.intersectionObserver?.observe(el);
      });
    });

    this.loopCheck();
  }

  /**
   * 停止监听
   *
   * - 移除所有观察者
   * - 移除所有观察列表
   * - 清除定时器任务
   *
   * @memberof Exposure
   */
  stop() {
    this.intersectionObserver?.disconnect();
    this.mutationObserver?.disconnect();
    this.timer && clearInterval(this.timer);
    this.observeList = [];
  }

  /**
   * 移除监控
   *
   * - 将其曝光事件从列表删除
   * - 移除元素监听
   *
   * @private
   * @param {(Element | Document)} [baseElement=document]
   * @memberof ExposureTrack
   */
  private removeObserve(baseElement: Element | Document = document) {
    this.trackElements.forEach((ele) => {
      if (!ele.selector) {
        return;
      }

      const elements = baseElement.querySelectorAll(ele.selector) ?? [];
      elements.forEach((el) => {
        const expId = el.getAttribute(this.exposureIdAttr);
        if (expId) {
          this.observeList = this.observeList.filter((it) => it.id !== expId);
        }

        this.intersectionObserver?.unobserve(el);
      });
    });
  }

  /**
   * 监听元素是否出现在可视区域回调
   *
   * @private
   * @param {IntersectionObserverEntry[]} entries
   * @memberof Exposure
   */
  private intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry, idx) => {
      const entryElem = entry.target;
      let expId = entryElem.getAttribute(this.exposureIdAttr);
      const exposureName = entryElem.getAttribute('data-exposure-name') ?? '';
      const exposureParams = entryElem.getAttribute('data-exposure-params') ?? '';
      const currentItem = this.observeList.find((o) => o.id === expId);

      if (entry.isIntersecting) {
        // 未设置曝光标记 ID，则设置曝光标记 ID
        if (!expId) {
          expId = `${Math.random().toString(36).substr(2, 9)}-${idx}`;
          entryElem.setAttribute(this.exposureIdAttr, expId);
        }

        if (!currentItem) {
          // 把当前曝光事件推入observe列表
          const time = getTimestamp();
          this.observeList.push({
            id: expId,
            element: entryElem,
            xPath: getElementXPath(entryElem) ?? '',
            startTime: time,
            endTime: time,
            exposureTime: time - time,
            exposureName,
            exposureParams: unknownToObject(exposureParams),
            isReported: false
          });
        }
      } else {
        if (!expId || !currentItem) {
          return;
        }

        const endTime = getTimestamp();
        const exposureTime = endTime - currentItem.startTime;
        if (exposureTime >= this.minObserveTime) {
          // 触发曝光事件，并更新observe列表中的曝光信息
          currentItem.isReported = true;
          currentItem.endTime = endTime;
          currentItem.exposureTime = exposureTime;

          this.reportExposure();
        }
      }
    });
  }

  /**
   * 移除已上报的元素，并更新监控列表
   *
   * @private
   * @memberof Exposure
   */
  private removeObserveList() {
    // 选出已上报的元素, 并从监控列表中移除
    const reportExposureLise = this.observeList.filter((o) => o.isReported);
    reportExposureLise.forEach((item) => {
      this.intersectionObserver?.unobserve(item.element!);
    });

    // 更新监控列表
    this.observeList = this.observeList.filter((o) => !o.isReported);
  }

  /**
   * 轮询检查
   *
   * - 避免一开始就在可视区域的曝光元素无法上报
   * @private
   * @memberof Exposure
   */
  private loopCheck() {
    this.timer = setInterval(() => {
      this.observeList.forEach((item) => {
        const time = getTimestamp();
        const exposureTime = time - item.startTime;
        if (!item.isReported && exposureTime >= this.minObserveTime) {
          item.isReported = true;
          item.endTime = time;
          item.exposureTime = exposureTime;
        }
      });

      this.reportExposure();
    }, this.LOOP_TIME);
  }

  /**
   * 上报曝光数据
   *
   * - 回调函数, 上报数据
   * - 移除已上报的元素，并更新监控列表
   *
   * @private
   * @memberof Exposure
   */
  private reportExposure() {
    const reportExposureLise = this.observeList
      .filter((o) => o.isReported)
      .map((it) => {
        const curItem = cloneDeep(it);
        curItem.selector = htmlElementAsString(it.element as HTMLElement);
        delete curItem.element;
        delete curItem.isReported;
        return { ...curItem };
      });

    if (reportExposureLise.length === 0) {
      return;
    }

    isFunction(this.callback) && this.callback(reportExposureLise);
    this.removeObserveList();
  }
}

interface ExposureOptions {
  /**
   * 曝光元素
   * - 默认值: '[data-exposure-track]'
   *
   * @type {TrackElement[]}
   * @memberof ExposureOptions
   */
  elements?: TrackElement[];
  /** 曝光标记属性 */
  exposureIdAttr?: string;
  /**
   * 最小曝光时间, 超过即表示为曝光
   *
   * - 默认值: 500
   *
   * @type {number}
   * @memberof ExposureOptions
   */
  minObserveTime?: number;
  /**
   * 上报曝光数据的回调事件
   *
   * @memberof ExposureOptions
   */
  callback?: (data: ObserveItem[]) => void;
}

interface TrackElement {
  selector?: string;
  data?: string | Record<string, any>;
}

interface ObserveItem {
  /** 标记唯一表示 */
  id: string;
  /** 标记元素 */
  element?: Element;
  /** 标记元素（字符串） */
  selector?: string;
  /** 标记元素在页面中的 XPath */
  xPath: string;
  /** 曝光元素名称 */
  exposureName: string;
  /** 曝光元素数据 */
  exposureParams: Record<string, any> | string;
  /** 开始曝光时间 */
  startTime: number;
  /** 结束曝光时间 */
  endTime: number;
  /** 曝光时长 */
  exposureTime: number;
  /** 是否已经上报 */
  isReported?: boolean;
}

export default ExposureTrack;
