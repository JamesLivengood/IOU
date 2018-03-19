import merge from 'lodash/merge';

import {
  RECEIVE_SEARCHED_USERS
} from '../actions/session_actions';

// import { RECEIVE_BILL } from '../actions/bill_actions';
//
// const _nullUser = Object.freeze({
//   currentUser: null
// });

const usersReducer = (state = {}, action) => {
  //  
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
