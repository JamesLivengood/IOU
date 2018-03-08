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
import HomePageContainer from './welcome/home_page_container';
// import LoginRetryContainer from './welcome/home_page_container';

const Header = () => {
  return (
    <header className='nav-bar'>
      <div className='nav-bar-box'>
        <Link to="/" className="header-link">
          <span className="IOU-header">I O U</span>
        </Link>
        <WelcomeContainer />
      </div>
    </header>
  );
};

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <Route path='/' component={Header}/>
    </Switch>

    <AuthRoute exact path='/' component={HomePageContainer}/>

  </div>
);

export default App;

// <AuthRoute exact path='/login_retry' component={LoginRetryContainer}/>




//   <AuthRoute exact path="/login" component={SessionFormContainer} />
//   <AuthRoute exact path="/signup" component={SessionFormContainer} />
//   <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
//   <Route path="/benches/:benchId" component={BenchShowContainer} />
//   <Route exact path="/" component={SearchContainer} />
//
