import React, { Component } from 'react';
import CommonCard from './../../common/commonCard';
import TimeZone from './TimeZone';
/**
 * 左侧图表组件
 *
 * @class LeftContent
 * @extends Component
*/


class LeftContent extends Component {
  render() {
    return (
      <div className="left-content-container">
        <div className="left-first-chart">
          <CommonCard title="时域图">
            <TimeZone />
          </CommonCard>
        </div>
        <div className="left-first-chart">
          <CommonCard title="幅频圈X">
            图表2
          </CommonCard>
        </div>
        <div className="left-first-chart">
          <CommonCard title="特征参数X">
            图表3
          </CommonCard>
        </div>
      </div>
    );
  }
}

export default LeftContent;
