import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class CommonCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;
    return (
      <div className="card-container">
        <div className="card-title-bg">{title}</div>
        <div className="card-content">{children}</div>
      </div>
    );
  }
}

CommonCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default CommonCard;
