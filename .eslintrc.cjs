/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier/skip-formatting'],
  'rules': {
    'no-unused-vars': 'error',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-var':'error', // 禁止使用var
    'eqeqeq':'error', // 强制使用!==或 ===
   },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
