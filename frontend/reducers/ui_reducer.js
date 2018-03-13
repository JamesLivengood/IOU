import { combineReducers } from 'redux';
import modal from './modal_reducer';
import chart from './chart_reducer';

export default combineReducers({
  modal,
  chart
});
