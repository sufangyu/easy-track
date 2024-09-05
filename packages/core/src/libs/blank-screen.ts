import { isFunction, isString } from 'lodash-es';

import eventTrack from '../event';
import options from '../options';
import { EventType, StatusType } from '../types';
import { _global, getLocationHref, getTimestamp, logger } from '../utils';

/**
 * 监听白屏检测结果
 *
 * - 关键点采样对比
 *    - https://juejin.cn/post/7386969940942094370#heading-9
 *    - https://juejin.cn/post/7310112724945272832
 *    - https://open.alipay.com/portal/forum/post/109101011
 */
export const listenBlankScreen = () => {
  const { containerElements = [], skeleton = false } = options.get();

  const blankScreen = new BlankScreen({
    skeleton,
    containerElements,
    callback: (status) => {
      eventTrack.add({
        status: StatusType.Ok,
        type: EventType.BLANK_SCREEN,
        category: 'blank-screen',
        time: getTimestamp(),
        data: {
          status,
          url: getLocationHref()
        }
      });
    }
  });

  // fix: 使用 bind 到类, 避免 this 会丢失指向（指向 Window）
  blankScreen.check();
};

class BlankScreen {
  /**
   * 是否骨架屏项目
   *
   * @private
   * @type {boolean}
   * @memberof BlankScreen
   */
  private skeleton!: boolean;

  /**
   * 元素容器
   *
   * @private
   * @type {string[]}
   * @memberof BlankScreen
   */
  private containerElements!: string[];

  /**
   * 结果回调函数
   *
   * @private
   * @type {(status: StatusType) => void}
   * @memberof BlankScreen
   */
  private callback?: (status: StatusType) => void;

  /**
   * 最大循环次数
   *
   * @private
   * @type {number}
   * @memberof BlankScreen
   */
  private maxLoops!: number;

  /**
   * 循环定时器
   *
   * @private
   * @type {NodeJS.Timeout}
   * @memberof BlankScreen
   */
  private loopTimer?: NodeJS.Timeout | null = null;

  /**
   * 循环次数
   *
   * @private
   * @type {number}
   * @memberof BlankScreen
   */
  private loopCount: number = 0;

  /**
   * 是否停止循环
   *
   * @private
   * @type {boolean}
   * @memberof BlankScreen
   */
  private isStopedLoop: boolean = false;

  /**
   * 骨架屏初始元素列表
   *
   * @private
   * @type {string[]}
   * @memberof BlankScreen
   */
  private skeletonInitList: string[] = [];

  /**
   * 骨架屏当前元素列表
   *
   * @private
   * @type {string[]}
   * @memberof BlankScreen
   */
  private skeletonCurrentList: string[] = [];

  constructor(options: BlankScreenOptions) {
    this.maxLoops = options.maxLoops ?? 30;
    this.skeleton = options.skeleton ?? false;
    this.containerElements = options.containerElements ?? ['html', 'body', '#app', '#root'];
    this.callback = options.callback;
  }

  /**
   * 开始检测
   *
   * - 骨架屏项目: 一开始就检测
   * - 非骨架屏项目: 页面加载完毕后检测
   *
   * @static
   * @memberof BlankScreen
   */
  public check() {
    if (this.skeleton) {
      document.readyState !== 'complete' && this.idleCallback();
    } else {
      document.readyState === 'complete'
        ? this.idleCallback()
        : _global.addEventListener('load', () => this.idleCallback());

      // _global.addEventListener("error", this.idleCallback);
      // _global.addEventListener("unhandledrejection", this.idleCallback);
    }
  }

  /**
   * 空闲回调执行检测白屏
   *
   * @private
   * @memberof BlankScreen
   */
  private idleCallback() {
    // 支持进程空闲回调方法, 在空闲再执行检测白屏。否则直接执行
    !('requestIdleCallback' in _global)
      ? this.sampling()
      : requestIdleCallback((deadline) => {
          if (deadline.timeRemaining() > 0) {
            this.sampling();
          }
        });
  }

