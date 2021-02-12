import { ADD_ITEMS } from '../actions/types';
import { items as defaultItems } from '../utils';

const itemsReducer = (state = defaultItems, action) => {
  console.log('itemsREDUCER Action');
  console.log(action);
  console.log(action.payload);
  switch (action.type) {
    case ADD_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default itemsReducer;
