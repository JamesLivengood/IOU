import React from 'react';
import { withRouter, Link } from 'react-router-dom';


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
    this.errorsPresent = this.errorsPresent.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // debugger
    if (this.errorsPresent(newProps)){
      this.props.history.push('/login_retry');
      this.props.closeModal();
    }
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

  errorsPresent(props) {
    // debugger
    if (Object.values(props.errors).length > 0) {
      return true;
    }
    return false;
  }

  render() {

      return(
        <div className='login-modal-div'>
          <div className='login-page'>
            <div className='login-form-box'>
              <div className='login-form-container'>
                <form className='login-form' onSubmit = { this.handleSubmit }>
                    <input className='login-modal-email-input' placeholder='Email address' type='text' name='email' value = {this.state.email} onChange = { this.handleChange }/>
                    <input className='login-modal-password-input' placeholder='Password' type='password' name='password' value = {this.state.password} onChange = { this.handleChange }/>
                    <button className="login-submit-button">Log in to IOU</button>
                </form>
              </div>
            </div>
         </div>
         <button onClick={()=>this.props.processForm({email: 'jamie_lannister@gmail.com', password: 'swagger'})} className='jamie-lannister-button'>Demo Login to Jamie Lannister's Top Secret Account</button>
        </div>
      );
  }
}


export default withRouter(LoginForm);
