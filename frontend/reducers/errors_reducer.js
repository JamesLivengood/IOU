import sessionErrors from './session_errors_reducer';
import billErrors from './bill_errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({sessionErrors, billErrors});
