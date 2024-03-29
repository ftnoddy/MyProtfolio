import React from 'react';

function BillDisplay({ order, bill, friends }) {
  const billPerFriend = bill / friends.length;

  return (
    <div>
      <p>Bill for {order}:</p>
      <p>Total: ${bill}</p>
      <p>Each friend will pay: ${billPerFriend.toFixed(2)}</p>
      <p>Friends:</p>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

export default BillDisplay;
