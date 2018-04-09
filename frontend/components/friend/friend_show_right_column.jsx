import React from 'react';

class FriendShowRightColumn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      other_user:
      this.props.currentUser.friends.filter(friend => {
        if (friend.id == this.props.match.params.id) {return friend;}
      })[0],
      balance: this.props.currentUser.friend_and_balance_array.filter(info => {
        if (info.id == this.props.match.params.id) {return info;}
      })[0].balance,
    };
    this.FriendBalance = this.FriendBalance.bind(this);
    this.friendExists = this.friendExists.bind(this);
  }



  componentDidMount() {
    if (this.friendExists()){
      return this.props.fetchFriendHistory(this.props.match.params.id);
    }
  }


  componentWillReceiveProps(newProps) {
    if (this.friendExists() && newProps.match.params.id !== this.props.match.params.id){
      return this.props.fetchFriendHistory(newProps.match.params.id);
    }
    this.setState({
      other_user: newProps.currentUser.friends.filter(friend => {
      if (friend.id == newProps.match.params.id) {return friend;}
    })[0],
      balance: newProps.currentUser.friend_and_balance_array.filter(info => {
        if (info.id == newProps.match.params.id) {return info;}
      })[0].balance,
    });
  }

  friendExists() {
    if (!this.props.currentUser.friends.map(friend => friend.id).includes(parseInt(this.props.match.params.id))) {
      return false;
    } else {
      return true;
    }
  }

  FriendBalance() {
    let whoOwes = 'You are all settled up';
    let color = 'grey';
    let number = '';
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

  render() {
    return(
      <div className='friend-show-right-column'>
        <div className='your-balance'>YOUR BALANCE</div>
        <this.FriendBalance />
      </div>
    );
  }

}

export default FriendShowRightColumn;
