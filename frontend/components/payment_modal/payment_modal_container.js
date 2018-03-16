import { connect } from 'react-redux';
import { createPayment } from '../../actions/payment_actions';
import { closeModal } from '../../actions/modal_actions';
import PaymentModal from './payment_modal';
import { fetchFriendHistory } from '../../actions/friendship_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.sessionErrors,
  bill: state.entities.bills.bill,
  otherUser: state.entities.bills.other_user,
});

const mapDispatchToProps = dispatch => ({
  createPayment: (bill) => dispatch(createPayment(bill)),
  closeModal: () => dispatch(closeModal()),
  fetchFriendHistory: (id) => dispatch(fetchFriendHistory(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentModal);
