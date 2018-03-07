import React from 'react';


class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render() {

      return(
        <div className='signup-welcome'>
          <div className='signup-introduce'>INTRODUCE YOURSELF</div>
          <div className='signup-hi'>Hi there! My name is</div>
          <form onSubmit = { this.handleSubmit }>
            <input type='text' name='name' value = {this.state.name} onChange = { this.handleChange }/>
            <button >Sign me up!</button>
          </form>
        </div>
      );
  }
}


export default SignupForm;
