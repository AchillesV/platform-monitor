/**
 * webpack 打包配置文件
 * @author ilex
 */

const dllConfig = require('amos-build/lib/dll/prod');

const config = require('./build/amosbuildConf');

const amosConfig = dllConfig(config);

module.exports = amosConfig;

