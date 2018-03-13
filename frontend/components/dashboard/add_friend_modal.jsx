import React from 'react';

class AddFriendModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: ''};

    this.handleChange = this.handleChange.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
  }

  sendQuery() {
    this.props.searchUsers(this.state.query);
  }

  handleChange(e) {
    this.setState({query: e.currentTarget.value});
  }

  render() {
    return(
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
          <button onClick={this.props.closeModal}>Cancel</button>
          <button onClick={this.sendQuery} className='add-friend-submit'>Add Friend</button>
        </div>
      </div>
    );
  }
}

export default AddFriendModal;
