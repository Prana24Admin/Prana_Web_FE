import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import OrderCard from "../../../../components/OrderCard";
import Profile from "../../Profile";
import axiosInstance from "../../../../libs/axios";

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
      {ordersData &&
        ordersData.data.map((order) => (
          <OrderCard order={order} key={order.uuid} />
        ))}
    </Profile>
  );
};

export default HealthCareOrders;
