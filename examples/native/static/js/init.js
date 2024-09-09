// const instance = MONITOR.init({
//   appKey: 'NATIVE_JS_DEMO_appKey',
//   appVersion: '0.0.1',
//   disabled: false,
//   requestIsSuccess(_req, res) {
//     try {
//       const data = JSON.parse(res.data);
//       return data.code === 200;
//     } catch (error) {
//       return true;
//     }
//   }
// });

// window.__MONITOR__ = instance;

document.addEventListener('DOMContentLoaded', () => {
  // 初始化监控 SDK
  const instance = EasyTrackCore.init({
    dsn: 'https://easytrack.dev/api',
    appCode: 'vue3-demo',
    // appVersion: 111,

    // userId: 101,
    userId: () => {
      return 'xxxxx';
    },

    uuid: () => '1234567890',

    switchs: {
      performance: false,
    },

    report: {
      headers: {
        'X-Custom-Header': '自定义请求头-xxx'
      },
      format: (data) => {
        return data.map((it) => ({
          ...it,
          custom: '这是格式化后的上报数据'
        }));
      }
      // customReport: (data) => {
      //   console.log('这是自定义上报方法', data);
      //   fetch('https://easytrack.dev/api/xxx', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(data)
      //   });
      // },
      // isReport: (data) => {
      //   return !(data.length > 5);
      // }
    },

    debug: true,
    // skeleton: true,

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
      
    }
  })
});


