// https://juejin.cn/post/7378046072952619042
// https://ksh7.com/posts/eslint-update-9/index.html

import globals from 'globals';
import js from '@eslint/js';
// 兼容旧版本的包
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    files: ['packages/**/*.js', 'packages/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        WindowEventMap: 'readonly',
        EventListenerOrEventListenerObject: 'readonly',
        IDBObjectStoreParameters: 'readonly',
        RequestInfo: 'readonly',
        RequestInit: 'readonly',
        NodeJS: 'readonly',
        _global: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'import-x': importPlugin
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin', // 内置模块
            'external', // 外部模块
            'internal', // 内部引用
            [
              'parent', // 父节点依赖
              'sibling', // 兄弟依赖
              'index' // index 文件
            ],
            'type', // 类型文件
            'unknown'
          ],
          // 通过路径自定义分组
          pathGroups: [
            {
              pattern: '{vue,vue-router,pinia,pinia-**}',
              group: 'builtin',
              position: 'after'
            },
            {
              pattern: 'element-plus',
              group: 'external'
              // position: 'before'
            }
            // {
            //   pattern: '{@share/**,@main/**,@renderer/**}',
            //   group: 'internal',
            //   position: 'after'
            // },
            // {
            //   pattern: '{@core/**,@layout/**,@components/**,@store/**,@router/**,@modules/**}',
            //   group: 'parent',
            //   position: 'before'
            // }
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          // 是否开启独特组，用于区分自定义规则分组和其他规则分组
          distinctGroup: true,
          // 每个分组之间换行
          'newlines-between': 'always',
          // 相同分组排列规则 按字母升序排序
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ]
    }
  },
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/out',
      '**/types',
      '.vscode',
      '.gitignore',
      'examples/',
      '**/vite.config.ts',
      '**/scripts'
    ]
  }
];
