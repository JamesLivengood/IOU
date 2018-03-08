import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {

      return(
        <div className='login-page'>
          <div className='login-form-box'>
            <div className='login-submit-form'>
              <form onSubmit = { this.handleSubmit }>
                <label className='login-email-label'>
                  <input placeholder='Email address' type='text' name='email' value = {this.state.email} onChange = { this.handleChange }/>
                </label>
                <label className='login-password-label'>
                  <input placeholder='Password' type='password' name='password' value = {this.state.password} onChange = { this.handleChange }/>
                </label>
                <button className="login-submit-button">Log in to IOU</button>
              </form>
            </div>
          </div>
       </div>
      );
  }
}


export default LoginForm;
