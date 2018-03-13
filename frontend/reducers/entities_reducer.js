import bills from './bill_reducer';
import users from './users_reducer';
import { combineReducers } from 'redux';

export default combineReducers({bills, users});
