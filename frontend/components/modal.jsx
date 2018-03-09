import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './session/login_form_container';
import UserDropdown from './welcome/user_welcome_bar_dropdown';
import { closeModal } from '../actions/modal_actions';


function Modal({modal, closeModal, logout}) {
  // debugger
  if (!modal) {
    return null;
  }
  let component;
  let backgroundOffClick;
  switch (modal) {
    case 'userDropdown':
      component = <UserDropdown logout={logout} />;
      backgroundOffClick = true;
    break;
    case 'login':
      component = <LoginFormContainer />;
      backgroundOffClick = false;
    break;
    default:
      return null;
  }
  if (backgroundOffClick){
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );} else {
      return (
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            { component }
          </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
