import { ADD_ITEMS } from '../actions/types';
import { items as defaultItems } from '../utils';

const itemsReducer = (state = defaultItems, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return action.items;
    default:
      return state;
  }
};

export default itemsReducer;
