import React, { Component } from 'react';
import imgUrls from '../../../consts/imgConsts';
import StatusItem  from './StatusItem';

class StatusMonitor extends Component {
  render() {
    console.log(imgUrls);
    return (
      <div className="status-monitor-container">
        <StatusItem imgUrl={imgUrls.imgUrls.temp} title="当前温度" content="28.22℃" />
        <StatusItem imgUrl={imgUrls.imgUrls.speed} title="当前速度" content="28029/分" />
      </div>
    );
  }
}

export default StatusMonitor;
