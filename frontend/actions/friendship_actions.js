import * as APIUtil from '../util/friendship_api_util';
import { receiveCurrentUser } from './session_actions';
export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';

export const addFriendship = (friendship) => {
  // debugger
  return (dispatch) => {
    return APIUtil.addFriend(friendship).then(user =>
    dispatch(receiveCurrentUser(user)),
    errors => (
    dispatch(receiveErrors(errors.responseJSON))));
  };
};

export const fetchFriendHistory = (id) => {
  return (dispatch) => {
    return APIUtil.fetchFriendHistory(id).then(history =>
    dispatch({type: RECEIVE_FRIENDSHIP, history}));
  };
};
