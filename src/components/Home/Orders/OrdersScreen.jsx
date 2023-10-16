import React from "react";
import OrderLayout from "./OrderLayout";
import Image from "../../../assets/images/profile/avatar.png";

const OrdersScreen = () => {
  return (
    <OrderLayout>
      <div>
        <p className="orders-Header">Your Orders</p>
        <div className="orders-borderContainer">
          <div className="orders-justifyContainer">
            <div className="orders-flexContainer">
              <div>
                <p className="orders-text">Order Placed</p>
                <p className="orders-date">Date</p>
              </div>
              <div>
                <p className="orders-text">Total</p>
                <p className="orders-date">₹200</p>
              </div>
              <div>
                <p className="orders-text">Ship To</p>
                <p className="orders-date">Address.name</p>
              </div>
            </div>
            <div>
              <div className="orders-idText">
                <p>Order</p>
                <p>#009900991-1000928-3110</p>
              </div>
              <div className="orders-bill">
                <p>View order details</p>
                <p>Invoice</p>
              </div>
            </div>
          </div>
          <div className="orders-details">
            <div className="orders-detailsFlex">
              <img className="orders-image" src={Image} alt="sanju" />
              <div className="orders-gapContainer">
                <p className="orders-productName">Orders Name</p>
                <button className="orders-button">View your Item</button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexDirection: "column",
              }}
            >
              <button className="orders-buttonsRight">Customer support</button>
              <button className="orders-buttonsRight">Write a review</button>
            </div>
          </div>
        </div>
      </div>
    </OrderLayout>
  );
};

export default OrdersScreen;
