import * as APIUtil from '../util/bill_api_util';
import { receiveCurrentUser } from './session_actions';

// export const RECEIVE_BILL = 'RECEIVE_BILL';
//
// export const receiveBill = bill => ({
//   type: RECEIVE_BILL,
//   bill
// });

export const createBill = (bill) => {
  return (dispatch) => {
    return APIUtil.createBill(bill).then(user =>
    dispatch(receiveCurrentUser(user)),
    errors => (
      dispatch(receiveErrors(errors.responseJSON))));
  };
};
