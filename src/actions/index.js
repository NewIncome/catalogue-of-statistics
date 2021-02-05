import {
  SET_API_STATUS,
  ADD_QUERY,
  ADD_ITEMS,
  UPDATE_FILTER,
  FILTERED_ITEMS,
} from './types';

const setAPIstatus = respAPI => ({
  type: SET_API_STATUS,
  payload: respAPI,
});

const addQuery = query => ({
  type: ADD_QUERY,
  payload: query,
});

const addItems = items => ({
  type: ADD_ITEMS,
  payload: items,
});

const updateFilter = filter => ({
  type: UPDATE_FILTER,
  payload: filter,
});

const filteredItems = itemsFiltered => ({
  type: FILTERED_ITEMS,
  payload: itemsFiltered,
});

export {
  setAPIstatus, addQuery, addItems, updateFilter, filteredItems,
};
