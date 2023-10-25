import { format } from "date-fns";
import React from "react";
import Image from "../../assets/images/profile/avatar.png";
import { useNavigate } from "react-router-dom";
import "../../pages/Home/Orders/Orders.css";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="orders-borderContainer">
      <div className="orders-justifyContainer">
        <div className="orders-flexContainer">
          <div>
            <p className="orders-text">Order Placed</p>
            <p className="orders-date">
              {format(new Date(order.createdAt), "dd MMMM yyyy")}
            </p>
          </div>
          <div>
            <p className="orders-text">Total</p>
            <p className="orders-date">₹{order.total_amount}</p>
          </div>
          <div>
            <p className="orders-text">Ship To</p>
            {/* <p className="orders-date">{data.first_name}</p> */}
          </div>
        </div>
        <div>
          <div className="orders-idText">
            <p>Order:</p>
            <p>{order.order_id}</p>
          </div>
          <div className="orders-bill">
            <p
              className="orders-billText"
              onClick={() => navigate(`/orders/${order.uuid}`)}
            >
              View order details
            </p>
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
        {/* <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexDirection: "column",
          }}
        >
          <button className="orders-buttonsRight">Customer support</button>
          <button className="orders-buttonsRight">Write a review</button>
        </div> */}
      </div>
    </div>
  );
};

export default OrderCard;
