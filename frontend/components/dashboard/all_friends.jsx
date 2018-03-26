import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class AllFriends extends React.Component {
  constructor(props) {
    super(props);
    this.AllFriendListItem = this.AllFriendListItem.bind(this);
  }

  AllFriendListItem({friend, idx}) {
     let selected = '';
     if (friend.id == this.props.selectedFriendId){
        selected = 'all-friend-selected-sidebar-item';
      }
     return (
      <Link to={`/friend/${friend.id}`} key={idx}><li id={selected}><i className='fa fa-user'/>{friend.name}</li></Link>
    );
  }

  render() {
    let selected = '';
    if (this.props.location.pathname === '/dashboard') {
      selected = 'selected';
    }
    return(
      <div className='friends-menu-div'>
        <div className={`friend-menu-dashboard-button`} id={selected}><Link to='/'>Dashboard</Link></div>
        <div className='friends-menu-header'><h3>FRIENDS</h3><button onClick={this.props.openModal}><i className='fa fa-plus'/>add</button></div>
        <ul>
          {this.props.currentUser.friends.map((friend, idx) => (<this.AllFriendListItem friend={friend} idx={idx}/>))}
        </ul>
      </div>
    );
  }

}

export default withRouter(AllFriends);
