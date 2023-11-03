import { format } from "date-fns";
import React, { useContext } from "react";
import Image from "../../assets/images/profile/avatar.png";
import { useNavigate } from "react-router-dom";
import "../../pages/Home/Orders/Orders.css";
import { ProfileContext } from "../../context/ProfileProvider";

const OrderCard = ({ order, screen }) => {
  const { data } = useContext(ProfileContext);
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
          {screen === "healthCare" && (
            <div>
              <p className="orders-text">Ship To</p>
              <p className="orders-shipToText">{data.first_name}</p>
            </div>
          )}
        </div>
        <div>
          <div className="orders-idText">
            <p>
              Order:{" "}
              <span style={{ fontWeight: "600" }}>
                {screen === "lab" ? order.lab_order_id : order.order_id}
              </span>
            </p>
          </div>
          <div className="orders-bill">
            <p
              className="orders-billText"
              onClick={() => {
                screen === "lab"
                  ? navigate(`/orders/lab/${order.uuid}`)
                  : navigate(`/orders/healthcare/${order.uuid}`);
              }}
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
      </div>
    </div>
  );
};

export default OrderCard;
