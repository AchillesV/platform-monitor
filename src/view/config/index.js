import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Config extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        { this.props.children }
      </div>
    );
  }
}

Config.propTypes = {

};

export default Config;
