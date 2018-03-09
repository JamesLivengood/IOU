import React from 'react';
// import { logout } from '../../actions/session_actions';

const UserDropdown = (props) => {
  // debugger
  return (
    <div className='user-dropdown-modal-div'>
      <ul className='user-dropdown-modal'>
        <li>&nbsp;&nbsp;&nbsp;Your account</li>
        <li><button onClick={props.logout}>&nbsp;&nbsp;&nbsp;Logout</button></li>
      </ul>
      <div id="popover-arrow"></div>
    </div>
  );
};

export default UserDropdown;
