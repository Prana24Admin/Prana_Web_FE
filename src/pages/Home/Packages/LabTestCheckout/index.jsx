import React from "react";

import "./labcheckout.css";
import CheckoutLayout from "../../../../components/CheckoutLayout";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import CartCard from "../../../../components/CartCard";

const LabTestCheckout = () => {
  const fetchLabCart = async () => {
    const response = await axiosInstance.get("/cart/labcart");
    return response.data;
  };

  const {
    data: labCartData,
    isLoading,
    error,
  } = useQuery(["LabCart"], fetchLabCart);
  return (
    <CheckoutLayout cartData={labCartData.data}>
      {labCartData &&
        labCartData.data.length > 0 &&
        labCartData.data.map((test) => (
          <div key={test.uuid} style={{ marginBottom: "0.75rem" }}>
            <CartCard key={test.uuid} labItem={test} />
          </div>
        ))}
    </CheckoutLayout>
  );
};

export default LabTestCheckout;
