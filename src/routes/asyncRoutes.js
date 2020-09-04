// @author ilex.h
import React from 'react';
import { Store } from 'amos-tool';
import RProgress from 'ray-progress';
import notFound from 'amos-security/lib/routes/notfound';
import redirect from 'amos-security/lib/routes/notfound/redirect';
import SysConsts from 'amos-security/lib/consts';
import calcRoutes from './calcRoutes';
import addCustomRoutes from './customRoutes';
import pageCompontent, { AsyncRootView, AsyncLogin, AsyncUserInfo } from './asyncView';

const apiKey = SysConsts.api_key;

const progressStart = () => {
  RProgress.start();
};

const injectRoutes = menus => {
  const mainChilds = addCustomRoutes(calcRoutes(menus, pageCompontent));
  const routes = [
    { path: 'login', component: AsyncLogin },
    {
      path: 'main',
      component: AsyncRootView,
      childRoutes: [...mainChilds, { path: 'securityConfig', component: AsyncUserInfo }]
    },
    notFound,
    redirect
  ];
  return routes;
};

const onEnterValidate = (next, replace, callback) => {
  progressStart();
  if (!Store.getCookieByName(apiKey) && next.location.pathname !== '/login') {
    replace('/login');
  }
  callback();
};

const rootRoutes = menus => {
  return {
    path: '/',
    onEnter: onEnterValidate,
    onChange: progressStart,
    indexRedirect: AsyncLogin,
    indexRoute: {
      onEnter(nextState, replace) {
        replace('/login');
      }
    },
    childRoutes: injectRoutes(menus)
  };
};

export default rootRoutes;
