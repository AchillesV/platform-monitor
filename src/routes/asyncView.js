// @author ilex.h
import React from 'react';
import AsyncLoader from 'ray-code-split';

const AsyncEmptyPage = (props) => <AsyncLoader load={import('./../view/common/page/EmptyPage')} componentProps={props} />;
const AsyncLogin = (props) => <AsyncLoader load={import('./../view/login')} componentProps={props} />;
const AsyncUserInfo = (props) => <AsyncLoader load={import('./../view/userInfo')} componentProps={props} />;
const AsyncRootView = (props) => <AsyncLoader load={import('./../view/mainframe')} componentProps={props} />;
// const AsyncRootView = (props) => <AsyncLoader load={import('./../view/mainframe/RootFrame2')} componentProps={props} />;
const AsyncCompany = (props) => <AsyncLoader load={import('amos-security/lib/view/company')} componentProps={props} />;
const AsyncDepartment = (props) => <AsyncLoader load={import('amos-security/lib/view/department')} componentProps={props} />;
const AsyncMenu = (props) => <AsyncLoader load={import('amos-security/lib/view/menu')} componentProps={props} />;
const AsyncRole = (props) => <AsyncLoader load={import('amos-security/lib/view/role')} componentProps={props} />;
const AsyncSystemDic = (props) => <AsyncLoader load={import('amos-security/lib/view/systemdic')} componentProps={props} />;
const AsyncUser = (props) => <AsyncLoader load={import('amos-security/lib/view/user')} componentProps={props} />;
const AsyncConfig = (props) => <AsyncLoader load={import('./../view/config')} componentProps={props} />;

const Routes = {
  main: AsyncRootView,
  company: AsyncCompany,
  department: AsyncDepartment,
  menu: AsyncMenu,
  role: AsyncRole,
  systemdic: AsyncSystemDic,
  user: AsyncUser,
  config: AsyncConfig
};

const pageCompontent = (key) => {
  return Routes[key] || AsyncEmptyPage;
};

export {
  AsyncLogin,
  AsyncRootView,
  AsyncUserInfo
};

export default pageCompontent;
