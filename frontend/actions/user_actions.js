import * as APIUtil from '../util/user_api_util';

export const RECEIVE_RECENT_HISTORY = 'RECEIVE_RECENT_HISTORY';


export const fetchRecentActivity = () => dispatch => (
  APIUtil.fetchRecentActivity().then(
    (history) => dispatch(receiveRecentHistory(history))
  )
);

export const receiveRecentHistory = (history) => ({
  type: RECEIVE_RECENT_HISTORY,
  history
});
