import React, { Component } from 'react';

class EmptyPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let style = {
      textAlign: 'center',
      fontSize: '25px'
    };
    return (
      <div style={style}>
        该页面暂未开发
      </div>
    );
  }
}

export default EmptyPage;
