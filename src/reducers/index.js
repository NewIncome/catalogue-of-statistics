import { combineReducers } from 'redux';
import queryReducer from './query';
import statusReducer from './status';
import itemsReducer from './items';
import filterReducer from './filter';
// import filterItemsReducer from './filterItems';

export default combineReducers({
  query: queryReducer,
  status: statusReducer,
  items: itemsReducer,
  filter: filterReducer,
  // qNtoFilter: filterItemsReducer,
});

// const rootReducer = (state = {}, action: {}) => {
//   const itemsObject = state.items;

//   return {
//     query: queryReducer(state.query, action),
//     status: statusReducer(state.status, action),
//     items: itemsReducer(state.items, action),
//     filter: filterReducer(state.filter, action),
//     qNtoFilter: filterItemsReducer(state.qNtoFilter, { ...action, itemsObject }),
//   };
// };

// export default rootReducer;
