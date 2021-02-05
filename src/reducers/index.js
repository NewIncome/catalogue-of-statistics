import { combineReducers } from 'redux';
import queryReducer from './query';
import statusReducer from './status';
import itemsReducer from './items';

export default combineReducers({
  query: queryReducer,
  status: statusReducer,
  items: itemsReducer,
});
