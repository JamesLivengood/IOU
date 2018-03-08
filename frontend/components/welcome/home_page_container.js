import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import HomePage from './home_page';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
