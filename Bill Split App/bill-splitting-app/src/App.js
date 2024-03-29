import React, { useState } from "react";
import OrderFrom from "./OrderFrom";
import FriendFrom from "./FirendFrom";
import BillDisplay from "./BillDisplay";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  const handleCreateOrder = (orderName) => {
    setOrders([...orders, { name: orderName, friends: [] }]);
  };

  const handleAddFriend = (orderIndex, friendName) => {
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].friends.push(friendName);
    setOrders(updatedOrders);
  };

  const calculateBill = (order) => {
    const totalFriends = order.friends.length;
    const totalBill = totalFriends > 0 ? 100 / totalFriends : 0;
    return totalBill.toFixed(2);
  };

  return (
    <div className="container">
      <h1>Bill Splitting Application</h1>
      <div className="input-container">
        <OrderFrom onCreateOrder={handleCreateOrder} />{" "}
        {/* Corrected component name */}
      </div>
      {orders.map((order, index) => (
        <div className="order" key={index}>
          <h2>{order.name}</h2>
          <FriendFrom orderIndex={index} onAddFriend={handleAddFriend} />{" "}
          {/* Corrected component name */}
          <BillDisplay order={order.name} bill={calculateBill(order)} friends={order.friends} />

        </div>
      ))}
    </div>
  );
}

export default App;
