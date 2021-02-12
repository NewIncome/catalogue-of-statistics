/* eslint-disable no-case-declarations */
import { FILTER_ITEMS } from '../actions/types';

const filterItemsReducer = (state = null, action) => {
  switch (action.type) {
    case FILTER_ITEMS:
      const { items } = action.payload;
      const [fltr, value] = action.payload.filter.split(',');

      return items.filter(item => item[fltr] === value);
    default:
      return state;
  }
};

export default filterItemsReducer;
