import React from "react";
import "./OrderDetails.css";

import image from "../../../../assets/images/profile/avatar.png";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import format from "date-fns/format";
import MainLayout from "../../../../components/MainLayout";
import Loader from "../../../../components/Loader";

const HealthCareOrderDetails = () => {
  const { id } = useParams();

  // Function to fetch order details by ID
  const fetchOrderById = async () => {
    const response = await axiosInstance.get(`/orders/${id}`);
    return response.data;
  };

  // Use the useQuery hook to manage order data and its state
  const { data, isLoading, error } = useQuery(["OrderById"], fetchOrderById);

  return (
    <MainLayout>
      <div className="orderDetails-mainContainer">
        {isLoading && (
          // Show a loader while data is loading
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          // Display an error message if there's an error
          <div>
            <p>Error fetching. Try again</p>
          </div>
        )}
        {data && (
          <div>
            <p className="orderDetails-title">Order Details</p>
            <div className="orderDetails-justifyContainer">
              <div className="orderDetails-flexContainer">
                <p>
                  {" "}
                  Ordered on {format(new Date(data.createdAt), "dd MMMM yyyy")}
                </p>
                <div className="orderDetails-line" />
                <p>ORDER ID: {data.order_id}</p>
              </div>
            </div>
            <div className="orderDetails-borderContainer">
              <div className="orderDetails-justifyContainer">
                <div className="orderDetails-borderFlexContainer">
                  <div>
                    <p className="orderDetails-header">Shipping address</p>
                    <p className="orderDetails-bodyText">
                      {data.shipping_address.split(",")[0]}, <br />{" "}
                      {data.shipping_address.split(",")[1]},<br />
                      {data.shipping_address.split(",")[2]},{" "}
                      {data.shipping_address.split(",")[4]} <br />
                      {data.shipping_address.split(",")[3]}
                    </p>
                  </div>
                  <div>
                    <p className="orderDetails-header">payment method</p>
                    <p className="orderDetails-bodyText">
                      {data.payment_method}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="orderDetails-header">Order summary</p>
                  <div className="orderDetails-bodyText">
                    <div className="orderDetails-billJustifyContainer">
                      <p>items subtotal:</p>
                      <p>₹{data.amount}</p>
                    </div>
                    <div className="orderDetails-billJustifyContainer">
                      <p>Shipping:</p>
                      <p>₹{data.shipping_charge}</p>
                    </div>
                    <div className="orderDetails-billJustifyContainer">
                      <p>total:</p>
                      <p>₹{data.total_amount}</p>
                    </div>
                    <div
                      className="orderDetails-billJustifyContainer"
                      style={{ fontWeight: "800" }}
                    >
                      <p>grand total:</p>
                      <p>₹{data.total_amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="orderDetails-borderContainer">
              <div className="orderDetails-justifyContainer">
                <div className="orderDetails-borderFlexContainer">
                  <img className="orderDetails-image" src={image} alt="sanju" />
                  <div>
                    <p className="orderDetails-header">Order name</p>
                    <p>₹399.00</p>
                    <button className="orderDetails-button">
                      View your Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default HealthCareOrderDetails;
