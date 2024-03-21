'use strict';

module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['**/*.{js,ts}'],
      plugins: ['ember'],
      parser: '@typescript-eslint/parser',
      extends: ['eslint:recommended', 'plugin:ember/recommended'],
    },
    {
      files: ['**/*.gjs'],
      parser: 'ember-eslint-parser',
      plugins: ['ember'],
      extends: [
        'eslint:recommended',
        'plugin:ember/recommended',
        'plugin:ember/recommended-gjs',
      ],
    },
    {
      files: ['**/*.gts'],
      parser: 'ember-eslint-parser',
      plugins: ['ember'],
      extends: [
        'eslint:recommended',
        'plugin:ember/recommended',
        'plugin:ember/recommended-gts',
      ],
    },
    // test files
    {
      files: ['tests/**/*-test.{js,ts}'],
      plugins: ['ember'],
      parser: '@typescript-eslint/parser',
      extends: ['eslint:recommended', 'plugin:qunit/recommended'],
    },
    {
      files: ['tests/**/*-test.{gjs,gts}'],
      parser: 'ember-eslint-parser',
      plugins: ['ember'],
      extends: [
        'eslint:recommended',
        'plugin:qunit/recommended',
        'plugin:ember/recommended-gts',
      ],
    },
    // node files
    {
      files: [
        './.eslintrc.{js,cjs}',
        './.prettierrc.{js,cjs}',
        './.stylelintrc.{js,cjs}',
        './.template-lintrc.{js,cjs}',
        './ember-cli-build.js',
        './testem.js',
        './vite.config.mjs',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
      env: {
        browser: false,
        node: true,
      },
      extends: ['plugin:n/recommended'],
    },
  ],
};
