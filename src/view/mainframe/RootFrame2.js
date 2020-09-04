import React, { Component } from 'react';
import MainFrame from 'amos-security/lib/view/mainframe3';
import enhancePermission from 'amos-security/lib/view/enhancePermission';
import { Menu } from 'amos-framework';
import formatUrl from 'amos-processor/lib/utils/urlFormat';
import { secExtUrl, SecurityUrl } from './../../consts/urlConsts';

const MenuItem = Menu.Item;

@enhancePermission({
  // 不进行 权限校验的路由
  exclude: ['/main/webstudio/mpublish', /\/design(\/[a-zA-Z0-9]+)?$/]
})
class RootFrame2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siderMenusList: [],
      selectedSubMenuKey: ''
    };
  }

  getFrameConfig = () => {
    return {
      opSearchMenusUrl: formatUrl(secExtUrl.opSearchMenusUrl, { nodeName: '', type: '25' }),
      logoImg: '/src/assets/logo/toip.png',
      logoExtra: true,
      defaultLink: '/main',
      loginLink: '/login'
    };
  }

  getSysToolProps = () => {
    return {
      userPic: '/src/assets/user/normal.png',
      userExtra: true,
      loginOutUrl: SecurityUrl.loginOutUrl,
      userInfoLink: '/main/securityConfig',
      extraTools: this.renderExtraTools()
    };
  }

  clickTestMenu = () => {

  }

  renderExtraTools = () => {
    return [
      <MenuItem key="in" onClick={this.clickTestMenu}>+</MenuItem>,
      <MenuItem key="out" onClick={this.clickTestMenu}>-</MenuItem>,
      <MenuItem key="help" onClick={this.clickTestMenu}>?</MenuItem>
    ];
  }

  render() {
    const frameConfig = this.getFrameConfig();
    const sysToolPorps = this.getSysToolProps();
    const { siderMenusList, selectedSubMenuKey } = this.state;
    return (
      <MainFrame
        {...frameConfig}
        sysToolPorps={sysToolPorps}
        siderMenusList={siderMenusList}
        selectedSubMenuKey={selectedSubMenuKey}
        showSysExchange
        {...this.props}
      />
    );
  }
}

export default RootFrame2;
