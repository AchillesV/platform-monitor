/**
 * webpack 打包配置文件
 * @author ilex
 */

const { tools } = require('ray-plugins');
const simpleConfig = require('amos-build/lib/simpleConfig');

const __ENV__ = tools.trim(process.env.NODE_ENV);
// ------------------------------------------------------
// 添加webpack加载别名,用于导包重定向，优化打包以及代码
// 此处需要自己进行定义
// 👻可修改
// ------------------------------------------------------
const alias = {
  MODEL: __dirname + '/src/model',
  UTILS: __dirname + '/src/utils',
  CONSTS: __dirname + '/src/consts',
  _MOCK: __dirname + '/src/_mock'
};

// ------------------------------------
// 入口点
// ------------------------------------
// 发布模式入口
const prodEntry = {
  // app: './demo/index.js'
  // app: './src/entry/demo.js'
  app: './src/entry/index.prod.js'
};

// 开发模式入口
const devEntry = {
  // app: './demo/index.js'
  // app: './src/entry/demo.js'
  // code split 测试
  // app: './src/entry/index.prod.js'
  app: './src/entry/index.js'
};

const config = {
  tpl: './tpl.html',
  toFile: 'index.html',
  entry: __ENV__ === 'production' ? prodEntry : devEntry,
  useHot: true,
  port: 3301,
  alias,
  sourceMap: __ENV__ === 'production' ? false : true
};

const defaultConfig = simpleConfig(config);

defaultConfig.name = 'amos-tpl';

module.exports = defaultConfig;
