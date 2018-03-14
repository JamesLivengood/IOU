import React from 'react';
import { Link } from 'react-router-dom';

class SearchDropdown extends React.Component {

  constructor(props) {
    super(props);
    // debugger
  }

  componentWillReceiveProps({userResults}) {
    // debugger
    if (this.props.userResults.length === 0 && userResults.length > 0) {
      window.addEventListener('click', this.props.clearSearch, {once: true} );
    } else if (userResults.length > 0 === 0 ) {
      return this.props.clearSearch();
    }
  }

  render() {
    const userResults = this.props.userResults.map((user, idx) => (
      <button className='bill-dropdown-button'
        onClick={()=>(this.props.otherBillUser(user), this.props.clearSearch())}
        key={ idx }>
        <li className='bill-dropdown-item'>
          <img src='https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/avatars/50-31b0bb2f5aec77f11d60a1dc3fa14c23a958fed79261b32e94a73e9c27473ebb.png'/>
          <div>{user.name}</div>
          </li>
    </button>
    ));

    const hidden = (this.props.userResults.length === 0) ? '-hidden' : '';

    return (
      <ul className={ `bill-search-dropdown${hidden}` }>
        { userResults }
      </ul>
    );
  }
}

export default SearchDropdown;
