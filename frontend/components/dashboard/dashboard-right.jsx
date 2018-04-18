import React from 'react';

class DashboardRight extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let idx = 0;
    const liArr = [];
    while (idx < 10) {
      let li;
      if (this.props.currentUser.recent_activity[idx]) {
        if (!(this.props.currentUser.recent_activity[idx].bill_id)) {
          li = <li>bill brah</li>
        } else {
          li = <li>payment brah</li>
        }
      }
      liArr.push(li);
      idx++;
    }
    this.props.currentUser.recent_activity
    return(
      <ul className='dashboard-right-ul'>
        {liArr}
      </ul>
    );
  }

}

export default DashboardRight;
