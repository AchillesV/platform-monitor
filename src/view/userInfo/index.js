import React, { Component } from 'react';
import { UserInfo } from 'amos-security/lib';
import { currentUser } from 'amos-security/lib/model/auth';

class UserInfoComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const user = currentUser();
    return (
      <UserInfo userId={user.userId} />
    );
  }
}

export default UserInfoComponent;
