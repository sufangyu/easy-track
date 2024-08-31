import { createApp } from "vue";
import WebTracing from "@web-tracing/vue3";
import webSee from "@websee/core";
import EasyTrack from "@easy-track/vue3";
import "./tailwind.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app
  .use(router)
  // .use(WebTracing, {
  //   dsn: "https://easytrack.dev/api",
  //   appName: "cxh",
  //   debug: true,
  //   pv: true,
  //   performance: true,
  //   error: true,
  //   event: true,
  //   cacheMaxLength: 10,
  //   cacheWatingTime: 1000,
  //   ignoreRequest: [
  //     /getAllTracingList/,
  //     /cleanTracingList/,
  //     /getBaseInfo/,
  //     /getSourceMap/,
  //   ],
  // })

  // .use(webSee, {
  //   dsn: "http://text.com/reportData",
  //   apikey: "project1",
  //   userId: "89757",
  //   maxBreadcrumbs: 5,
  // })

  .use(EasyTrack, {
    dsn: "https://easytrack.dev/api",
    appCode: "vue3-demo",
    report: {
      // reportType: "img",
      headers: {
        "X-Custom-Header": "自定义请求头-xxx",
      },
    },
    userId: () => {
      return "xxxxx";
    },
    // maxEvents: 20,
    log: true,
    skeleton: true,
    globalClickListeners: [
      {
        selector: ".cla", // 选择器
        data: "report data1", // 上报数据
      },
      {
        elementText: "report2", // 元素文本
        data: "report data2",
      },
      {
        selector: ".r", // 选择器 + 元素文本
        elementText: "report3",
        data: "report data3",
      },
    ],
    // exposureTrack: {
    //   elements: [],
    //   exposureIdAttr: 'xx',
    //   minObserveTime: 30000,
    // },
  })
  .mount("#app");
