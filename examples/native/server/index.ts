import express from 'express';
import open from 'open';

// @ts-ignore
import { PORT, FILE_PATHS, SERVER_URLS } from './config.ts';

const app = express();

// 静态资源
Object.entries(FILE_PATHS).forEach(([path, resolvePath]) => {
  app.use(path, express.static(resolvePath));
});

// mock api
app.get(SERVER_URLS.normalGet, (req, res) => {
  res.send('get 正常请求响应体');
});
app.get(SERVER_URLS.authGet, (req, res) => {
  res.send({
    code: 401,
    message: '没有权限访问'
  });
});
app.get(SERVER_URLS.exceptionGet, (req, res) => {
  res.status(500).send('get 异常响应体!!!');
});

app.post(SERVER_URLS.normalPost, (req, res) => {
  res.send('post 正常请求响应体');
});

app.post(SERVER_URLS.exceptionPost, (req, res) => {
  res.status(500).send('post 异常响应体!!!');
});

app.post(SERVER_URLS.errorsUpload, (req, res) => {
  res.send('错误上报成功');
});

const url = `http://localhost:${PORT}/page/index.html`;
app.listen(PORT, () => {
  console.log(`examples is available at: http://localhost:${PORT}`);
  if (process.env.NODE_ENV === 'demo') {
    open(url, {
      app: {
        name: 'google chrome'
      }
    });
  }
});
