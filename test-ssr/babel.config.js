// 이 파일의 설정은 webpack.config.js의 babel-loader가 실행될 때 적용된다.

const presets = ['@babel/preset-react', '@babel/preset-env'];
const plugins = [];

module.exports = { presets, plugins };