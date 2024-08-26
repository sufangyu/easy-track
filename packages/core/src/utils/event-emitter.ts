import { safeExecute } from './debug';

type EventHandler<T> = (data: T) => void;

export class EventEmitter<T = any> {
  private eventHandlers: Map<string, EventHandler<T>[]>;

  constructor() {
    this.eventHandlers = new Map();
  }

  /**
   * 订阅事件
   *
   * @param {string} eventName
   * @param {EventHandler<T>} handler
   * @memberof EventEmitter
   */
  subscribe(eventName: string, handler: EventHandler<T>): void {
    const target = this.eventHandlers.get(eventName);
    if (target) {
      target.push(handler);
    } else {
      this.eventHandlers.set(eventName, [handler]);
    }
  }

  /**
   * 取消订阅事件
   *
   * @param {string} eventName 事件名称
   * @param {EventHandler<T>} handler 事件处理函数
   * @memberof EventEmitter
   */
  unsubscribe(eventName: string, handler: EventHandler<T>): void {
    if (!this.eventHandlers.has(eventName)) {
      return;
    }

    const handlers = this.eventHandlers.get(eventName)!;
    const index = handlers.indexOf(handler);
    if (index !== -1) {
      handlers.splice(index!, 1);
      if (handlers.length === 0) {
        this.eventHandlers.delete(eventName);
      }
    }
  }

  /**
   * 触发事件
   *
   * @param {string} eventName 事件名称
   * @param {T} [data] 数据
   * @return {*}
   * @memberof EventEmitter
   */
  emit(eventName: string, data?: T): void {
    if (!this.eventHandlers.has(eventName)) {
      return;
    }

    const handlers = this.eventHandlers.get(eventName)!;
    handlers.forEach((handler) => {
      safeExecute(() => handler(data!));
    });
  }
}

export const eventEmitter = new EventEmitter();
