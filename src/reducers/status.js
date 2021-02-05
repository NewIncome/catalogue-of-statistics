import { SET_API_STATUS } from '../actions/types';

const statusReducer = (status = '', action) => {
  switch (action.type) {
    case SET_API_STATUS:
      return [
        ...status,
        action.payload
      ];
    default:
      return status;
  }
};

export default statusReducer;
