import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component{
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
        <div className='signup-page'>
          <Link to='/'>
            <img className='signup-page-logo' src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/logo-d23d9f9f3a93162ac760371c8e22fea7e14a9d8491b477e7925e551b14172ada.png"/>
          </Link>
          <div className='signup-form-box'>
            <h3 className='signup-introduce'>INTRODUCE YOURSELF</h3>
            <div className='signup-submit-form'>
              <form onSubmit = { this.handleSubmit }>
                <label className='signup-hi'>Hi there! My name is
                  <input type='text' name='name' value = {this.state.name} onChange = { this.handleChange }/>
                </label>
                <label className='signup-email-label'>Here’s my email address:
                  <input type='text' name='email' value = {this.state.email} onChange = { this.handleChange }/>
                </label>
                <label className='signup-password-label'>And here’s my password:
                  <input type='text' name='password' value = {this.state.password} onChange = { this.handleChange }/>
                </label>
                <button >Sign me up!</button>
              </form>
            </div>
          </div>
       </div>
      );
  }
}


export default SignupForm;
