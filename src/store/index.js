/**
 * 系统store
 * @author fe-tiangonglei
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
// 导入中间件
import promiseMiddleware from 'amos-processor/lib/middleware/promiseMiddleware';
import amosFetchMiddleware from 'amos-processor/lib/middleware/amosFetchMiddleware';

// 已经合并多个reducers
import rootReducers from './../model/reducers';

/**
 * 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
 * 基本使用
 */
export const store = createStore(rootReducers);

/**
 * dev store 结合 redux-devtools-extension,需要浏览器支持，添加redux-devtools插件即可
 * @param {object} initialState
 */
export const configureStoreWithDev = (initialState) => {

  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware({ promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR'] }),
      amosFetchMiddleware(),
      createLogger()
    )
  );

  const store = createStore(rootReducers, initialState, enhancer);
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../model/reducers', () => {
  //     const nextRootReducer = require('../model/reducers');
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  return store;
};

// 创建一个带中间件的store
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({ promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR'] }),
  amosFetchMiddleware(),
  createLogger()
)(createStore);

/**
 * prod 不开启 redux-devtool,用于prod模式下
 * @param {object} initialState
 */
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducers, initialState);
  return store;
}

