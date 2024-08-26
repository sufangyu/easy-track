const instance = MONITOR.initVue({
  appKey: 'NATIVE_JS_DEMO',
  vue: Vue,
  debug: true,
  silentConsole: true,
  maxBreadcrumbs: 10,
  dsn: 'http://localhost:2021/errors/upload'
});
window.__MONITOR__ = instance;

const instance2 = MONITOR.initVue({
  appKey: 'NATIVE_JS_DEMO',
  vue: Vue,
  silentXhr: true,
  debug: true,
  silentConsole: true,
  maxBreadcrumbs: 10,
  dsn: 'http://localhost:2021/errors/upload'
});
window.__MONITOR__2 = instance2;
