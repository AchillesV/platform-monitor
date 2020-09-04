import React, { Component } from 'react';
import ReactEcharts from 'amos-viz/lib/echarts';

/**
 * 时域图
 * @class TimeZone
 * @extends Component
 */

const dataSource = [
  [120, 132, 101, 134, 90, 230, 0],
  [120, 132, 101, 134, 90, 230, 20],
  [120, 132, 101, 134, 90, 230, 40],
  [120, 132, 101, 134, 90, 230, 80],
  [120, 132, 101, 134, 90, 230, 100],
  [120, 132, 101, 134, 90, 230, 110],
  [120, 132, 101, 134, 90, 230, 130],
  [120, 132, 101, 134, 90, 230, 150],
  [120, 132, 101, 134, 90, 230, 170],
  [120, 132, 101, 134, 90, 230, 210]
]

class TimeZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [120, 132, 101, 134, 90, 230, 210],
      option: {
        title: { text: '堆叠区域图' },
        tooltip: { trigger: 'axis' },
        legend: { data: ['水果产量', '大米产量', '其它产品'] },
        toolbox: { feature: { saveAsImage: {} } },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [{ type: 'value' }],
        series: [
          {
            name: '水果产量',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      }
    };
  }

  componentDidMount() {
    let index = 0;
    this.timer = setInterval(() => {
      this.setState({ data: dataSource[index] }, () => {
        this.getOptions();
      });
      index = index + 1;
      index === dataSource.length ? /* clearInterval(this.timer) */ index = 0 : null;
    }, 2000);
  }

  getOptions = () => {
    const { data } = this.state;
    const option = {
      title: { text: '堆叠区域图' },
      tooltip: { trigger: 'axis' },
      legend: { data: ['水果产量', '大米产量', '其它产品'] },
      toolbox: { feature: { saveAsImage: {} } },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [{ type: 'value' }],
      series: [
        {
          name: '水果产量',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data
        }
      ]
    };
    this.setState({ option });

  };
  render() {
    //const option = this.getOptions();
    return (
      <ReactEcharts option={this.state.option} style={{ height: '100%', width: '100%' }} />
    );
  }
}

export default TimeZone;
