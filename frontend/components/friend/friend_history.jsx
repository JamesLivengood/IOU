import React from 'react';

const FriendHistory = ({history, currentUser}) => {
  if (history.length === 0) {
    return (<NoHistory/>);
  } else {
    return(<HistoryList history={history}/>);
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

const HistoryList = ({history, currentUser}) => {
  const historyArr = history.map((item, idx) =>
      if (Object.values(item).includes("owing_at_creation_user_id")) {
        return (<BillItem idx={idx} owedToId={item.owed_to_at_creation_user_id} currentUser={currentUser}/>);
      } else {
        return (<PaymentItem />);
      }
    );
  return(
    <ul>{historyArr}</ul>
  );
}

const PaymentItem = ({idx}) => {
  return (<div>swag</div>);
}

const BillItem = ({idx, owedToId, currentUser}) => {
  const whoOwes = (currentUser.id === owedToId ? "you paid" : `${}`


  return (
    <li key={idx}>
      <div>
        <img src='https://s3.amazonaws.com/splitwise/uploads/category/icon/slim/uncategorized/general.png'/>
        <div>{item.description}</div>
      </div>

      <div>

      </div>

    </li>
  );
}

export default FriendHistory;
