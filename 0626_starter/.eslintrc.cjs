/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: ['dist', 'node_modules', 'src/assets/*'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    'no-console': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-useless-template-attributes': 'warn',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/valid-v-memo': 'error'
  }
}
