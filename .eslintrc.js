// Copyright (c) Huawei Technologies Co., Ltd. 2022. All rights reserved.

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@nce/eslint-config-nce',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    '@typescript-eslint/indent': 'warn',
    'guard-for-in': 'off',
    'quote-props': [0, 'as-needed'],
    'lines-around-comment': [2, { allowBlockStart: true }],
    'padded-blocks': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@nce/no-commented-code': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    'class-methods-use-this': 'off',
    'filenames/match-exported': 'off',
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', 'vue/types/options', '../../', '../'], // eslint无法解析某些引入，需要在此屏蔽
      },
    ],
    complexity: ['error', 40],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'react-hooks/rules-of-hooks': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {},
    },
  ],
};
