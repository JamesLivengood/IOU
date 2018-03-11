import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  modal: state.ui.modal,
  errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
