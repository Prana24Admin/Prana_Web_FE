import React from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../../components/MainLayout";
import { format } from "date-fns";
import image from "../../../../assets/images/profile/avatar.png";

const LabOrderDetails = () => {
  const { id } = useParams();

  // Function to fetch lab order details by ID
  const fetchOrderById = async () => {
    const response = await axiosInstance.get(`/orders/laborders/${id}`);
    return response.data;
  };

  // Use the useQuery hook to manage lab order data and its state
  const { data, isLoading, error } = useQuery(["LabOrderById"], fetchOrderById);

  return (
    <MainLayout>
      <div className="orderdetails-mainContainer">
        {data && (
          <div>
            <p className="orderdetails-title">Order Details</p>
            <div className="orderdetails-justifyContainer">
              <div className="orderdetails-flexContainer">
                <p>
                  Ordered on {format(new Date(data.createdAt), "dd MMMM yyyy")}
                </p>
                <div className="orderdetails-line" />
                <p>ORDER ID: {data.lab_order_id}</p>
              </div>
            </div>
            <div className="orderdetails-borderContainer">
              <div className="orderdetails-justifyContainer">
                <div className="orderdetails-borderFlexContainer">
                  <div>
                    <p className="orderdetails-header">Shipping address</p>
                    <p className="orderdetails-bodyText">
                      {data.shipping_address.split(",")[0]}, <br />{" "}
                      {data.shipping_address.split(",")[1]},<br />
                      {data.shipping_address.split(",")[2]},{" "}
                      {data.shipping_address.split(",")[4]} <br />
                      {data.shipping_address.split(",")[3]}
                    </p>
                  </div>
                  <div>
                    <p className="orderdetails-header">payment method</p>
                    <p className="orderdetails-bodyText">
                      {data.payment_method}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="orderdetails-header">Order summary</p>
                  <div className="orderdetails-bodyText">
                    <div className="orderdetails-billJustifyContainer">
                      <p>items subtotal:</p>
                      <p>₹{data.amount}</p>
                    </div>
                    <div className="orderdetails-billJustifyContainer">
                      <p>Shipping:</p>
                      <p>₹{data.shipping_charge}</p>
                    </div>
                    <div className="orderdetails-billJustifyContainer">
                      <p>total:</p>
                      <p>₹{data.total_amount}</p>
                    </div>
                    <div
                      className="orderdetails-billJustifyContainer"
                      style={{ fontWeight: "800" }}
                    >
                      <p>grand total:</p>
                      <p>₹{data.total_amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="orderdetails-borderContainer">
              <div className="orderdetails-justifyContainer">
                <div className="orderdetails-borderFlexContainer">
                  <img className="orderdetails-image" src={image} alt="sanju" />
                  <div>
                    <p className="orderdetails-header">Order name</p>
                    <p>₹399.00</p>
                    <button className="orderdetails-button">
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

export default LabOrderDetails;
