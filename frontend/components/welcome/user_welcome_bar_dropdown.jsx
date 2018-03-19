import React from 'react';
// import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const UserDropdown = (props) => {
  //  
  return (
    <div className='user-dropdown-modal-div'>
      <ul className='user-dropdown-modal'>
        <Link to='/'><li>&nbsp;&nbsp;&nbsp;Dashboard</li></Link>
        <li><button onClick={props.logout}>&nbsp;&nbsp;&nbsp;Logout</button></li>
      </ul>
      <div id="popover-arrow"></div>
    </div>
  );
};

export default UserDropdown;
