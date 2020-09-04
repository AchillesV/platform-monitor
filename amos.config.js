/**
 * amos 系统配置信息
 * @author ilex.h
 */
!(function() {
  var Amos = {};
  Amos.config = {
    // 普通http
    httpURI: {
      // 根url
      baseURI: '',
      // 安全模块api地址
      securityBaseURI: 'http://172.16.3.3:8800/'
    },
    // websocket 地址
    wsURI: {
      baseURI: 'ws://172.16.3.3:8800/',
      securityBaseURI: 'ws://172.16.3.3:8800/'
    },
    // 外部链接地址
    outterURI: {

    },
    // 系统配置信息
    sysConf: {
      needHeartBeat: true
    }
  };

  // 配置日志系统
  var LogConfig = {
    isDebug: true // 调试模式时打印日志
  };

  window.Amos = Amos;
  window.LogConfig = LogConfig;
})();
