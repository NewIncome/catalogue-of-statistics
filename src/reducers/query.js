import { ADD_QUERY } from '../actions/types';

const queryReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_QUERY:
      return action.query;
    default:
      return state;
  }
};

export default queryReducer;
