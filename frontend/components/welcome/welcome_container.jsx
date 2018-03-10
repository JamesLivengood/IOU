import { connect } from 'react-redux';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Welcome from './welcome';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
