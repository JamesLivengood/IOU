import React from 'react';
import CreateBillModalContainer from './create_bill_modal_container';
import DashboardList from './dashboard_list.jsx';
import DashboardChart from './dashboard_chart.jsx';
import AllFriendsContainer from './all_friends_container';
import LeftColumnContainer from './left_column_container';
import Modal from '../modal';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.TotalBalance = this.TotalBalance.bind(this);
    this.YouOwe = this.YouOwe.bind(this);
    this.YouAreOwed = this.YouAreOwed.bind(this);
    // this.state = this.props.chart;
    this.Chart = this.Chart.bind(this);
    this.ListButton = this.ListButton.bind(this);
    this.ChartButton = this.ChartButton.bind(this);
  }

  componentDidMount() {
    this.props.closeModal();
  }


  TotalBalance() {
    let sign = '';
    let color = 'grey';
    let number = 0;
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
    );
  }

  YouOwe() {
   if (this.props.currentUser.you_owe === 0) {
    return <div className='you-owe-number'>$0.00</div>;
    } else {
      return <div id='orange' className='you-owe-number'>${this.props.currentUser.you_owe.toFixed(2)}</div>;
    }
  }

  YouAreOwed() {
    if (this.props.currentUser.you_are_owed === 0) {
     return <div className='you-are-owed-number'>$0.00</div>;
     } else {
       return <div id='green' className='you-owe-number'>${this.props.currentUser.you_are_owed.toFixed(2)}</div>;
     }
  }

  componentWillReceiveProps() {

  }

  // <AllFriendsContainer/>
  render() {
    // <button className='login-button'>Settle up</button>
    return(
          <div className="center-column">

            <div className="center-column-header">
              <div className="center-column-header-top">
                <h2 className='dashboard-title'>Dashboard</h2>
                <div className='top-dash-buttons'>
                  <button className='signup-button' onClick={() => this.props.openModal('createBill')}>Add a bill</button>
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
            <div className='dashboard-chart-header'>
              <div className='center-boxes-dashboard'>
                <div className='dashboard-chart-owe-title'>YOU OWE</div>
                <this.ListButton />
              </div>
              <div className='center-boxes-dashboard'>
                <this.ChartButton />
                <div className='dashboard-chart-owe-title'>YOU ARE OWED</div>
              </div>
            </div>
            <this.Chart/>
          </div>

    );
  }

  Chart() {
    if (this.props.chart === 'list'){
      return (
        <DashboardList openModal={this.props.openModal} fetchBill={this.props.fetchBill} owedBills={this.props.currentUser.owed_bills} owedToBills={this.props.currentUser.you_are_owed_bills} owedToBillsInfo={this.props.currentUser.you_are_owed_bills_info} owedBillsInfo={this.props.currentUser.owed_bills_info}/>
      );} else if (this.props.chart==='chart') {
        return (
          <DashboardChart highestFriendBalance={this.props.currentUser.highest_friend_balance} friendAndBalanceArray={this.props.currentUser.friend_and_balance_array.sort((a, b) => {if(a.balance>b.balance){return -1}; if(a.balance<b.balance){return 1}else{return 0}})}/>
        );}
  }

  ListButton() {
    if (this.props.chart === 'list') {
      return(
        <div id='selected-div-list'><button id='selected-button' className='view-as-list-button' onClick={this.props.openList}><i id='icons' className='fa fa-bars'/>view as list </button><span id='hideMe'>(all bills)</span></div>
      );
    } else {
        return (
          <button className='view-as-list-button' onClick={this.props.openList}><i id='icons' className='fa fa-bars'/>view as list</button>
        );
      }
  }

  ChartButton() {
    if (this.props.chart === 'chart') {
      return(
        <div id='selected-div'><button id='selected-button' className='view-as-chart-button' onClick={this.props.openChart}><i id='icons' className='fa fa-bar-chart'/>view chart </button><span id='hideMe'>(balance per friend)</span></div>
      );
    } else {
        return (
        <button className='view-as-chart-button' onClick={this.props.openChart}><i id='icons' className='fa fa-bar-chart'/>view chart</button>
        );
      }
  }

}

export default Dashboard;
