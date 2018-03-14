import { connect } from 'react-redux';
import { selectUserResults} from '../../reducers/selectors';
import { clearSearch } from '../../actions/ui_actions';
import AddBillSearchDropdown from './add_bill_search_dropdown';
// import SearchDropdown from './search_dropdown';
import { otherBillUser } from '../../actions/bill_actions';

const mapStateToProps = state => ({
  userResults: selectUserResults(state),
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch()),
  otherBillUser: (user) => dispatch(otherBillUser(user)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBillSearchDropdown);
