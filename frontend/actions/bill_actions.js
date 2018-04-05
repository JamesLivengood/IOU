import * as APIUtil from '../util/bill_api_util';
import { receiveCurrentUser } from './session_actions';
export const OTHER_BILL_USER = 'OTHER_BILL_USER';
export const CLEAR_OTHER_BILL_USER = 'CLEAR_OTHER_BILL_USER';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const RECEIVE_BILL_ERRORS = 'RECEIVE_BILL_ERRORS';

export const fetchBill = (id) => (
  dispatch => (APIUtil.fetchBill(id).then(bill=>dispatch({type:RECEIVE_BILL, bill})))
);

export const createBill = (bill) => {
  return (dispatch) => {
    debugger
    return APIUtil.createBill(bill).then(user =>
    dispatch(receiveCurrentUser(user)),
    errors => (
      dispatch(receiveErrors(errors.responseJSON))));
  };
};

export const otherBillUser = (user) => (
  { type: OTHER_BILL_USER,
    user }
);

export const clearOtherBillUser = () => (
  {type: CLEAR_OTHER_BILL_USER}
);

export const receiveErrors = (err) => (
  {type: RECEIVE_BILL_ERRORS, err}
);
