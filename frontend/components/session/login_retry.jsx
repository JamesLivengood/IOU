import React from 'react';
import { Link } from 'react-router-dom';

class LoginRetry extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.receiveErrors = this.receiveErrors.bind(this);
  }

  handleSubmit(e) {
// debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(e) {
// debugger
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  receiveErrors() {
    // debugger
    if (Object.values(this.props.errors).length > 0) {
      const errorsArr = Object.values(this.props.errors).map((err, idx) => <li key={idx}>{err}</li>);
      return (
        <div className='signup-form-errors'>The following errors occurred:<ul>{errorsArr}</ul></div>
      );
    }
  }

  render() {

      return(
        <div className='login-retry-page'>
          <span className='login-retry-error'>Whoops! We couldn't find an account for that email address and password. Maybe you've forgotten your password?</span>
            <div className='not-header-container'>
              <Link to='/'>
                <img className='signup-page-logo' src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/logo-d23d9f9f3a93162ac760371c8e22fea7e14a9d8491b477e7925e551b14172ada.png"/>
              </Link>
              <div className='signup-form-box'>
                <h3 className='signup-introduce'>Welcome to IOU</h3>
                <div className='signup-submit-form'>
                  <form onSubmit = { this.handleSubmit }>
                    <div className='signup-email-label'>Email address</div>
                      <input className='signup-email-input' type='text' name='email' value = {this.state.email} onChange = { this.handleChange }/>
                    <div className='signup-password-label'>Password</div>
                      <input className='signup-password-input' type='password' name='password' value = {this.state.password} onChange = { this.handleChange }/>
                    <button className='signup-submit-button'>Log in</button>
                  </form>
                </div>
              </div>
          </div>
       </div>
      );
  }
}


export default LoginRetry;
