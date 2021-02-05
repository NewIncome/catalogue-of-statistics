import { ADD_ITEMS } from '../actions/types';
import { items as defaultItems } from '../utils';

const itemsReducer = (status = defaultItems, action) => {
  switch (action.types) {
    case ADD_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default itemsReducer;
