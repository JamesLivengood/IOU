import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';
import {openChart, openList} from '../../actions/chart_actions.js';
import {fetchBill} from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  modal: state.ui.modal,
  chart: state.ui.chart,
  errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  openList: () => dispatch(openList()),
  openChart: () => dispatch(openChart()),
  fetchBill: (id) => dispatch(fetchBill(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
