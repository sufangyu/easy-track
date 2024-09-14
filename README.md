# 介绍

前端监控 SDK，用于收集、监控并上报前端代码报错、性能数据、白屏、页面录屏、用户行为等数据。

## 功能

- 错误捕获：代码报错、资源加载报错、接口请求报错
- 性能数据：FP、FCP、LCP、CLS、TTFB、FID
- 用户行为：页面访问、点击、接口调用
- 个性化指标：Long Task、Memory 页面内存
- 白屏检测：检测页面打开后是否一直白屏
- 支持手动上报错误
- 支持 Web 框架：vue2、vue3、react

## 安装

```bash
# 安装核心包
$ npm i @easy-track/core


# 安装 vue2 插件
$ npm i @easy-track/vue2


# 安装 vue3 插件
$ npm i @easy-track/vue3
```

## 使用

### 原生 HTML

```js
// DOM 加载完成后初始化 SDK
document.addEventListener('DOMContentLoaded', () => {
  const instance = EasyTrackCore.init({
    dsn: 'https://www.easy-track.com/api/v1',
    appCode: 'vue3-demo',
    userId: () => 'xxxxx'
  });
});
```

### Vue2

```ts
Vue.use(EasyTrack, {
  dsn: 'https://www.easy-track.com/api/v1',
  appCode: 'vue2-demo',
  userId: () => 'xxxxx'
});
```

### Vu3

```ts
const app = createApp(App);

app.use(EasyTrack, {
  dsn: 'https://www.easy-track.com/api/v1',
  appCode: 'vue2-demo',
  userId: () => 'xxxxx'
});
```

## 常规配置项

