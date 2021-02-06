import { UPDATE_FILTER } from '../actions/types';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
