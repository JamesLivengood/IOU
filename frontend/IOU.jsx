import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {signup, login, logout} from './actions/session_actions';
import * as UTIL from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
