import React, { Component } from 'react';
import CommonCard from './../../common/commonCard';

/**
 * 右侧图表组件
 *
 * @class LeftContent
 * @extends Component
*/

class LeftContent extends Component {
  render() {
    return (
      <div className="right-content-container">
        <div className="right-first-chart">
          <CommonCard title="时域圈Y">
            图表1
          </CommonCard>
        </div>
        <div className="right-first-chart">
          <CommonCard title="幅频圈Y">
            图表2
          </CommonCard>
        </div>
        <div className="right-first-chart">
          <CommonCard title="特征参数Y">
            图表3
          </CommonCard>
        </div>
      </div>
    );
  }
}

export default LeftContent;
