import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../session/login_form';
import Modal from '../modal';
import {ensureModalOff} from './home_page';

const Welcome = ({ currentUser, modal, logout, openModal, closeModal }) => {
// debugger
  return (
    currentUser ? userLoggedIn(currentUser, logout) : sessionLinks(modal, openModal, closeModal)
  );
};

const sessionLinks = (modal, openModal, closeModal) => {
// debugger
  return (
    <ul className="login-signup">
      <li className="login-button-li"><button className='login-button' onClick={()=>modalSwitch(modal, openModal, closeModal)}>Log in</button>
        <Modal/>
      </li>
      <li className="or">or</li>
      <li><button onClick={()=>ensureModalOff(closeModal, modal)}className='signup-button'><Link to="/signup">Sign up</Link></button></li>
    </ul>
  );
};

const userLoggedIn = (props, logout) => {
// debugger
	return (<hgroup className="header-group">

    <h2 className="header-name">{props.name}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>);
};

function modalSwitch(modal, openModal, closeModal) {
// debugger
  if (modal) {
    return closeModal();
  } else
    {
    return openModal('login');
  }
};

export default Welcome;
