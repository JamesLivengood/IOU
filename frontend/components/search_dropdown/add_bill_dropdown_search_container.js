import { connect } from 'react-redux';
import { selectUserResults} from '../../reducers/selectors';
import { clearSearch } from '../../actions/ui_actions';
import SearchDropdown from './search_dropdown';


const mapStateToProps = state => ({
  userResults: selectUserResults(state),
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch()),

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDropdown);
