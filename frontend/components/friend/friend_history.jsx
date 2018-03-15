import React from 'react';

const FriendHistory = ({friendHistory, currentUser, otherUser}) => {

  if (friendHistory.length === 0) {
    return (<NoHistory/>);
  } else {
    return(<HistoryList friendHistory={friendHistory} currentUser={currentUser} otherUser={otherUser}/>);
  }
}

const NoHistory = () => {
  return(
    <div className='no-history-div'>
      <img src='https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/empty-table-effed2a2e610373b6407d746cb95858f5d47329c8610bb70f1fd2040dfa35165.png'/>
      <div className='no-history-div-words'>
        <div className='no-history-title'>You have not added any expenses yet</div>
        <div className='no-history-words'>To add a new expense, click the orange "Add a bill" button.</div>
      </div>
    </div>
  );
}

const HistoryList = ({friendHistory, currentUser, otherUser}) => {
  // debugger
  const friendHistoryArr = friendHistory.map((item, idx) =>{
    // debugger
      if (Object.keys(item).includes("owing_at_creation_user_id")) {
        return (<BillItem idx={idx} bill={item} owedToId={item.owed_to_at_creation_user_id} currentUser={currentUser} otherUser={otherUser}/>);
      } else {
        return (<PaymentItem />);
      }}
    );
  return(
    <ul className='friend-history-master-list'>{friendHistoryArr}</ul>
  );
}

const PaymentItem = ({idx}) => {
  return (<div key={idx}>swag</div>);
}

const BillItem = ({idx, owedToId, currentUser, otherUser, bill}) => {
  const whoPaid = (currentUser.id === owedToId ? "you" : `${otherUser.name}`);
  const whoOwes = (currentUser.id === owedToId ? `${otherUser.name}` : 'you')
  const lentAmt = '$' + (bill.total_bill_amount - bill.amount_originally_owed).toFixed(2);
  const color = (currentUser.id === owedToId ? 'green' : 'orange')
  // debugger
  return (
    <li className='friend-bill-list-item' key={idx}>
      <div className='bill-item-left'>
        <img src='https://s3.amazonaws.com/splitwise/uploads/category/icon/slim/uncategorized/general.png'/>
        <div>{bill.description}</div>
      </div>

      <div className='bill-item-right'>
        <div>
          <p>{whoPaid} paid {whoOwes}</p>
          <div >${bill.total_bill_amount.toFixed(2)}</div>
        </div>

        <div>
          <p>{whoPaid} lent {whoOwes}</p>
          <div id={color}>{lentAmt}</div>
        </div>
      </div>

    </li>
  );
}

export default FriendHistory;
