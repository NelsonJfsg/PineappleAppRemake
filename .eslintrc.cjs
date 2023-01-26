module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'indent':[
      'error',
      2
    ],
    'quotes':[
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'padded-blocks': [
      'error',
      'always'
    ],
    'eol-last': [
      'error',
      'never'
    ]
  }
}
