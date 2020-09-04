import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextCard extends Component {
  render() {
    const { content } = this.props;
    const text = content.split('');
    return (
      <div className="text-container">
        {text.map((item,index) => {
          return <div className="text-bg" key={index}><span>{item}</span></div>;
        })}
      </div>
    );
  }
}

TextCard.propTypes = {
  content: PropTypes.string
};

export default TextCard;
