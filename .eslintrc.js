module.exports = {
  env: {
    browser: true,
    es6: true,
    'react-native/react-native': true // whitelist all browser-like globals
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      ts: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-native',
    'import',
    'jsx-a11y',
    'typescript',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [
      0,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ], //支持在tsx文件中写jsx语法
    'indent': [1, 4], //个人喜好，使用四个空格（1个tab）代替默认的两个空格缩进
    'react/jsx-indent': [1, 4], //jsx语法中也使用四个空格的缩进
    'react/jsx-indent-props': [1, 4], //jsx语法中props缩进
    'react/prop-types': 0, //防止在React组件定义中丢失props验证？？？
    'react/prefer-stateless-function': 1,
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false }
    ],
    //react-native相关linter
    'react-native/no-unused-styles': 2, // disallow unused styles
    'react-native/no-inline-styles': 1, // disallow styles declared within the component itself
    'react-native/no-color-literals': 0, // enforces variable names to be used for storing colors

    'prettier/prettier': 2,
  },
  // parser: 'typescript-eslint-parser', //代替默认parser，使ESLint更友好的支持TypeScript类型检查
  parser: '@typescript-eslint/parser',
  settings: {
    //避免在tsx文件中导入其他组件报错(import/no-unresolved)
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
