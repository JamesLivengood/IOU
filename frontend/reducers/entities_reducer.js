import bills from './bill_reducer';
import users from './users_reducer';
import friendship from './friendship_reducer'
import { combineReducers } from 'redux';

export default combineReducers({bills, users, friendship});
