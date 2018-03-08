import { Route } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

const Header = ({component: Component, path, loggedIn, exact}) => {
  return <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
}

export const HeaderRoute = withRouter(connect(mapStateToProps, null)(Header));
