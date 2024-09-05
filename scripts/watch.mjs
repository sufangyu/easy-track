import { build } from 'vite';

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

await watchCore();
// fix: 等待核心功能包编译完成再编译后需的包
await sleep(5000);
await watchVue3();
await watchVue2();
