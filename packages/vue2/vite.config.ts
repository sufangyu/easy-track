import { resolve } from 'node:path';
import { existsSync, lstatSync, readdirSync, rmdirSync, unlinkSync } from 'node:fs';
import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

import dts from 'vite-plugin-dts';
import pkg from './package.json';

emptyDir(resolve(__dirname, 'types'));

export default defineConfig(({ mode }) => ({
  root: __dirname,
  plugins: [
    eslint({
      failOnWarning: false,
      failOnError: true,
      fix: true
    }),
    dts({
      outDir: 'types',
      entryRoot: 'src',
      tsconfigPath: resolve(__dirname, 'tsconfig.json'),
      rollupTypes: true,
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.d.ts'],
      exclude: ['node_modules', 'dist']
    })
  ],
  optimizeDeps: {
    include: ['@easy-track/core']
  },
  build: {
    minify: mode === 'production',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: convertPackageName(pkg.name),
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      output: {
        exports: 'named' // 使用命名导出
      },
      external: [...builtinModules]
    }
  }
}));

/**
 * 删除目录
 *
 * @param {string} dir
 * @return {*}  {void}
 */
function emptyDir(dir: string): void {
  if (!existsSync(dir)) {
    return;
  }

  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file);

    // baseline is Node 12 so can't use rmSync
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      rmdirSync(abs);
    } else {
      unlinkSync(abs);
    }
  }
}

/**
 * 将 package.json 中的 name 转换为大写
 *
 * @param {string} input
 * @return {*}  {string}
 */
function convertPackageName(input: string): string {
  // 去除前缀和分隔符
  const cleaned = input
    .replace(/[^a-zA-Z0-9]/g, ' ') // 将所有非字母数字字符替换为空格
    .trim() // 去除前后空格
    .replace(/\s+(.)/g, (_, char) => char.toUpperCase()) // 将每个空格后的字符转换为大写
    .replace(/^(.)/, (_, char) => char.toUpperCase()); // 将开头的字符转换为大写

  return cleaned;
}
