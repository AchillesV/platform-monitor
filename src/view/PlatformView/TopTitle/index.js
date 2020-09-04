import React, { Component } from 'react';
import moment from 'moment';

const timeSpan = 1000;

/**
 * 顶部标题组件
 *
 * @class TopTitle
 * @extends {Component}
 */

class TopTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: ''
    };
  }

  componentDidMount() {
    this.timer = setInterval(()=>{
      const currentTime = `${moment().format('YYYY-MM-DD HH:mm:ss')}`;
      this.setState({ currentTime });
    }, timeSpan);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="top-container">
        <div className='top-time'>{this.state.currentTime}</div>
        <div className="top-title-bg" />
      </div>
    );
  }
}

export default TopTitle;
