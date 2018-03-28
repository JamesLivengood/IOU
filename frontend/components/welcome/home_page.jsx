import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const HomePage = ({modal, closeModal, history}) => {
  //
  return (
    <div className='homepage-container'>
      <h2 className='homepage-header'>Boss Up On Life.</h2>
      <div className='homepage-body'><strong>Share</strong> bills and IOUs. <strong>Make sure</strong> everyone gets paid back.</div>

      <div className='img-container'>
        <img id='a' src={ window.mainLogo1 }/>
        <img id='d' src={ window.mainLogo2 }/>
      </div>
      <button onClick={()=>ensureModalOff(closeModal, modal, history)} className='homepage-get-started-button'>Get started now<div className='button-small-font'>(it's free!)</div></button>
    </div>
  );
};

export const ensureModalOff = (closeModal, modal, history) => {
  //
  if (modal) {
    closeModal();
    history.push('/signup');
  } else {

    history.push('/signup');
  }
};

export default withRouter(HomePage);

// <h2 className='homepage-header'>Boss Up On Life.</h2>
// <div className='homepage-body'>Stop Letting Ur Broke Friends Get Away With Not Paying U Back.</div>
// <div className='button-even-smaller-font'>(Till We Get U Addicted Then Trick Ur Darkest Emotional Vulnerabilities Into Paying Us LMao)</div>
// <Link to="/signup"></Link>
