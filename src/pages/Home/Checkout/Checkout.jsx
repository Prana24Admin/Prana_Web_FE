import React from "react";
import "./checkout.css";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axios";
import CartCard from "../../../components/CartCard";
import CheckoutLayout from "../../../components/CheckoutLayout";

const Checkout = () => {
  const fetchCartData = async () => {
    const response = await axiosInstance.get("/cart");
    return response.data;
  };

  const { data: cartData, error } = useQuery(["cart"], fetchCartData);

  return (
    <CheckoutLayout cartData={cartData}>
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
