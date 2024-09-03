import { createApp } from 'vue';
// import WebTracing from '@web-tracing/vue3';
// import webSee from '@websee/core';
import EasyTrack from '@easy-track/vue3';
import './tailwind.css';
import './style.css';
import App from './App.vue';
import router from './router';

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
    dsn: 'https://easytrack.dev/api',
    appCode: 'vue3-demo',
    // appVersion: 111,

    // userId: 101,
    userId: () => {
      return 'xxxxx';
    },

    uuid: () => '1234567890',

    report: {
      headers: {
        'X-Custom-Header': '自定义请求头-xxx'
      },
      format: (data: any[]) => {
        return data.map((it) => ({
          ...it,
          custom: '这是格式化后的上报数据'
        }));
      }
      // customReport: (data: any[]) => {
      //   console.log('这是自定义上报方法', data);
      //   fetch('https://easytrack.dev/api/xxx', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(data)
      //   });
      // },
      // isReport: (data: any[]) => {
      //   return !(data.length > 5);
      // }
    },

    log: true,
    skeleton: true,

    maxEvents: 20,

    globalClickListeners: [
      {
        selector: '.cla', // 选择器
        data: 'report data1' // 上报数据
      },
      {
        elementText: 'report2', // 元素文本
        data: 'report data2'
      },
      {
        selector: '.r', // 选择器 + 元素文本
        elementText: 'report3',
        data: 'report data3'
      }
    ],

    // exposureTrack: {
    //   elements: [],
    //   exposureIdAttr: 'xx',
    //   minObserveTime: 30000,
    // },

    performance: {
      filterLongtask: () => {
        const curUrl = window.location.href;
        if (curUrl.includes('/rrweb-player')) {
          return true;
        }
      }
    }
  })
  .mount('#app');
