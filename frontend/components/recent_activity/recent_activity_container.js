import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { otherBillUser } from '../../actions/bill_actions';
import { fetchRecentActivity } from '../../actions/user_actions';
import RecentActivity from './recent_activity';
import { fetchBill } from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  modal: state.ui.modal,
  errors: state.errors.sessionErrors,
  history: state.entities.users.history,
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  otherBillUser: (user) => dispatch(otherBillUser(user)),
  fetchBill: (id) => dispatch(fetchBill(id)),
  fetchRecentActivity: () => dispatch(fetchRecentActivity()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentActivity);
