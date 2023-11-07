import React from "react";
import "../Orders.css";

import { useQuery } from "@tanstack/react-query";
import OrderCard from "../../../../components/OrderCard";
import Profile from "../../Profile";
import axiosInstance from "../../../../libs/axios";
import Loader from "../../../../components/Loader";

const HealthCareOrders = () => {
  // Function to fetch all healthcare orders
  const fetchAllOrders = async () => {
    const response = await axiosInstance.get("/orders");
    return response.data;
  };

  // Use the useQuery hook to manage order data and its state
  const {
    data: ordersData,
    isLoading,
    error,
  } = useQuery(["Orders"], fetchAllOrders);

  return (
    <Profile>
      <p className="orders-Header">Healthcare Orders</p>
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
      {ordersData && (
        <div>
          {/* Render each order card */}
          {ordersData.data.map((order) => (
            <OrderCard order={order} key={order.uuid} screen={"healthCare"} />
          ))}
        </div>
      )}
    </Profile>
  );
};

export default HealthCareOrders;
