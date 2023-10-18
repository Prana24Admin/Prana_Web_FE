import React, { useContext } from "react";
import OrderLayout from "./OrderLayout";
import Image from "../../../assets/images/profile/avatar.png";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { ProfileContext } from "../../../context/ProfileProvider";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";

const OrdersScreen = () => {
  const navigate = useNavigate();
  const fetchAllOrders = async () => {
    const response = await axiosInstance.get("/orders");
    return response.data;
  };

  const { data } = useContext(ProfileContext);

  const {
    data: ordersData,
    isLoading,
    error,
  } = useQuery(["Orders"], fetchAllOrders);

  return (
    <OrderLayout>
      <p className="orders-Header">Your Orders</p>
      {ordersData &&
        ordersData.data.map((order) => (
          <div>
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
                    <p className="orders-date">{data.first_name}</p>
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
                      onClick={() => navigate("/orderdetails")}
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
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}
                >
                  <button className="orders-buttonsRight">
                    Customer support
                  </button>
                  <button className="orders-buttonsRight">
                    Write a review
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </OrderLayout>
  );
};

export default OrdersScreen;
