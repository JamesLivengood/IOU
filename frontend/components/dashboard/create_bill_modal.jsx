import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import AddBillDropdownSearchContainer from '../search_dropdown/add_bill_dropdown_search_container';


class CreateBillModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      total_bill_amount: '',
      description: '',
      other_user_id: this.props.bills.other_user.id,
      amount_originally_owed: '',
      owing_at_creation_user_id: '',
      owed_to_at_creation_user_id: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.errorsPresent = this.errorsPresent.bind(this);
    this.WhoOwes = this.WhoOwes.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    //
    this.setState({other_user_id: newProps.bills.other_user.id});
  }


  handleSubmit(e) {
    //
    e.preventDefault();
    const bill = Object.assign({}, this.state);
    if (bill.owed_to_at_creation_user_id == this.props.currentUser.id) {
      //
      bill.owing_at_creation_user_id = bill.other_user_id;
    } else {
      bill.owing_at_creation_user_id = this.props.currentUser.id;
    }
    let other_id = bill.other_user_id;
    delete bill.other_user_id;
    //
    this.props.createBill(bill).then(()=>this.props.fetchFriendHistory(other_id));
    //
    if (!this.props.currentUser.friends.map(friend => friend.id).includes(this.state.other_user_id)) {
      return this.props.addFriendship({user1_id: this.props.currentUser.id, user2_id: other_id});
    }
    // this.props.closeModal();
  }

  handleChange(e) {
    //
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  errorsPresent(props) {
    //
    if (Object.values(props.errors).length > 0) {
      return true;
    }
    return false;
  }

  sendQuery() {
    //
    if (this.state.query.length > 0) {
      return this.props.searchUsers(this.state.query);
    } else if (this.state.query.length === 0) {
      return this.props.clearSearch();
    }
  }

  handleSearchChange(e) {
    this.setState({query: e.currentTarget.value}, this.sendQuery);
  }

  WhoOwes() {
    //
    if (this.state.other_user_id) {
      if (this.state.other_user_id == this.state.owed_to_at_creation_user_id)
      { return (<div>I owe:</div>);}
      else {return (<div> {this.props.bills.other_user.name} owes:</div>);}
    } else {
      return (<div> owes:</div>);
    }
  }

  NameButtonOnTopInput() {

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
                value={ this.props.bills.other_user.name }
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
                <select className='paid-by-dropdown' name='owed_to_at_creation_user_id' onChange={ this.handleChange }>
                  <option selected value={this.props.currentUser.id}>Me</option>
                  <option value={this.state.other_user_id}>{this.props.bills.other_user.name}</option>
                </select>
            </div>

            <div className='owe-amount-div'>
              <label><this.WhoOwes/></label>
              <input className='owing-person-owes' placeholder='Owes' type='text' name='amount_originally_owed' value = {this.state.amount_originally_owed} onChange = { this.handleChange }/>
            </div>

            <div className='cancel-or-save-buttons-div'>
              <button className="create-bill-cancel-button" onClick={this.props.closeModal}>Cancel</button>
              <button className="create-bill-save-button" onClick={this.handleSubmit}>Save</button>
            </div>

          </form>
          <AddBillDropdownSearchContainer otherUserState={this.otherUserState}/>
        </div>
      );
  }
}

export default withRouter(CreateBillModal);



//
//
// <input className='paid-by' name='owed_to_at_creation_user_id' value={this.state.owed_to_at_creation_user_id} onChange={ this.handleChange }>
// </input>
