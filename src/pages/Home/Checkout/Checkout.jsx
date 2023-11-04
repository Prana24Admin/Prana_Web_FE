import React from "react";
import "./checkout.css";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axios";
import CartCard from "../../../components/CartCard";
import CheckoutLayout from "../../../components/CheckoutLayout";
import Loader from "../../../components/Loader";

const Checkout = () => {
  const fetchCartData = async () => {
    const response = await axiosInstance.get("/cart");
    return response.data;
  };

  const {
    data: cartData,
    isLoading,
    error,
  } = useQuery(["cart"], fetchCartData);

  return (
    <CheckoutLayout cartData={cartData}>
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
      {cartData &&
        cartData.length > 0 &&
        cartData.map((cartItem) => (
          <div key={cartItem.uuid} style={{ marginBottom: "0.75rem" }}>
            <CartCard cartItem={cartItem} />
          </div>
        ))}
    </CheckoutLayout>
  );
};

export default Checkout;
