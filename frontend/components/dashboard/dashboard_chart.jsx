import React from 'react';

const DashboardChart = ({owedBills, owedToBills, owedBillsInfo, owedToBillsInfo}) => {
  // debugger
  return(
      <div className='dashboard-chart-box'>
        <ul className='orange-dashboard-chart'>
          {owedBills.map((bill, idx) => <li key={idx}><DashboardChartItem bill={bill} info={owedBillsInfo[idx]} owed={true}/></li>)}
        </ul>
        <img className='chart-main-pic' src='https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/person-2d59b69b3e7431884ebec1a55de75a4153a17c4050e6b50051ca90412e72cf96.png'></img>
        <ul className='green-dashboard-chart'>
          {owedToBills.map((bill, idx) => <li key={idx}><DashboardChartItem bill={bill} info={owedToBillsInfo[idx]} owed={false}/></li>)}
        </ul>
      </div>
  );
};

const DashboardChartItem = ({bill, info, owed}) => {
  const oweOrOwed = owed ? 'you owe' : 'owes you' ;
  return (
    <div className='dashboard-list-item-div'>
      <img className='dashboard-list-icon' src='https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/avatars/50-31b0bb2f5aec77f11d60a1dc3fa14c23a958fed79261b32e94a73e9c27473ebb.png'></img>
      <div className='dashboard-list-info'>
        <div className='dashboard-list-name'>{info.name}</div>
        <div className='dashboard-list-amount'>{oweOrOwed} <span className='bold-balance'>${info.balance.toFixed(2)}</span></div>
      </div>
    </div>
  );
};
// const DashboardList

export default DashboardChart;
