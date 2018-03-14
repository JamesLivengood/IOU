import * as APIUtil from '../util/friendship_api_util';
import { receiveCurrentUser } from './session_actions';

// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

//
// export const receiveCurrentUser = currentUser => ({
//   type: ADD_FRIEND,
//   currentUser
// });



export const addFriendship = (friendship) => {
  // debugger
  return (dispatch) => {
    return APIUtil.addFriend(friendship).then(user =>
    dispatch(receiveCurrentUser(user)),
    errors => (
    dispatch(receiveErrors(errors.responseJSON))));
  };
};
