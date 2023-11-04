import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import OrderCard from "../../../../components/OrderCard";
import Profile from "../../Profile";
import axiosInstance from "../../../../libs/axios";
import Loader from "../../../../components/Loader";

const HealthCareOrders = () => {
  const fetchAllOrders = async () => {
    const response = await axiosInstance.get("/orders");
    return response.data;
  };

  const {
    data: ordersData,
    isLoading,
    error,
  } = useQuery(["Orders"], fetchAllOrders);

  return (
    <Profile>
      <p className="orders-Header">Healthcare Orders</p>
      {isLoading && (
        <div className="fullContainer">
          <Loader width={"4rem"} height={"4rem"} />
        </div>
      )}
      {error && (
        <div>
          <p>Error fetching. Try again</p>
        </div>
      )}
      {ordersData &&
        ordersData.data.map((order) => (
          <OrderCard order={order} key={order.uuid} screen={"healthCare"} />
        ))}
    </Profile>
  );
};

export default HealthCareOrders;
