// import React from 'react';
// import { Link } from 'react-router-dom';
// import LoginForm from '../session/login_form';
// import Modal from '../modal';
// import {ensureModalOff} from './home_page';
//
// const Welcome = ({ currentUser, modal, logout, openModal, closeModal }) => {
// // debugger
//   return (
//     currentUser ? userLoggedIn(currentUser, logout) : sessionLinks(modal, openModal, closeModal)
//   );
// };
//
// const sessionLinks = (modal, openModal, closeModal) => {
// // debugger
//   return (
//     <ul className="login-signup">
//       <li className="login-button-li"><button className='login-button' onClick={()=>modalSwitch(modal, openModal, closeModal)}>Log in</button>
//         <Modal/>
//       </li>
//       <li className="or">or</li>
//       <li><button onClick={()=>ensureModalOff(closeModal, modal)}className='signup-button'><Link to="/signup">Sign up</Link></button></li>
//     </ul>
//   );
// };
//
// const userLoggedIn = (props, logout) => {
//   let toggleObj = {};
//   toggleObj['toggle'] = "hidden-user-dropdown";
// // debugger
// 	return (<hgroup className="header-group">
//     <button className="user-dropdown-button" onClick={(e) => toggleObj['toggle'] = userDropDownToggle(toggleObj['toggle'])}>
//       <img src='https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/avatars/50-31b0bb2f5aec77f11d60a1dc3fa14c23a958fed79261b32e94a73e9c27473ebb.png'/>
//       <span>{props.name}</span>
//       <div className='caret'>▼</div>
//       {() => userDropDown(toggleObj['toggle'])}
//     </button>
// 	</hgroup>);
// };
//
// const userDropDown = (toggle) => {
//
//   return (
//     <ul className={`${toggle}`}>
//       <li>Your account</li>
//       <li>Logout</li>
//     </ul>
//   );
// };
//
// const userDropDownToggle = (className) => {
//   debugger
//   if (className === "hidden-user-dropdown") {
//     return "show-user-dropdown"
//   } else {
//     return "hidden-user-dropdown"
//   }
// }
//
// function modalSwitch(modal, openModal, closeModal) {
// // debugger
//   if (modal) {
//     return closeModal();
//   } else
//     {
//     return openModal('login');
//   }
// };
//
// export default Welcome;
