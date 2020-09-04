import {
  Company,
  Department,
  Menu,
  Role,
  SystemDic,
  User
} from 'amos-security/lib';
import Login from './../view/login';
// import RootView from './../view/mainframe';
import RootView from './../view/mainframe/RootFrame2';
import Config from './../view/config';
import EmptyPage from './../view/common/page/EmptyPage';
import UserInfo from './../view/userInfo';

const Routes = {
  main: RootView,
  company: Company,
  department: Department,
  menu: Menu,
  role: Role,
  systemdic: SystemDic,
  user: User,
  config: Config
};

const pageCompontent = (key) => {
  return Routes[key] || EmptyPage;
};

export {
  Login,
  RootView,
  UserInfo
};

export default pageCompontent;
