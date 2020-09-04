import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PluginCore extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default PluginCore;
