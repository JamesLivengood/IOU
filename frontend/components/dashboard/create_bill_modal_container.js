import { connect } from 'react-redux';
import { createBill } from '../../actions/bill_actions';
import CreateBillModal from './create_bill_modal';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.sessionErrors,
  bills: state.entities.bills,
});

const mapDispatchToProps = dispatch => ({
  createBill: (bill) => dispatch(createBill(bill)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBillModal);
