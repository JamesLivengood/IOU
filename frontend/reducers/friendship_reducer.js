import merge from 'lodash/merge';

import {
  RECEIVE_FRIENDSHIP,
} from '../actions/friendship_actions';


const friendReducer = (state = {history: []}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FRIENDSHIP:
      return action.history;
    default:
      return state;
  }
};

export default friendReducer;
