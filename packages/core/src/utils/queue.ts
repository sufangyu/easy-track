import { isFunction } from 'lodash-es';
import { VoidFunc } from '../types';
import { _global } from './global';

/**
 * 数据上报队列
 *
 * @export
 * @class Queue
 */
export class Queue {
  private stack: any[] = [];

  private isFlushing = false;

  constructor() {}

  addFunc(fn: VoidFunc): void {
    if (!isFunction(fn)) {
      return;
    }

    if (!('requestIdleCallback' in _global || 'Promise' in _global)) {
      fn();
      return;
    }

    this.stack.push(fn);

    if (!this.isFlushing) {
      this.isFlushing = true;
      // 优先使用 requestIdleCallback
      if ('requestIdleCallback' in _global) {
        requestIdleCallback(() => this.flushStack());
      } else {
        // 其次使用微任务上报
        Promise.resolve().then(() => this.flushStack());
      }
    }
  }

  clear() {
    this.stack = [];
  }

  getStack() {
    return this.stack;
  }

  flushStack() {
    const temp = this.stack.slice(0);
    this.stack = [];
    this.isFlushing = false;
    for (let i = 0; i < temp.length; i++) {
      temp[i]();
    }
  }
}
