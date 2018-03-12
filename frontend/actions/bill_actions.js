import * as APIUtil from '../util/bill_api_util';

export const RECEIVE_BILL = 'RECEIVE_BILL';

export const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
});

export const createBill = (bill) => {
  return (dispatch) => {
    return APIUtil.createBill(bill).then(bill =>
    dispatch(receiveBill(bill)),
    errors => (
      dispatch(receiveErrors(errors.responseJSON))));
  };
};
