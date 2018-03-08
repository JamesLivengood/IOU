import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <h2 className='homepage-header'>Boss Up On Life.</h2>
      <div className='homepage-body'>Stop Letting Ur Broke Friends Get Away With Not Paying U Back.</div>
      <button className='homepage-get-started-button'><Link to="/signup">Get started now<div className='button-small-font'>(it's free!)<div className='button-even-smaller-font'>(Till We Get U Addicted Then Trick Ur Darkest Emotional Vulnerabilities Into Paying Us LMao)</div></div></Link></button>
    </div>
  );
};

export default HomePage;
