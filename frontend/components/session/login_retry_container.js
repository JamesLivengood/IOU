import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import LoginRetry from './login_retry';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  processForm: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRetry);
