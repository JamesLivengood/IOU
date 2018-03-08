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
import Modal from './modal';
import HomePage from './welcome/home_page';

const App = () => (
  <div>
    <header className='nav-bar'>
      <div className='nav-bar-box'>
        <Link to="/" className="header-link">
          <span className="IOU-header">I O U</span>
        </Link>
        <WelcomeContainer />
        <Modal/>
      </div>
    </header>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
    </Switch>
  </div>
);

export default App;





//   <AuthRoute exact path="/login" component={SessionFormContainer} />
//   <AuthRoute exact path="/signup" component={SessionFormContainer} />
//   <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
//   <Route path="/benches/:benchId" component={BenchShowContainer} />
//   <Route exact path="/" component={SearchContainer} />
//
