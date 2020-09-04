import React, { Component } from 'react';
import TopTitle from './TopTitle';
import LeftContent from './LeftContent';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';


/**
 * 大屏主界面
 *
 * @class PlatformView
 * @extends {Component}
 */

class PlatformView extends Component {
  render() {
    return (
      <div className="platform-container">
        <TopTitle />
        <div className="platform-main-content">
          <LeftContent />
          <MiddleContent />
          <RightContent />
        </div>
      </div>
    );
  }
}

export default PlatformView;
