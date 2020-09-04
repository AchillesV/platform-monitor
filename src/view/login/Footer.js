import React from 'react';
import PropTypes from 'prop-types';

const footerConfig = {
  // company: '©亿江(北京)科技发展有限公司',
  // technology: '技术服务热线 ：4006526500'
  company: '亿江集团 千岳（西安）信息科技有限公司',
  technology: '技术服务热线 ：029-88222272'
};

const Footer = props => {
  let { company, technology } = props;
  return (
    <div className='login-footer'>
      <span>{company}</span>
      <span>{technology}</span>
    </div>
  );
};

Footer.propTypes = {
  company: PropTypes.string,
  technology: PropTypes.string
};

Footer.defaultProps = footerConfig;

export default Footer;
