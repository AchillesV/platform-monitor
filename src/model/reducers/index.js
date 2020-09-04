/**
 * 系统所有的redux
 * @author fe-tiangonglei
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import securityReducers from 'amos-security/lib/model/rootReducers';

// 结合 react-router-redux
const rootReducers = combineReducers({
  ...securityReducers,
  routing: routerReducer
});

export default rootReducers;
