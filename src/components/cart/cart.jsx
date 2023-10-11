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
    <section>
      {isLoading && <p>Loading..</p>}
      <p className="main-head-title">Items added in your cart :</p>
      {data &&
        (data.length < 1 ? (
          <div>
            <p>No products in cart</p>
          </div>
        ) : (
          <div>
            {data.map((item) => (
              <p>{item.product.name}</p>
            ))}
          </div>
        ))}
      {error && <p>Error fetching! Try again</p>}
    </section>
  );
};
export default Cart;
