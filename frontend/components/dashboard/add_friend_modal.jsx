import React from 'react';
import FriendSearchDropdownContainer from '../search_dropdown/friend_search_dropdown_container';

class AddFriendModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: ''};
    this.handleChange = this.handleChange.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
  }

  sendQuery() {
    //  
    if (this.state.query.length > 0) {
      return this.props.searchUsers(this.state.query);
    } else if (this.state.query.length === 0) {
      return this.props.clearSearch();
    }
  }

  handleChange(e) {
    this.setState({query: e.currentTarget.value}, this.sendQuery);
  }

  render() {
    return(
      <div className='add-friend-big-container'>
        <div className='add-friend-box'>
          <h2 className='add-friend-header'>Add a friend</h2>
          <label>Enter name:
            <input className='search-friend-input'
              type='text' placeholder='Enter name'
              onChange={this.handleChange}
              value={this.state.query}
              >
            </input>
          </label>
          <div className='add-friend-buttons'>
            <button onClick={this.props.closeModal} className='add-friend-cancel'>Cancel</button>
            <button onClick={this.sendQuery} className='add-friend-submit'>Add Friend</button>
          </div>
        </div>
        <FriendSearchDropdownContainer/>
      </div>
    );
  }
}

export default AddFriendModal;
