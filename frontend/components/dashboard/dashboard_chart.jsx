import React from 'react';

const DashboardChart = ({highestFriendBalance, friendAndBalanceArray}) => {
  // debugger
  return(
      <div className='dashboard-chart-box'>
        <ul className='orange-dashboard-chart'>
          <OrangeMap highestFriendBalance={highestFriendBalance} friendAndBalanceArray={friendAndBalanceArray}/>
        </ul>
        <img className='chart-main-pic' src='https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/person-2d59b69b3e7431884ebec1a55de75a4153a17c4050e6b50051ca90412e72cf96.png'></img>
        <ul className='green-dashboard-chart'>
          <GreenMap highestFriendBalance={highestFriendBalance} friendAndBalanceArray={friendAndBalanceArray}/>
        </ul>
      </div>
  );
};

const OrangeMap = ({highestFriendBalance, friendAndBalanceArray}) => {
  // debugger
  return (
    friendAndBalanceArray.map((friendItem, idx) => {
        if (friendItem.balance < 0) {
          return (<li key={idx}>
                    <DashboardChartItem owed={true} balance={friendItem.balance} name={friendItem.name} id={friendItem.id} highestFriendBalance={highestFriendBalance}/>
                  </li>);
        }
    })
  );
};

const GreenMap = ({highestFriendBalance, friendAndBalanceArray}) => {
  return (
    friendAndBalanceArray.map((friendItem, idx) => {
        if (friendItem.balance > 0) {
          return (<li key={idx}>
                    <DashboardChartItem owed={true} balance={friendItem.balance} name={friendItem.name} id={friendItem.id} highestFriendBalance={highestFriendBalance}/>
                  </li>);
        }
    })
  );
};

const DashboardChartItem = ({owed, balance, name, id, highestFriendBalance}) => {
  // const oweOrOwed = owed ? 'you owe' : 'owes you' ;
  // debugger
  const width = Math.abs(((balance / highestFriendBalance) * 210)).toString();
  return (

      <div className='dashboard-chart-item-div' style={{width:`${width}px`}}>
          <div className='dashboard-chart-name' >{name}</div>
          <div className='dashboard-chart-amount'><span className='bold-balance'>${balance.toFixed(2)}</span></div>
      </div>
  );
};
// const DashboardList

export default DashboardChart;

// style="color:red;background:black;"
