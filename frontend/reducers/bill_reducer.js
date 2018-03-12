import merge from 'lodash/merge';

import {
  RECEIVE_BILL,
} from '../actions/bill_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const billReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BILL:
      return action.bill;
    default:
      return state;
  }
};

export default billReducer;
