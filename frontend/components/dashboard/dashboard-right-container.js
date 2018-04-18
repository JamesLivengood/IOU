import { connect } from 'react-redux';
import DashboardRight from './dashboard-right';
import {fetchRecentActivity} from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchRecentActivity: () => dispatch(fetchRecentActivity()),
  // createBill: (bill) => dispatch(createBill(bill)),
  // closeModal: () => dispatch(closeModal()),
  // searchUsers: (query) => dispatch(searchUsers(query)),
  // clearSearch: () => dispatch(clearSearch()),
  // clearOtherBillUser: () => dispatch(clearOtherBillUser()),
  // addFriendship: (friendship) => dispatch(addFriendship(friendship)),
  // fetchFriendHistory: (id) => dispatch(fetchFriendHistory(id)),
  // clearBillErrors: () => dispatch(clearBillErrors()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardRight);
