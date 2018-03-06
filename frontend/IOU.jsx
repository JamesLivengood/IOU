import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {signup, login, logout} from './actions/session_actions';
import * as UTIL from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  const root = document.getElementById('root');
  window.UTIL = UTIL;


  ReactDOM.render(<Root store={store} />, root);
});
