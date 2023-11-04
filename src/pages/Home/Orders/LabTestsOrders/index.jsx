import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import OrderCard from "../../../../components/OrderCard";
import Profile from "../../Profile";
import axiosInstance from "../../../../libs/axios";
import Loader from "../../../../components/Loader";

const LabTestOrders = () => {
  const fetchAllOrders = async () => {
    const response = await axiosInstance.get("/orders/laborders/");
    return response.data;
  };

  const {
    data: labOrdersData,
    isLoading,
    error,
  } = useQuery(["LabOrders"], fetchAllOrders);

  return (
    <Profile>
      <p className="orders-Header">Lab test Orders</p>
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
      {labOrdersData &&
        labOrdersData.data.map((order) => (
          <OrderCard order={order} key={order.uuid} screen={"lab"} />
        ))}
    </Profile>
  );
};

export default LabTestOrders;
