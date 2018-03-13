import { merge } from 'lodash';

import { RECEIVE_SEARCHED_USERS } from '../actions/session_actions';
import { CLEAR_SEARCH } from '../actions/ui_actions.js';

const searchResultsReducer = (state = { userIds: [] }, action) => {
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_USERS:
      return merge({}, state, { userIds: Object.keys(action.users) });
    case CLEAR_SEARCH:
      return defaultState;
    default:
      return state;
  }
};

export default searchResultsReducer;
