import merge from 'lodash/merge';

import {
  RECEIVE_SEARCHED_USERS,
} from '../actions/session_actions';

import {
  RECEIVE_RECENT_HISTORY,
} from '../actions/user_actions';

// import { RECEIVE_BILL } from '../actions/bill_actions';
//
// const _nullUser = Object.freeze({
//   currentUser: null
// });

const usersReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_USERS:
      return merge({}, state, action.users);
    case RECEIVE_RECENT_HISTORY:
      return merge({}, state, action.history)
    default:
      return state;
  }
};

export default usersReducer;
