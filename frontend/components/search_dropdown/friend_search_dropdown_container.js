import { connect } from 'react-redux';
import { selectUserResults} from '../../reducers/selectors';
import { clearSearch } from '../../actions/ui_actions';
import SearchDropdown from './search_dropdown';
import {addFriendship} from '../../actions/friendship_actions';


const mapStateToProps = state => ({
  userResults: selectUserResults(state),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch()),
  dropdownAction: (friendship) => dispatch(addFriendship(friendship)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDropdown);
