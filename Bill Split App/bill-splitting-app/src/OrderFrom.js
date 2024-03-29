// OrderForm.js
import React, { useState } from 'react';

function OrderFrom({ onCreateOrder }) {
  const [orderName, setOrderName] = useState('');

  const handleCreateOrder = () => {
    onCreateOrder(orderName);
    setOrderName('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Order Name"
        value={orderName}
        onChange={(e) => setOrderName(e.target.value)}
        className="friend-input"
      />
      <button onClick={handleCreateOrder} className="friend-button">Create Order</button>
    </div>
  );
}

export default OrderFrom;
