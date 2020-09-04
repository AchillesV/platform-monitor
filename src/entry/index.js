/**
 *
 * @authors ilex
 * @date    2016-07-18 16:42:35
 * @description 主入口模块
 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RProgress from 'ray-progress';
import { Router, browserHistory } from 'amos-react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { browerSupport, consts } from 'amos-tool';
import { DownloadBrowsers, AmosAlert } from 'amos-framework';
import 'amos-security/lib/style';
import rootRoutes from './../routes';
import { allPermsAction } from './../services/navApi';
import { configureStoreWithDev } from './../store';

// 引入主体样式文件
import './../styles';

const store = configureStoreWithDev();

const history = syncHistoryWithStore(browserHistory, store);
const support = browerSupport(['firefox/', 'chrome/'], {
  'firefox/': { limit: consts.GREATER_EQUAL, version: 50 },
  'chrome/': { limit: consts.GREATER_EQUAL, version: 55 }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rootRoutes: rootRoutes(),
      visible: false
    };
  }

  componentWillMount() {
    allPermsAction().then(data => {
      this.setState({ rootRoutes: rootRoutes(data), visible: true });
    }, err => {
      //AmosAlert.error('警告', '系统初始化失败！');
      this.setState({ visible: true });
    });
  }

  onUpdate = () => {
    RProgress.done();
    window.scrollTo(0, 0);
  };

  render() {
    if (this.state.visible){
      return (
        <Provider store={store}>
          <Router history={history} routes={this.state.rootRoutes} onUpdate={() => this.onUpdate()} />
        </Provider>
      );
    } else {
      return null;
    }
  }
}

const main = support ? <App /> : <DownloadBrowsers />;

render(main, document.getElementById('app'));

// 开发模式下开启 热加载 (不需要开启时，屏蔽一下代码即可)
if (module.hot) {
  module.hot.accept();
}
