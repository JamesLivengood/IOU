import React from 'react';
import CreateBillModalContainer from '../dashboard/create_bill_modal_container';
import AllFriendsContainer from '../dashboard/all_friends_container';

class FriendShow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      other_user:
      this.props.currentUser.friends.filter(friend => {
        if (friend.id == this.props.match.params.id) {return friend;}
      })[0],
      balance: this.props.currentUser.friend_and_balance_array.filter(info => {
        if (info.id == this.props.match.params.id) {return info;}
      })[0].balance
    };
    // debugger
    this.friendExists = this.friendExists.bind(this);
    this.FriendBalance = this.FriendBalance.bind(this);
    this.openModalFilledIn = this.openModalFilledIn.bind(this);
  }

  friendExists() {
    if (!this.props.currentUser.friends.map(friend => friend.id).includes(parseInt(this.props.match.params.id))) {
      // debugger
      return false;
    } else {
      return true;
    }
  }

  componentDidMount() {
    this.props.closeModal();
    // return this.props.openModal('dashboardList');
  }


  FriendBalance() {
    let whoOwes = 'You are all settled up';
    let color = 'grey';
    let number = '';
    // debugger
    if (this.state.balance > 0) {
      whoOwes = `${this.state.other_user.name} owes you`;
      color = 'green';
      number = '$' + this.state.balance.toFixed(2);
    } else if (this.state.balance < 0) {
      whoOwes = `You owe ${this.state.other_user.name}`;
      color = 'orange';
      number = '$' + this.state.balance.toFixed(2).slice(1);
    }
    return (
      <div id={`${color}`}>
        <div className='friend-who-owes'>{whoOwes}</div>
        <div className='friend-balance-number'>{number}</div>
      </div>
    );
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      other_user: this.props.currentUser.friends.filter(friend => {
      if (friend.id == this.props.match.params.id) {return friend;}
    })[0],
      balance: this.props.currentUser.friend_and_balance_array.filter(info => {
        if (info.id == this.props.match.params.id) {return info;}
      })[0].balance,
    });
  }

  openModalFilledIn() {
    
    this.props.openModal('createBill');
  }

  render() {
    // debugger
    if (!this.friendExists()) {
      return (
        <div className='friend-not-found'>Friend not found!</div>
      );
    } else {
    return(
      <div className="dashboard-big-container">
        <div className="dashboard-container">
          <div className="left-column">
            <AllFriendsContainer/>
          </div>
          <div className="center-column">
            <div className="center-column-header">
              <div className="center-column-header-top">
                <h2 className='dashboard-title'>{this.state.other_user.name}</h2>
                <div className='top-dash-buttons'>
                  <button className='signup-button' onClick={this.openModalFilledIn}>Add a bill</button>
                </div>
              </div>

            </div>
          </div>
          <div className='friend-show-right-column'>
            <div className='your-balance'>YOUR BALANCE</div>
            <this.FriendBalance />
          </div>
        </div>
      </div>
    );}
  }

}

export default FriendShow;
