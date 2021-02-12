import { combineReducers } from 'redux';
import queryReducer from './query';
import statusReducer from './status';
import itemsReducer from './items';
import filterReducer from './filter';
import filterItemsReducer from './filterItems';

export default combineReducers({
  query: queryReducer,
  status: statusReducer,
  items: itemsReducer,
  filter: filterReducer,
  filteredItems: filterItemsReducer,
});
