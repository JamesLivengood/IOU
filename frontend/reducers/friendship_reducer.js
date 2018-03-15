import merge from 'lodash/merge';

import {
  RECEIVE_FRIENDSHIP,
} from '../actions/friendship_actions';


const friendReducer = (state = {friendHistory: []}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FRIENDSHIP:
      return action.friendHistory;
    default:
      return state;
  }
};

export default friendReducer;
