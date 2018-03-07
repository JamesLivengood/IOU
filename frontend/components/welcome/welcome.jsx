import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <ul className="login-signup">
    <li><Link to="/login">Log in</Link></li>
    <li>or</li>
    <li><Link to="/signup">Sign up</Link></li>
  </ul>
);

const userLoggedIn = (props, logout) => {
debugger
	return (<hgroup className="header-group">

    <h2 className="header-name">{props.name}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>);
};

const Welcome = ({ currentUser, logout }) => {
// debugger
  return (
    currentUser ? userLoggedIn(currentUser, logout) : sessionLinks()
  );
};

export default Welcome;
