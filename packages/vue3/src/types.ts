import { type InitOptions } from '@easy-track/core';

export interface Plugin {
  version: string;
  install(app: any, options: InitOptions): void;
}

export interface ViewModel {
  [key: string]: any;
  $root?: Record<string, unknown>;
  $options?: {
    [key: string]: any;
    name?: string;
    propsData?: { [key: string]: any };
    _componentTag?: string;
    __file?: string;
    props?: { [key: string]: any };
  };
  $props?: Record<string, unknown>;
}
