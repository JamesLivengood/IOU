import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LeftColumn from './left_column';
import {openChart, openList} from '../../actions/chart_actions.js';

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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftColumn);
