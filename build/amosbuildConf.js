
//-----------------------------------------------------------
// notice: do not modify this file content except entry/alias
// you can modify some config such as
// `showProgress/tpl/productionSourceMap/productionGzip`
// and so on
//-----------------------------------------------------------

var path = require('path');
var distPath = path.resolve(__dirname, '..', 'dist');

// var projectRoot = path.resolve(__dirname, '../');

var assetsPath = function(_path) {
  return path.posix.join('static', _path);
};

// ------------------------------------
// 入口点
// 👻 可修改
// ------------------------------------
var entry = {
  app: './src/entry/index.js'
};

// ------------------------------------
// 添加webpack加载别名,用于导包重定向，优化打包以及代码
// 此处需要自己进行定义
// 👻可修改
// ------------------------------------
var alias = {
  // MODEL: projectRoot + '/src/model',
  // UTILS: projectRoot + '/src/utils',
  // CONSTS: projectRoot + '/src/consts'
};

//-----------------------------------------------------------
// 👻  可修改，除非你知道该怎么修改
///-----------------------------------------------------------
module.exports = {
  webpackConf: {
    name: 'fireiot',
    entry: entry,
    alias: alias
  },
  showProgress: true,
  context: __dirname,
  tpl: 'tpl.html',
  extractTextPath: assetsPath('css/[name].css?v=[contenthash:8]'),
  visualizer: path.resolve(distPath, 'visualizer.html'),
  prod: {
    dll: {
      fileName: './node_modules/amos-dll/common/prod/Amoslib.js', // 完整路径
      manifest: 'amos-dll/common/prod/manifest.json',
      outputPath: assetsPath('common/js'), // 生成目录
      publicPath: '/static/common/js' // 注入地址
    },
    toFile: path.resolve(distPath, 'index.html'),
    assetsRoot: distPath,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    output: {
      path: distPath,
      filename: assetsPath('js/[name].js?v=[chunkhash:8]'),
      chunkFilename: assetsPath('js/chunk.[id].js?v=[chunkhash:8]')
    }
  },
  dev: {
    dll: {
      fileName: './node_modules/amos-dll/common/dev/Amoslib.js', // 完整路径
      manifest: 'amos-dll/common/dev/manifest.json',
      outputPath: assetsPath('common/dev'), // 生成目录
      publicPath: '/static/common/dev' // 注入地址
    },
    toFile: 'index.html',
    port: 9000,
    assetsRoot: distPath,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    staticPath: '/common',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    output: {
      path: distPath,
      filename: assetsPath('js/[name].js'),
      chunkFilename: assetsPath('js/chunk.[id].js')
    }
  },
  test: {
    dll: {
      fileName: './node_modules/amos-dll/common/prod/Amoslib.js', // 完整路径
      // fileName: require.resolve('amos-dll/common/prod/Amoslib.js'),
      manifest: 'amos-dll/common/prod/manifest.json',
      outputPath: assetsPath('common/js'), // 生成目录
      publicPath: '/static/common/js' // 注入地址
    },
    index: path.resolve(distPath, 'index.html'),
    assetsRoot: distPath,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  }
};
