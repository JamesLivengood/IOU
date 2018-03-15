import React from 'react';
import { Link } from 'react-router-dom';

class AllFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='friends-menu-div'>
        <div className='friends-menu-header'><h3>FRIENDS</h3><button onClick={this.props.openModal}><i className='fa fa-plus'/>add</button></div>
        <ul>
          {this.props.currentUser.friends.map((friend, idx) => <Link to={`/friend/${friend.id}`} key={idx}><li><i className='fa fa-user'/>{friend.name}</li></Link>)}
        </ul>
      </div>
    );
  }

}

export default AllFriends;