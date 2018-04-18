import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import WelcomeContainer from './welcome/welcome_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
// import SessionFormContainer from './session_form/session_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { HeaderRoute } from '../util/header_util';
import Modal from './modal';
import DashboardContainer from './dashboard/dashboard_container';
import HomePageContainer from './welcome/home_page_container';
import LoginRetryContainer from './session/login_retry_container';
import FriendShowContainer from './friend/friend_show_container';
import LeftColumnContainer from './dashboard/left_column_container';
import AllFriendsContainer from './dashboard/all_friends_container';
import FriendShowRightColumnContainer from './friend/friend_show_right_column_container';
import DashboardRightContainer from './dashboard/dashboard-right-container';

const Header = () => {
  return (
    <header className='nav-bar'>
      <div className='nav-bar-box'>
        <Link to="/" className="header-link">
          <span className="IOU-header">I O U - U O M E</span>
        </Link>
        <WelcomeContainer />
      </div>
    </header>
  );
};

const App = () => (
  <div className='whole-container'>
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <Route path='/' component={Header}/>
    </Switch>
    <div className="dashboard-big-container">
      <div className="dashboard-container">
          <Switch>
            <ProtectedRoute path='/' component={AllFriendsContainer}/>
          </Switch>
          <Switch>
            <AuthRoute exact path='/' component={HomePageContainer}/>
            <AuthRoute path='/login_retry' component={LoginRetryContainer}/>
            <ProtectedRoute path='/dashboard' component={DashboardContainer}/>
            <ProtectedRoute path='/friend/:id' component={FriendShowContainer}/>
          </Switch>
          <Switch>
            <ProtectedRoute path='/dashboard' component={DashboardRightColumn}/>
            <ProtectedRoute path='/friend/:id' component={FriendShowRightColumnContainer}/>
          </Switch>
      </div>
    <Switch>
      <AuthRoute exact path='/' component={Footer}/>
    </Switch>
    </div>


  </div>
);

const Footer = () => {
  return(
    <div className='footer'>
      <div>
        <span>This Full Stack Clone Created By James Livengood</span>
        <ul>
          <li><a href='https://www.github.com/jameslivengood'>Github</a> &nbsp;&nbsp;&nbsp;&nbsp;|</li>
          <li><a href='https://www.linkedin.com/in/james-livengood-091959a4/'>LinkedIn</a> &nbsp;&nbsp;&nbsp;&nbsp;|</li>
          <li><a href='https://jameslivengood.github.io'>Portfolio</a> &nbsp;&nbsp;&nbsp;&nbsp;|</li>
          <li>james.livengood@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

const DashboardRightColumn = () => {
  return(
    <div className='friend-show-right-column'>
      <h2>Recent Activity</h2>
      <DashboardRightContainer />
    </div>
  );
}

export default App;

      // <div>This Super Dumb Epic Crazy Fire Brought To You By</div>
      // <div>James Livengood</div>
      // <span>james.livengood@gmail.com</span>
      // <a href='jameslivengood.github.io'>jameslivengood.github.io</a>
      // <a href='github.com/jameslivengood'>Github</a>
