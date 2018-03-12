import React from 'react';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.TotalBalance = this.TotalBalance.bind(this);
    this.youOwe = this.youOwe.bind(this);
    this.youAreOwed = this.youAreOwed.bind(this);
  }

  TotalBalance() {
    let sign = '';
    let color = 'grey';
    let number = 0;
    // debugger
    if (this.props.currentUser.total_balance > 0) {
      sign = '+';
      color = 'green';
      number = this.props.currentUser.total_balance.toFixed(2);
    } else if (this.props.currentUser.total_balance < 0) {
      sign = '-';
      color = 'orange';
      number = this.props.currentUser.total_balance.toString().slice(1).toFixed(2);
    }
    return (
     <div id={`${color}`} className='user-balance-number'>{sign} ${number}</div>
    )
  }

  youOwe() {

  }

  youAreOwed() {

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
                  <this.TotalBalance/>
                </div>
                <div className="you-owe">
                  <div className='balance-bar-items'>you owe</div>
                  <div className='you-owe-number'>${this.props.currentUser.you_owe}</div>
                </div>
                <div className="you-are-owed">
                  <div className='balance-bar-items'>you are owed</div>
                  <div className='you-are-owed-number'>${this.props.currentUser.you_are_owed}</div>
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
