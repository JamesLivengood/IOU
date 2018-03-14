import merge from 'lodash/merge';

import {
  RECEIVE_BILL,
  OTHER_BILL_USER,
  CLEAR_OTHER_BILL_USER,
} from '../actions/bill_actions';

import { CLOSE_MODAL } from '../actions/modal_actions';

// const _nullUser = Object.freeze({
//   currentUser: null
// });

const billReducer = (state = {other_user: {}}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BILL:
      return action.bill;
    case OTHER_BILL_USER:
      return merge({}, state, {other_user: action.user});
    case CLOSE_MODAL:
      return {other_user: {}};
    default:
      return state;
  }
};

export default billReducer;
