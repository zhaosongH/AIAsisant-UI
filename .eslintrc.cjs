/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 格式相关规则
    'prettier/prettier': 'error', // 使用 prettier 推荐的格式规则
    'max-len': ['error', { code: 120, tabWidth: 2 }], // 限制一行的最大长度
    indent: ['error', 2], // 使用2个空格进行缩进
    quotes: ['error', 'single'], // 使用单引号
    semi: ['error', 'always'], // 在语句末尾添加分号
    'comma-dangle': ['error', 'always-multiline'], // 多行数组和对象字面量的末尾加上尾随逗号
    'no-console': 'warn', // 禁止使用 console
    'no-debugger': 'warn', // 禁止使用 debugger
    eqeqeq: 'off', // 要求使用 `===` 和 `!==`
    curly: 'error', // 强制所有控制语句使用一致的括号风格
  },
};
