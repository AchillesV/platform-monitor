import React, { Component } from 'react';
import Login from 'amos-security/lib/view/login/LoginWithSignup';
import Footer from './Footer';

class LoginComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const desict = (
      <div className="amos-slogan">
        <p>面向行业的个性化物联平台</p>
        <p>提供端到端的闭环物联服务</p>
      </div>
    );
    return (
      <Login
        logo="/src/assets/logo/yee-logo.png"
        title="YeeAMOS物联网云平台"
        desicOne={null}
        desictTow={desict}
        footer={<Footer />}
      />
    );
  }
}

LoginComponent.propTypes = {

};

export default LoginComponent;
