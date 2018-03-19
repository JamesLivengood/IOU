import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';

export const searchUsers = (query) => dispatch => (
  APIUtil.searchUsers(query).then(
    (users) => dispatch(receiveSearchedUsers(users))
  )
);

export const receiveSearchedUsers = (users) => ({
  type: RECEIVE_SEARCHED_USERS,
  users
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => {
  //  
  return (dispatch) => {
    return APIUtil.signup(user).then(user =>
    dispatch(receiveCurrentUser(user)),
    errors => (
    dispatch(receiveErrors(errors.responseJSON))));
  };
};


// export const signup = user => dispatch => (
//   APIUtil.signup(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))),
    errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const clearSessionErrors = () => (
  {type: CLEAR_SESSION_ERRORS}
);
