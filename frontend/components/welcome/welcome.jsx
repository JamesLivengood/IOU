import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../session/login_form';
import Modal from '../modal';
import {ensureModalOff} from './home_page';
import { withRouter } from 'react-router-dom';

const Welcome = ({ currentUser, modal, logout, openModal, closeModal, history }) => {
//  
  return (
    currentUser ? userLoggedIn(currentUser, openModal, logout) : sessionLinks(modal, openModal, closeModal, history)
  );
};

const sessionLinks = (modal, openModal, closeModal, history) => {
//  
  return (
    <ul className="login-signup">
      <li className="login-button-li"><button className='login-button' onClick={()=>modalSwitch(modal, openModal, closeModal)}>Log in</button>
        <Modal/>
      </li>
      <li className="or">or</li>
      <li><button onClick={()=>ensureModalOff(closeModal, modal, history)}className='signup-button'><Link to="/signup">Sign up</Link></button></li>
    </ul>
  );
};

const userLoggedIn = (props, openModal, logout) => {
  //  
  let toggleObj = {};
  toggleObj['toggle'] = "hidden-user-dropdown";
//  
	return (<hgroup className="header-group">
    <div className="user-button-div">
      <button className="user-dropdown-button" onClick={()=>openModal('userDropdown')}>
        <img src='https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/avatars/50-31b0bb2f5aec77f11d60a1dc3fa14c23a958fed79261b32e94a73e9c27473ebb.png'/>
        <span>{props.name}</span>
        <div className='caret'>▼</div>
      </button>
      <Modal logout={logout}/>
    </div>
	</hgroup>);
};

function modalSwitch(modal, openModal, closeModal) {
//  
  if (modal) {
    return closeModal();
  } else
    {
    return openModal('login');
  }
};

export default withRouter(Welcome);