| 名称                   | 类型                              | 默认值                           | 必传项 | 描述                                             |
| :--------------------- | :-------------------------------- | -------------------------------- | :----: | ------------------------------------------------ |
| `dsn`                  | `string`                          | `""`                             |   是   | 上报的接口地址                                   |
| `appCode`              | `string`                          | `""`                             |   是   | 应用编码，唯一标识                               |
| `appVersion`           | `string`                          | `""`                             |   否   | 应用版本                                         |
| `userId`               | [`string`, `() => string`]        | `""`                             |   是   | 用户 ID                                          |
| `uuid`                 | [`string`, `() => string`]        | fp浏览器指纹                     |   否   | 设备唯一 ID, 默认使用 fp 浏览器指纹              |
| `report`               | `ReportOptions`                   | `{reportType: 'http'}`           |   否   | 请求上报配置, [查看](#ReportOptions)             |
| `cacheType`            | `normal`, `storage`, `db`         | `storage`                        |   否   | 数据存储类型                                     |
| `globalClickListeners` | `GlobalClickListenerItem[]`       | `[data-track]`                   |   否   | 全局点击监听器, [查看](#GlobalClickListenerItem) |
| `containerElements`    | `string[]`                        | `['html','body','#app','#root']` |   否   | 元素容器集合, 用于白屏检查                       |
| `skeleton`             | `boolean`                         | `false`                          |   否   | 是否骨架屏项目, 用于白屏检查                     |
| `switchs`              | `Switch`                          | 全功能                           |   否   | 功能开关配置, [查看](#Switch)                    |
| `maxEvents`            | `number`                          | `10`                             |   否   | 缓存数据最大长度, 超出该值时会上报数据、清空数据 |
| `checkHttpStatus`      | `(response) => boolean`           | HTTP 状态码 >=200 & < 400        |   否   | 判断响应数据是否是成功. `true` 表示成功          |
| `filterHttpUrl`        | `(url, method) => boolean`        | ``                               |   否   | 过滤上报的请求url                                |
| `historyUrlsNum`       | `number`                          | `3`                              |   否   | 需要记录的url跳转数组长度上限                    |
| `performance`          | `{filterLongtask: () => boolean}` | ``                               |   否   | 过滤长任务上报, 默认上报所有长任务               |
| `exposureTrack`        | `Object`                          | `{}`                             |   否   | 元素曝光配置, [查看](#ExposureTrack)             |
| `debug`                | `boolean`                         | `false`                          |   否   | 是否开启调试, 会打印 log 日志                    |

### <span id="ReportOptions">请求上报配置（ReportOptions）</span>

| 名称           | 类型                                | 默认值 | 必传项 | 描述                         |
| :------------- | :---------------------------------- | ------ | :----: | ---------------------------- |
| `headers`      | `Object`, `() => Object`            | `{}`   |   否   | 自定义请求头                 |
| `reportType`   | `img`, `http`, `beacon`             | `http` |   否   | 上报类型                     |
| `format`       | `(data: ReportParams[]) => any`     | ``     |   否   | 自定义上报格式               |
| `customReport` | `(data: ReportParams[]) => any`     | ``     |   否   | 自定义上报格式               |
| `isReport`     | `(data: ReportParams[]) => boolean` | ``     |   否   | 返回一个布尔值决定要不要上报 |

**示例：**

```ts
{
  report: {
    // 自定义请求头
    headers: {
      'X-Custom-Header': '自定义请求头-xxx'
    },

    // 格式化数据
    format: (data: any[]) => {
      return data.map((it) => ({
        ...it,
        custom: '这是格式化后的上报数据'
      }));
    }

    // 自定义上报方法
    customReport: (data: any[]) => {
      fetch('https://easytrack.dev/api/xxx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    },

    // 返回一个布尔值决定要不要上报
    isReport: (data: any[]) => {
      return !(data.length > 5);
    }
  }
}

```

### <span id="GlobalClickListenerItem">全局点击监听器（GlobalClickListenerItem）</span>

| 名称          | 类型                            | 默认值         | 必传项 | 描述       |
| :------------ | :------------------------------ | -------------- | :----: | ---------- |
| `selector`    | `string`                        | `[data-track]` |   否   | 元素选择器 |
| `elementText` | `string`                        | ``             |   否   | 元素文本   |
| `eventName`   | `string`                        | ``             |   否   | 事件名称   |
| `data`        | `string`, `Record<string, any>` | ``             |   否   | 事件数据   |

**示例：**

```ts
{
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
  ];
}
```

**推荐：**

推荐不适用该配置项目, 直接使用默认的配置即可, 也就是在需要监控的元素上添加 `data-track` 属性。另外, 还可以增加 `data-event-name` 和 `data-event-params` 属性来定义监控事件的名称和上报数据。

```html
<div data-track data-event-name="事件名" data-event-params="{msg: '上报数据'}"></div>

<el-button data-track data-event-name="事件名" data-event-params="{msg: '上报数据'}"></el-button>
```

> 扩展: 元素曝光也可以通过给要监听元素增加 `data-exposure` 属性来监控。

### <span id="Switch">功能开关（Switch）</span>

| 名称                 | 类型      | 默认值 | 必传项 | 描述                                      |
| :------------------- | :-------- | ------ | :----: | ----------------------------------------- |
| `eventTrack`         | `boolean` | `true` |   否   | 事件埋点                                  |
| `exposureTrack`      | `boolean` | `true` |   否   | 元素曝光                                  |
| `xhr`                | `boolean` | `true` |   否   | XMLHttpRequest                            |
| `fetch`              | `boolean` | `true` |   否   | fetch 请求                                |
| `error`              | `boolean` | `true` |   否   | 异步错误                                  |
| `unhandledrejection` | `boolean` | `true` |   否   | 事件埋点                                  |
| `blankScreen`        | `boolean` | `true` |   否   | 白屏检测                                  |
| `hashchange`         | `boolean` | `true` |   否   | hashchange 模式页面监听                   |
| `history`            | `boolean` | `true` |   否   | history 模式页面监听                      |
| `performance`        | `boolean` | `true` |   否   | 性能监控                                  |
| `resource`           | `boolean` | `true` |   否   | 加载资源                                  |
| `recordScreen`       | `boolean` | `true` |   否   | 录屏                                      |
| `network`            | `boolean` | `true` |   否   | 监听网络离线、在线、类型变化上报          |
| `logger`             | `boolean` | `true` |   否   | 拦截 console.warn、console.error 进行上报 |

### <span id="ExposureTrack">曝光配置（ExposureTrack）</span>

| 名称             | 类型                      | 默认值                  | 必传项 | 描述                           |
| :--------------- | :------------------------ | ----------------------- | :----: | ------------------------------ |
| `eventTrack`     | `{  selector?: string; }` | `[data-exposure-track]` |   否   | 监控元素集合                   |
| `exposureIdAttr` | `string`                  | `data-exposure`         |   否   | 曝光标记属性                   |
| `minObserveTime` | `number`                  | 500                     |   否   | 最小曝光时间, 超过即表示为曝光 |

## 白屏检测功能说明

- 该功能用来检测页面打开后，是否一直处于白屏状态，通过 `blankScreen` 设为 `true` 来开启
- 白屏检测功能使用：关键点采样对比 + 白屏修正机制，来确保白屏功能的正确性
- 对于有骨架屏的项目，如果页面一直显示骨架屏，也算是白屏的一种，有骨架屏的项目建议 `skeleton` 设为 `true`，提高白屏检测准确性

## 手动上报错误示例

```ts
import { EventType, StatusType, eventTrack } from '@easy-track/vue3';

// 添加到事件队列
eventTrack.add({
  type: EventType.REQUEST,
  category: 'fetch',
  time: Date.now(),
  status: StatusType.Ok,
  data: {
    url: 'https://www.easy-mock.com/mock/61c827a953d04e75f1b33164/example',
    method: 'GET'
  }
});

// 立即上报
eventTrack.send({
  type: EventType.REQUEST,
  category: 'fetch',
  time: Date.now(),
  status: StatusType.Ok,
  data: {
    url: 'https://www.easy-mock.com/mock/61c827a953d04e75f1b33164/example',
    method: 'GET'
  }
});
```

## 数据结构

### 基础数据结构

```ts
{
  "type": "pv",
  "category": "beforeunload",
  "status": "ok",
  "time": 1726212571632,
  "baseInfo": {
    "domain": "localhost:5173",
		"href": "http://localhost:5173/#/error",
		"referer": "http://localhost:5173/",
		"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
		"screenWidth": 1512,
		"screenHeight": 982,
		"vireportWidth": 564,
		"vireportHeight": 802,
		"language": "zh-CN",
		"dpr": 2,
		"networkType": "4g",
		"networkSpeed": 8.7
  }
  "data": {
    // 具体数据
    ...,
  },
}
```

### 通用属性

| 属性名   | 描述                |
| :------- | :------------------ |
| type     | 事件类型            |
| category | 二级分类            |
| status   | 事件状态. ok、error |
| time     | 事件发生时间        |
| baseInfo | 基础属性            |
| data     | 事件具体数据        |

### 基础属性（baseInfo）

| 属性名         | 描述                                                                                                     |
| :------------- | :------------------------------------------------------------------------------------------------------- |
| domain         | URL 的主机（IP 地址或域名）和端口                                                                        |
| href           | 当前页面打开URL页面                                                                                      |
| referer        | 前一个访问页面的URL地址                                                                                  |
| userAgent      | 用户代理, 识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等 |
| screenWidth    | 屏幕的宽度                                                                                               |
| screenHeight   | 屏幕的高度                                                                                               |
| vireportWidth  | 内容的宽度                                                                                               |
| vireportHeight | 内容的高度                                                                                               |
| language       | 浏览器语言                                                                                               |
| dpr            | 设备的物理像素分辨率与`CSS`像素分辨率之比                                                                |
| networkType    | 网络类型                                                                                                 |
| networkSpeed   | 网速, 单位 Mbps                                                                                          |

### 事件具体数据（data）

#### 白屏事件

| 属性名 | 类型          | 描述     |
| :----- | :------------ | -------- |
| status | `ok`、`error` | 白屏状态 |
| url    | `string`      | 页面 URL |

#### 网络状态事件

| 属性名       | 类型                          | 描述                          |
| :----------- | :---------------------------- | ----------------------------- |
| networkState | `online`, `offline`, `change` | 网络状态                      |
| networkType  | `2g`, `3g`, `4g`, `slow-2g`   | 网络类型                      |
| networkSpeed | `number`                      | 网络速度, 网络速度, 单位 Mbps |

#### 控制台日志事件

| 属性名  | 类型           | 描述     |
| :------ | :------------- | -------- |
| level   | `warn`,`error` | 日志级别 |
| message | `any[]`        | 日志信息 |

#### 性能事件

- FCP、LCP、TTFB、FID、FSP 等指标

| 属性名 | 类型                                      | 描述     |
| :----- | :---------------------------------------- | -------- |
| name   | `CLS`, `FCP`, `FID`, `INP`, `LCP`, `TTFB` | 指标名称 |
| rating | `good`, `needs-improvement`, `poor`       | 指标值   |
| value  | `number`                                  | 指标值   |

- 长任务（PerformanceEntry）

| 属性名    | 类型     | 描述                |
| :-------- | :------- | ------------------- |
| name      | `string` | 名字                |
| entryType | `string` | 上报的 metric 类型  |
| startTime | `number` | metric 上报时的时间 |
| duration  | `number` | 事件耗时            |

- 内存信息

| 属性名          | 类型     | 描述                                          |
| :-------------- | :------- | --------------------------------------------- |
| jsHeapSizeLimit | `number` | 上下文内可用堆的最大体积，以字节计算          |
| totalJSHeapSize | `number` | 已分配的堆体积，以字节计算                    |
| usedJSHeapSize  | `number` | 当前 JS 堆活跃段（segment）的体积，以字节计算 |

- 资源加载信息（PerformanceResourceTiming[]）

| 属性名           | 类型       | 描述                                                             |
| :--------------- | :--------- | ---------------------------------------------------------------- |
| name             | `string`   | 资源 URL                                                         |
| entryType        | `resource` | 类型                                                             |
| startTime        | `number`   | 开始时间                                                         |
| duration         | `number`   | 响应时长, `responseEnd` 和 `startTime` 差值                      |
| initiatorType:   | `string`   | 资源类型, 如: `script`, `style`, `link` 等                       |
| redirectStart:   | `number`   | 初始重定向的开始获取时间                                         |
| redirectEnd:     | `number`   | 重定向响应的最后一个字节后时间                                   |
| transferSize:    | `number`   | 资源的大小（以八位字节为单位）,包括响应头字段和响应 payload body |
| encodedBodySize: | `number`   | 从 payload body 的提取（HTTP 或高速缓存）接收的大小              |
| decodedBodySize: | `number`   | 从消息正文 ( message body ) 的提取（HTTP 或缓存）接收的大小      |
| fetchStart:      | `number`   | 始获取资源之前                                                   |
| connectStart:    | `number`   | 在浏览器检索资源，开始建立与服务器的连接之前                     |
| connectEnd:      | `number`   | 在浏览器完成与服务器的连接以检索资源之后                         |
| requestStart:    | `number`   | 在浏览器开始从服务器请求资源之前                                 |
| responseStart:   | `number`   | 在浏览器开始从服务器请求资源之前                                 |
| responseEnd:     | `number`   | 收到资源的最后一个字节之后或紧接在传输连接关闭之前               |

更多 PerformanceResourceTiming 属性[查看](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceResourceTiming)
