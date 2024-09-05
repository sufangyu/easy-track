import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import EasyTrack from '@easy-track/vue2';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'mini' });

Vue.use(EasyTrack, {
  dsn: 'https://www.easy-track.com/api/v1',
  appCode: 'vue2-demo',
  userId: () => 'xxxxx',

  uuid: () => '1234567890',

  report: {
    headers: {
      'X-Custom-Header': '自定义请求头-xxx'
    },
    format: (data: any[]) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      data.map((it) => ({
        ...it,
        custom: '这是格式化后的上报数据'
      }))
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

  debug: true,
  skeleton: false,

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
      return false;
    }
  }
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
