import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextCard from './TextCard';

class StatusItem extends Component {
  render() {
    const { imgUrl, title, content } = this.props;
    return (
      <div className="temperature-monitor">
        <div className="monitor-img"><img src={imgUrl} alt='转速' /></div>
        <div className="monitor-text">
          <div>{title}</div>
          <div><TextCard content={content} /></div>
        </div>
      </div>
    );
  }
}

StatusItem.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};


export default StatusItem;
