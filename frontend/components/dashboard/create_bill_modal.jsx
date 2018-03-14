import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FriendSearchDropdownContainer from '../search_dropdown/friend_search_dropdown_container';


class CreateBillModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      total_bill_amount: '',
      description: '',
      other_user_id: '',
      amount_originally_owed: '',
      owing_at_creation_user_id: '',
      owed_to_at_creation_user_id: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.errorsPresent = this.errorsPresent.bind(this);
  }

  // componentWillReceiveProps(newProps) {
    // debugger
    // if (this.errorsPresent(newProps)){
    //   this.props.history.push('/login_retry');
    //   this.props.closeModal();
    // }
  // }


  handleSubmit(e) {
// debugger
    e.preventDefault();
    const bill = Object.assign({}, this.state);
    if (bill.owed_to_at_creation_user_id === this.props.currentUser.id) {
      bill.owing_at_creation_user_id = bill.other_user_id;
    } else {
      bill.owing_at_creation_user_id = this.props.currentUser.id;
    }
    delete bill.other_user_id;
    this.props.createBill(bill);
    // this.props.closeModal();
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

  sendQuery() {
    // debugger
    if (this.state.query.length > 0) {
      return this.props.searchUsers(this.state.query);
    } else if (this.state.query.length === 0) {
      return this.props.clearSearch();
    }
  }

  handleSearchChange(e) {
    this.setState({query: e.currentTarget.value}, this.sendQuery);
  }

  render() {

      return(
        <div className='create-bill-modal-div'>
          <h2><div>Add a bill</div></h2>
          <form className='create-bill-form' onSubmit = { this.handleSubmit }>

            <label className='with-you-and'> With you and:
              <input className='create-bill-user-search'
                placeholder='Enter name'
                type='text'
                name='other_user_id'
                value={ this.state.other_user_id }
                onChange = { this.handleSearchChange }>
              </input>
            </label>

              <div className='img-description-div'>
                <img src='https://s3.amazonaws.com/splitwise/uploads/category/icon/slim/uncategorized/general.png'></img>
                <div className='description-amount-div'>
                  <input className='create-bill-description' placeholder='Enter a description' name='description' value={this.state.description} onChange={this.handleChange}></input>

                  <label className='create-bill-amount-label'>$
                    <input className='create-bill-amount' placeholder='0.00' type='text' name='total_bill_amount' value = {this.state.total_bill_amount} onChange = { this.handleChange }/>
                  </label>
                </div>
              </div>
            <div className='paid-by-div'>
              <div>Paid by </div>
                <select className='paid-by-dropdown' name='owed_to_at_creation_user_id' value={this.state.owed_to_at_creation_user_id} onChange={ this.handleChange }>
                  <option value={this.props.currentUser.id} selected="selected">Me</option>
                  <option value={this.state.other_user_id}>name</option>
                </select>
            </div>

            <div className='owe-amount-div'>
              <label> name owes:
              </label>
              <input className='owing-person-owes' placeholder='Owes' type='text' name='amount_originally_owed' value = {this.state.amount_originally_owed} onChange = { this.handleChange }/>
            </div>

            <div className='cancel-or-save-buttons-div'>
              <button className="create-bill-cancel-button" onClick={this.props.closeModal}>Cancel</button>
              <button className="create-bill-save-button" onClick={this.handleSubmit}>Save</button>
            </div>

          </form>
          <FriendSearchDropdownContainer/>
        </div>
      );
  }
}

export default withRouter(CreateBillModal);



//
//
// <input className='paid-by' name='owed_to_at_creation_user_id' value={this.state.owed_to_at_creation_user_id} onChange={ this.handleChange }>
// </input>
