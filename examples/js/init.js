const instance = MONITOR.init({
  appKey: 'NATIVE_JS_DEMO_appKey',
  appVersion: '0.0.1',
  disabled: false,
  requestIsSuccess(_req, res) {
    try {
      const data = JSON.parse(res.data);
      return data.code === 200;
    } catch (error) {
      return true;
    }
  }
});

window.__MONITOR__ = instance;
