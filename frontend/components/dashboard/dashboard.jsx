import React from 'react';
import CreateBillModalContainer from './create_bill_modal_container';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.TotalBalance = this.TotalBalance.bind(this);
    this.YouOwe = this.YouOwe.bind(this);
    this.YouAreOwed = this.YouAreOwed.bind(this);
    this.state = this.props.currentUser;
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
      number = this.props.currentUser.total_balance.toFixed(2).slice(1);
    }
    return (
     <div id={`${color}`} className='user-balance-number'>{sign} ${number}</div>
    )
  }

  YouOwe() {
   if (this.props.currentUser.you_owe === 0) {
    return <div className='you-owe-number'>$0.00</div>
    } else {
      return <div id='orange' className='you-owe-number'>${this.props.currentUser.you_owe.toFixed(2)}</div>
    }
  }

  YouAreOwed() {
// debugger
    if (this.props.currentUser.you_are_owed === 0) {
     return <div className='you-are-owed-number'>$0.00</div>
     } else {
       return <div id='green' className='you-owe-number'>${this.props.currentUser.you_are_owed.toFixed(2)}</div>
     }
  }


  componentDidMount() {
    return this.props.closeModal();
  }

  componentWillReceiveProps() {

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
                  <button className='signup-button' onClick={() => this.props.openModal('createBill')}>Add a bill</button>
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
                  <this.YouOwe/>
                </div>
                <div className="you-are-owed">
                  <div className='balance-bar-items'>you are owed</div>
                  <this.YouAreOwed/>
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
