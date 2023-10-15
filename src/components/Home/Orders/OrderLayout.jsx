import React from "react";
import "./Orders.css";

const OrderLayout = ({ children }) => {
  return (
    <div className="orders-mainContainer">
      <div className="orders-container">
        <div className="orders-leftContainer">
          <p className="orders-Header">Filters</p>
        </div>
        <div className="orders-rightContainer">{children}</div>
      </div>
    </div>
  );
};

export default OrderLayout;
