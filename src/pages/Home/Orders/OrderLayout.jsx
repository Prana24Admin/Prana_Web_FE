import React from "react";
import "./Orders.css";
import MainLayout from "../../../components/MainLayout";

const OrderLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="orders-mainContainer">
        <div className="orders-container">
          <div className="orders-leftContainer">
            <p className="orders-Header">Filters</p>
          </div>
          <div className="orders-rightContainer">{children}</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderLayout;
