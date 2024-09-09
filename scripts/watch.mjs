import { build } from 'vite';
import chokidar from 'chokidar';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 模拟 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function watchCore() {
  await build({
    configFile: 'packages/core/vite.config.ts',
    mode: 'development',
    build: {
      watch: {}
    }
  });
}

async function watchVue3() {
  await build({
    configFile: 'packages/vue3/vite.config.ts',
    mode: 'development',
    build: {
      watch: {}
    }
  });
}

async function watchVue2() {
  await build({
    configFile: 'packages/vue2/vite.config.ts',
    mode: 'development',
    build: {
      watch: {}
    }
  });
}

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// copy core 的构建产物 到 native
const copyDist = () => {
  const watchDir = 'packages/core/dist/index.umd.js';
  const targetDir = 'examples/native/static/js/index.umd.js';
  const watcher = chokidar.watch(watchDir, {
    persistent: true,
    ignoreInitial: false, // 是否忽略初始的 add 事件
  });

  const copyFile = async () => {
    const fileFullPath = path.join(__dirname, '../', watchDir);
    const targetFullDir = path.join(__dirname, '../', targetDir);
    console.log('copy file', fileFullPath, targetFullDir);
    // await fs.promises.copyFile(fileFullPath, targetFullDir);
    fs.copyFileSync(fileFullPath, targetFullDir);
  };

  watcher
    .on('add', filePath => copyFile(filePath))
    .on('change', filePath => copyFile(filePath))
};

await watchCore();
// fix: 等待核心功能包编译完成再编译后需的包
await sleep(5000);
await watchVue3();
await watchVue2();
await copyDist();
