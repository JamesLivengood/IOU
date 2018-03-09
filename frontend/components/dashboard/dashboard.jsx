import React from 'react';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="dashboard-big-container">
        <div className="dashboard-container">
          <div className="left-column"></div>
          <div className="center-column">
            <div className="center-column-header">
              <div className="center-column-header-top">
                <h2 className='dashboard-title'>Dashboard</h2>
                <div className='top-dash-buttons'>
                  <button className='signup-button'>Add a bill</button>
                  <button className='login-button'>Settle up</button>
                </div>
              </div>
              <div className="header-bottom-balances">
                <div className="total-balance">
                  <div className='balance-bar-items'>total balance</div>
                  <div className='user-balance-number'>${this.props.currentUser.current_user_balance}</div>
                </div>
                <div className="you-owe">
                  <div className='balance-bar-items'>you owe</div>
                  <div className='you-owe-number'>300</div>
                </div>
                <div className="you-are-owed">
                  <div className='balance-bar-items'>you are owed</div>
                  <div className='you-are-owed-number'>700</div>
                </div>
              </div>
            </div>
          </div>
          <div className='right-column'></div>
        </div>
      </div>
    );
  }

}

export default Dashboard;
