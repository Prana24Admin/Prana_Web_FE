import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import OrderCard from "../../../../components/OrderCard";
import Profile from "../../Profile";
import axiosInstance from "../../../../libs/axios";
import Loader from "../../../../components/Loader";

const LabTestOrders = () => {
  // Function to fetch all lab test orders
  const fetchAllOrders = async () => {
    const response = await axiosInstance.get("/orders/laborders/");
    return response.data;
  };

  // Use the useQuery hook to manage lab test order data and its state
  const {
    data: labOrdersData,
    isLoading,
    error,
  } = useQuery(["LabOrders"], fetchAllOrders);

  return (
    <Profile>
      <p className="orders-Header">Lab Test Orders</p>
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
      {labOrdersData && (
        <div>
          {/* Render each lab test order card */}
          {labOrdersData.data.map((order) => (
            <OrderCard order={order} key={order.uuid} screen={"lab"} />
          ))}
        </div>
      )}
    </Profile>
  );
};

export default LabTestOrders;
