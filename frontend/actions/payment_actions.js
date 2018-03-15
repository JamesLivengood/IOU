import * as APIUtil from '../util/payment_api_util';
import { receiveCurrentUser } from './session_actions';

export const createPayment = (payment) => {
  return (dispatch) => {
    return APIUtil.createPayment(payment).then(user =>
    dispatch(receiveCurrentUser(user)),
    errors => (
      dispatch(receiveErrors(errors.responseJSON))));
  };
};