  /**
   * 开始抽样检查
   *
   * @private
   * @memberof BlankScreen
   */
  private sampling() {
    // fix: 修复切屏时, 停止循环后还在继续检测白屏
    if (this.isStopedLoop) {
      return;
    }

    // 记录空白点数
    let emptyPoints = 0;
    // 横向和纵向的检查点各15个（值要设置为奇数）
    const checkPoints = 15;
    // 中心点检查点
    const centerPoints = checkPoints / 2 + 1;
    // 所有检查点
    const allCheckPoints = checkPoints * 2 - 1;
    // 屏幕尺寸
    const { innerWidth, innerHeight } = _global;

    // 检查屏幕的点 --------------------------------------------------------------------
    for (let i = 1; i <= checkPoints; i++) {
      const xPosition = {
        x: (innerWidth * i) / (checkPoints + 1),
        y: innerHeight / 2
      };
      const yPosition = {
        x: innerWidth / 2,
        y: (innerHeight * i) / (checkPoints + 1)
      };
      const upDiagonalPosition = {
        x: (innerWidth * i) / (checkPoints + 1),
        y: (innerHeight * i) / (checkPoints + 1)
      };
      const downDiagonalPosition = {
        x: (innerWidth * i) / (checkPoints + 1),
        y: innerHeight - (innerHeight * i) / (checkPoints + 1)
      };

      const xElements = document.elementsFromPoint(xPosition.x, xPosition.y);
      const yElements = document.elementsFromPoint(yPosition.x, yPosition.y);
      const upDiagonalElements = document?.elementsFromPoint(
        upDiagonalPosition.x,
        upDiagonalPosition.y
      );
      const downDiagonalElements = document?.elementsFromPoint(
        downDiagonalPosition.x,
        downDiagonalPosition.y
      );

      // 取第一个元素来判断否是容器元素
      if (this.isContainer(xElements[0] as HTMLElement)) {
        emptyPoints++;
      }

      // 中心点只计算一次
      if (i !== centerPoints) {
        if (
          this.isContainer(yElements[0] as HTMLElement) &&
          this.isContainer(upDiagonalElements[0] as HTMLElement) &&
          this.isContainer(downDiagonalElements[0] as HTMLElement)
        ) {
          emptyPoints++;
        }
      }
    }

    // logger.log('空白无效点数量:', emptyPoints, allCheckPoints, '循环次数:', this.loopCount);

    // 根据空白点数判断是否白屏 ----------------------------------------------------------
    if (emptyPoints !== allCheckPoints) {
      // 骨架屏项目
      if (this.skeleton) {
        // 第一次不比较，因为骨架屏会先加载
        if (!this.loopCount) {
          this.startLoopCheck();
          return;
        }

        // 比较前后dom是否一致
        if (this.skeletonCurrentList.join() === this.skeletonInitList.join()) {
          if (this.loopCount >= this.maxLoops) {
            isFunction(this.callback) && this.callback(StatusType.Error);
            this.stopLoopCheck();
          }
          return;
        }
      }

      this.stopLoopCheck();
    } else {
      this.startLoopCheck();
    }

    // 非骨架屏: `allCheckPoints` 个点都是容器节点算作白屏
    // 轮询达到最大次数 或 已成功加载, 上报结果
    const result = emptyPoints === allCheckPoints ? StatusType.Error : StatusType.Ok;
    if (result === StatusType.Ok || this.loopCount >= this.maxLoops) {
      isFunction(this.callback) && this.callback(result);
      this.stopLoopCheck();
    }
  }

  /**
   * 开始轮询检测
   *
   * - 每2秒执行一次
   *
   * @private
   * @memberof BlankScreen
   */
  private startLoopCheck(): void {
    if (this.loopCount >= this.maxLoops) {
      this.stopLoopCheck();
    }

    if (this.loopTimer) {
      return;
    }
    this.loopTimer = setInterval(() => {
      this.skeleton && (this.skeletonCurrentList = []);
      this.loopCount++;

      this.idleCallback();
    }, 2000);
  }

  /**
   * 停止轮询检测
   *
   * @private
   * @memberof BlankScreen
   */
  private stopLoopCheck(): void {
    if (this.loopTimer) {
      clearInterval(this.loopTimer);
      this.loopTimer = null;
      this.loopCount = 0;
      this.isStopedLoop = true;

      logger.log('停止轮询检测', '是否已停止轮询:', this.isStopedLoop);
    }
  }

  /**
   * 判断元素是否是容器元素
   *
   * 注意: 如果是骨架屏项目, 还有记录初化元素和最新元素
   *
   * @param element 要判断的元素
   * @returns
   */
  private isContainer(element: HTMLElement): boolean {
    const selector = this.getSelector(element);
    if (this.skeleton) {
      this.loopCount > 0
        ? this.skeletonCurrentList.push(selector)
        : this.skeletonInitList.push(selector);
    }

    return this.containerElements?.indexOf(selector) !== -1;
  }

  /**
   * 获取元素的名称
   *
   * @private
   * @param {Element} element
   * @return {*}  {string}
   * @memberof BlankScreen
   */
  private getSelector(element: Element): string {
    if (!element) {
      return '';
    }
    if (element?.id && isString(element.id)) {
      return `#${element.id}`;
    }
    if (element?.className && isString(element.className)) {
      return `.${element.className
        .split(' ')
        .filter((item: any) => !!item)
        .join('.')}`;
    }
    return element?.nodeName?.toLowerCase();
  }
}

interface BlankScreenOptions {
  /**
   * 项目是否是骨架屏
   *
   * @type {boolean}
   * @memberof BlankScreenOptions
   */
  skeleton?: boolean;
  /**
   * 元素容器
   * - 默认: ["html", "body", "#app", "#root"]
   *
   * @type {string[]}
   * @memberof BlankScreenOptions
   */
  containerElements?: string[];
  /**
   * 轮询检查最大次数
   *
   * - 默认: 30
   * - 说明: 每2秒轮询一次, 检查满30次（1分钟）, 未检测到空节点则判定为白屏
   * @type {number}
   * @memberof BlankScreenOptions
   */
  maxLoops?: number;
  /**
   * 检查结果回调
   *
   * @memberof BlankScreenOptions
   */
  callback?: (status: StatusType) => void;
}
