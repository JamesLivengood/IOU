import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import AllFriends from './all_friends';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('addFriend')),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFriends);
