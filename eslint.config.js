// eslint.config.js
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // Add or update rules here
  },
  overrides: [
    {
      files: ['*.vue', '*.js'],
      rules: {
        // Add or update rules specific to .vue and .js files
      }
    }
  ]
};
