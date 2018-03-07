import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './session/login_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    default:
      return null;
  }
  return (
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        { component }
      </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
