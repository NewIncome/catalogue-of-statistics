import {
  SET_API_STATUS,
  ADD_QUERY,
  ADD_ITEMS,
  UPDATE_FILTER,
  FILTER_ITEMS,
} from './types';

const addQuery = query => ({
  type: ADD_QUERY,
  payload: query,
});

const setAPIstatus = respAPI => ({
  type: SET_API_STATUS,
  payload: respAPI,
});

const addItems = items => ({
  type: ADD_ITEMS,
  items,
});

const updateFilter = filter => ({
  type: UPDATE_FILTER,
  payload: filter,
});

const filterItems = qNtoFilter => ({
  type: FILTER_ITEMS,
  payload: qNtoFilter,
});

export {
  addQuery, setAPIstatus, addItems, updateFilter, filterItems,
};
