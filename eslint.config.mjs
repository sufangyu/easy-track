// https://juejin.cn/post/7378046072952619042
// https://ksh7.com/posts/eslint-update-9/index.html

import globals from 'globals';
import eslint from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
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
      '@typescript-eslint': tsPlugin
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
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
