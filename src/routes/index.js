// @author ilex.h
import RProgress from 'ray-progress';
import notFound from 'amos-security/lib/routes/notfound';
import redirect from 'amos-security/lib/routes/notfound/redirect';
import signUp, { signupRouters } from 'amos-security/lib/routes/signUp';
import routerFilter, { checkLogin } from 'amos-security/lib/routes/validateRouter';
import calcRoutes from './calcRoutes';
import addCustomRoutes from './customRoutes';
import pageCompontent, { RootView, Login, UserInfo } from './view';
import PlatformView from '../view/PlatformView';
import Demo from '../view/Demo';


const groups = [
  'main'
];

const injectRoutes = (menus) => {
  const { main = [] } = calcRoutes(menus, pageCompontent, groups) || {};
  const mainChilds = addCustomRoutes(main);
  const routes = [
    { path: 'login', component: Login },
    { path: 'platform', component: PlatformView },
    { path: 'demo', component: Demo },
    ...signUp,
    {
      path: 'main' ,
      component: RootView,
      // indexRoute: {
      //   component: Overview
      // },
      childRoutes: [...mainChilds, { path: 'securityConfig', component: UserInfo }]
    },
    notFound,
    redirect
  ];
  return routes;
};

const progressStart = () => {
  RProgress.start();
};

const onEnterValidate = (next, replace, callback) => {
  progressStart();
  const pathname = next.location.pathname;
  const flag = routerFilter({
    filterPath: [].concat(signupRouters, 'login', 'autologin'),
    pathname
  });
  console.log('pathname|flag', pathname, flag);
  if (!checkLogin() && flag ) {
    replace('/login');
  }
  callback();
};

const rootRoutes = (menus) => {
  return {
    path: '/',
    // onEnter: onEnterValidate,
    onChange: progressStart,
    indexRedirect: PlatformView,
    indexRoute: {
      // component: Login,
      onEnter(nextState, replace) {
        replace('/platform');
      }
    },
    childRoutes: injectRoutes(menus)
  };
};

export default rootRoutes;
