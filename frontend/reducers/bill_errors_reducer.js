import {
  RECEIVE_BILL_ERRORS,
  OTHER_BILL_USER,
  CLEAR_OTHER_BILL_USER,
  RECEIVE_BILL,
  CLEAR_BILL_ERRORS,
} from '../actions/bill_actions';

export default (state = [], action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BILL_ERRORS:
      return action.err;
    case OTHER_BILL_USER:
    case CLEAR_OTHER_BILL_USER:
    case RECEIVE_BILL:
    case CLEAR_BILL_ERRORS:
      return [];
    default:
      return state;
  }
};
