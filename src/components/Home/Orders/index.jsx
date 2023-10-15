import React from "react";
import Header from "../Nav/nav";
import InnerNav from "../Nav/innerNav";
import "./Orders.css";

const Orders = () => {
  return (
    <div>
      <Header />
      <InnerNav />
      <div className="orders-mainContainer">
        <div className="orders-container">
          <div className="orders-leftContainer">
            <p className="orders-Header">Filters</p>
          </div>
          <div className="orders-rightContainer">
            <p className="orders-Header">Orders</p>
            <div className="orders-flexContainer">
              <img className="orders-image" src="" alt="img" />
              <div className="orders-justifyContainer">
                <div>
                  <p className="orders-header">Item anme</p>
                  <p className="orders-quantityText">Quantity:</p>
                </div>
                <div>₹3773</div>
                <div>Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
