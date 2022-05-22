module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    'src/assets/*',
    '.eslintrc.js',
    '.prettierrc.js',
    '*.config.js'
  ],
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-useless-escape': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/valid-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-useless-template-attributes': 'warn',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/valid-v-memo': 'error',
  },
};