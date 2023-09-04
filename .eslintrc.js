//更详细的配置文档请参考：https://github.com/vuejs/eslint-plugin-vue#gear-configs
module.exports = {
  extends: ['plugin:vue/strongly-recommended', 'eslint:recommended', '@vue/typescript/recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  settings: {
    'html/html-extensions': [
      '.erb',
      '.handlebars',
      '.hbs',
      '.htm',
      '.html',
      '.mustache',
      '.nunjucks',
      '.php',
      '.tag',
      '.twig',
      '.wxml',
      '.we'
    ]
  },
  rules: {
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-duplicate-attributes': 'warn',
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-end-tag': false
      }
    ],
    'vue/no-reserved-keys': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'warn',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-vars': 'warn',
    'vue/require-component-is': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-text': 'error',
    'vue/comment-directive': 0
  }
}
