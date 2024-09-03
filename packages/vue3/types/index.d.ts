import { InitOptions } from '@easy-track/core';

/**
 *  监控插件
 /** @type {*} */
declare const easyTrackPlugin: Plugin_2;
export default easyTrackPlugin;

declare interface Plugin_2 {
    version: string;
    install(app: any, options: InitOptions): void;
}


export * from "@easy-track/core";

export { }
