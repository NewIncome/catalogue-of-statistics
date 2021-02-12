import {
  SET_API_STATUS,
  ADD_QUERY,
  ADD_ITEMS,
  UPDATE_FILTER,
  FILTER_ITEMS,
} from './types';

const addQuery = query => ({
  type: ADD_QUERY,
  query,
});

const setAPIstatus = respAPI => ({
  type: SET_API_STATUS,
  respAPI,
});

const addItems = items => ({
  type: ADD_ITEMS,
  payload: items,
});

const updateFilter = filter => ({
  type: UPDATE_FILTER,
  filter,
});

const filterItems = (filter, items, filteredItems) => ({
  type: FILTER_ITEMS,
  payload: { filter, items, filteredItems },
});

export {
  addQuery, setAPIstatus, addItems, updateFilter, filterItems,
};
