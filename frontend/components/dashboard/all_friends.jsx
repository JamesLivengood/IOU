import React from 'react';

class AllFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='friends-menu-div'>
        <div className='friends-menu-header'><h3>FRIENDS</h3><button onClick={this.props.openModal}><i className='fa fa-plus'/>add</button></div>
        <ul>
          {this.props.currentUser.friends.map((friend, idx) => <li key={idx}><i className='fa fa-user'/>{friend.name}</li>)}
        </ul>
      </div>
    );
  }

}

export default AllFriends;
