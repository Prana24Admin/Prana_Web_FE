import React from "react";
import "./OrderDetails.css";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../../components/MainLayout";
import { format } from "date-fns";
import image from "../../../../assets/images/profile/avatar.png";
import { fetchLabOrderById } from "../../../../services/labTestOrderService";

const LabOrderDetails = () => {
  const { id } = useParams();

  // Use the useQuery hook to manage lab order data and its state
  const { data, isLoading, error } = useQuery(["LabOrderById", id], () =>
    fetchLabOrderById(id)
  );

  return (
    <MainLayout>
      <div className="orderDetails-mainContainer">
        {data && (
          <div>
            <p className="orderDetails-title">Order Details</p>
            <div className="orderDetails-justifyContainer">
              <div className="orderDetails-flexContainer">
                <p>
                  Ordered on {format(new Date(data.createdAt), "dd MMMM yyyy")}
                </p>
                <div className="orderDetails-line" />
                <p>ORDER ID: {data.lab_order_id}</p>
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

export default LabOrderDetails;
