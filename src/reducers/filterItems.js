import { FILTER_ITEMS } from '../actions/types';

const filterItemsReducer = (state = '', action) => {
  const [fltr, value] = action.payload.split(',');

  switch (action.type) {
    case FILTER_ITEMS:
      console.log('FILTER');
      console.log(action.payload);
      console.log(action.payload.items.filter(item => item[fltr] === value));
      return action.payload.items.filter(item => item[fltr] === value);
    default:
      return state;
  }
};

export default filterItemsReducer;
