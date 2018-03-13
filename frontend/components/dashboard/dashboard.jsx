import React from 'react';
import CreateBillModalContainer from './create_bill_modal_container';
import DashboardList from './dashboard_list.jsx';
import DashboardChart from './dashboard_chart.jsx';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.TotalBalance = this.TotalBalance.bind(this);
    this.YouOwe = this.YouOwe.bind(this);
    this.YouAreOwed = this.YouAreOwed.bind(this);
    this.state = this.props.chart;
    this.Chart = this.Chart.bind(this);
    this.ListButton = this.ListButton.bind(this);
    this.ChartButton = this.ChartButton.bind(this);
  }

  componentDidMount() {
    this.props.closeModal();
    // return this.props.openModal('dashboardList');
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
// debugger
    if (this.props.currentUser.you_are_owed === 0) {
     return <div className='you-are-owed-number'>$0.00</div>;
     } else {
       return <div id='green' className='you-owe-number'>${this.props.currentUser.you_are_owed.toFixed(2)}</div>;
     }
  }

  componentWillReceiveProps() {

  }

  render() {
    // debugger
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
          <div className='right-column'></div>
        </div>
      </div>
    );
  }

  Chart() {
    // debugger
    if (this.props.chart === 'list'){
      return (
        <DashboardList owedBills={this.props.currentUser.owed_bills} owedToBills={this.props.currentUser.you_are_owed_bills} owedToBillsInfo={this.props.currentUser.you_are_owed_bills_info} owedBillsInfo={this.props.currentUser.owed_bills_info}/>
      );} else if (this.props.chart==='chart') {
        return (
          <DashboardChart owedBills={this.props.currentUser.owed_bills} owedToBills={this.props.currentUser.you_are_owed_bills} owedToBillsInfo={this.props.currentUser.you_are_owed_bills_info} owedBillsInfo={this.props.currentUser.owed_bills_info}/>
        );}
  }

  ListButton() {
    if (this.props.chart === 'list') {
      return(
        <button id='selected-button' className='view-as-list-button' onClick={this.props.openList}><i id='icons' className='fa fa-bars'/>view as list</button>
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
        <button id='selected-button' className='view-as-chart-button' onClick={this.props.openChart}><i id='icons' className='fa fa-bar-chart'/>view chart</button>
      );
    } else {
        return (
        <button className='view-as-chart-button' onClick={this.props.openChart}><i id='icons' className='fa fa-bar-chart'/>view chart</button>
        );
      }
  }

}

export default Dashboard;
