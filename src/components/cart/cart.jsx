import React from "react";

import "../../assets/css/cart/cart.css";

import axiosInstance from "../../libs/axios";
import { useQuery } from "@tanstack/react-query";

const Cart = () => {
  const fetchCart = async () => {
    const response = await axiosInstance.get("/cart");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["cart"], fetchCart);

  return (
    <>
      <p className="main-head-title">Items added in your cart :</p>
      {data && (
        <div>
          {data.map((item) => (
            <p>{item.product.name}</p>
          ))}
        </div>
      )}
    </>
  );
};
export default Cart;
