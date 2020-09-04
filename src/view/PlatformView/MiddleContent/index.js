import React, { Component } from 'react';
import CommonCard from './../../common/commonCard';
import StatusMonitor from './StatusMonitor';
import ModelView from './../../Demo';

/**
 * 中间图表组件
 *
 * @class LeftContent
 * @extends Component
*/

class LeftContent extends Component {
  render() {
    return (
      <div className="middle-content-container">
        <StatusMonitor />
        <div className="middle-first-chart">
          <CommonCard title="智能轴承，引领时代">
            <ModelView />
          </CommonCard>
        </div>
        <div className="middle-second-chart">
          <CommonCard title="标题">
            图表2
          </CommonCard>
        </div>
      </div>
    );
  }
}

export default LeftContent;
