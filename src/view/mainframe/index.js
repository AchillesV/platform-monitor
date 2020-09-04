import React, { Component } from 'react';
import { browserHistory } from 'amos-react-router';
import { utils } from 'amos-tool';
import MainFrame from 'amos-security/lib/view/mainframe';
import formatUrl from 'amos-processor/lib/utils/urlFormat';
import { Menu } from 'amos-framework';
import { secExtUrl, SecurityUrl } from './../../consts/urlConsts';

const MenuItem = Menu.Item;

class RootView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siderMenusList: [],
      selectedSubMenuKey: ''
    };
  }

  onOpenDefaultPage = (menus) => {
    // open first url
    if (location.pathname === '/main'){
      const item = menus.filter(e => e.url)[0] || {};
      if (!utils.isEmpty(item)){
        if (item.url){
          browserHistory.push(item.url);
          this.setState({ siderMenusList: item.children || [] });
        }
      }
    }
  }

  getFrameConfig = () => {
    return {
      opSearchMenusUrl: formatUrl(secExtUrl.opSearchMenusUrl, { nodeName: '', type: '25' }),
      logoImg: require('./../../assets/logo/amos-logo.png'),
      defaultLink: '/main',
      loginLink: '/login'
    };
  }

  getSysToolProps = () => {
    return {
      userPic: require('./../../assets/user/normal.png'),
      loginOutUrl: SecurityUrl.loginOutUrl,
      userInfoLink: '/main/securityConfig',
      extraTools: this.renderExtraTools(),
      externalSub: this.renderExtraSub(),
      userExtra: true
    };
  }

  clickTestMenu = () => {

  }

  renderExtraTools = () => {
    return [
      <MenuItem key="in" onClick={this.clickTestMenu}>+</MenuItem>,
      <MenuItem key="out" onClick={this.clickTestMenu}>-</MenuItem>
    ];
  }

  renderExtraSub = () => {
    return [
      <div key="extra-1" className="amos-dropnav-item extra-temp-style"><a href="test" target="_blank">test</a></div>
    ];
  }

  render() {
    const frameConfig = this.getFrameConfig();
    const sysToolPorps = this.getSysToolProps();
    const { siderMenusList, selectedSubMenuKey } = this.state;
    return (
      <MainFrame
        {...frameConfig}
        onMenuLoadCompleted={this.onOpenDefaultPage}
        sysToolPorps={sysToolPorps}
        siderMenusList={siderMenusList}
        selectedSubMenuKey={selectedSubMenuKey}
        {...this.props}
      />
    );
  }
}

RootView.propTypes = {

};

export default RootView;
