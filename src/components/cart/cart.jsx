import React, { useCallback } from "react";

import "../../assets/css/cart/cart.css";

import axiosInstance from "../../libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Plus, Minus, Loader } from "lucide-react";
import { handleRefetchCartItems } from "../../libs/queryFunctions";
import CartCard from "./CartCard";

const Cart = () => {
  const fetchCart = async () => {
    const response = await axiosInstance.get("/cart");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["cart"], fetchCart);

  // const {
  //   mutate,
  //   isSuccess,
  //   isLoading: isLoadingCart,
  //   isError,
  // } = useMutation(
  //   useCallback((item) => handleQuantity(item), [])
  //   // { onSuccess: () => handleRefetchCartItems() }
  // );

  return (
    <section>
      {isLoading && <p>Loading..</p>}
      <div className="cart-mainContainer">
        <div className="cart-marginContainer">
          {data &&
            (data.length < 1 ? (
              <div>
                <p>No products in cart</p>
              </div>
            ) : (
              <>
                <div className="cart-cardContainer">
                  <h3>Items in Your cart</h3>
                  {data.map((item) => (
                    <CartCard key={item.product.uuid} cartItem={item} />
                  ))}
                </div>
              </>
            ))}
          <div className="cart-rightContainer">
            <div className="cart-billContainer">
              <h3 className="cart-titleText">Bill Summary</h3>
              <div className="cart-flex">
                <p className="cart-descriptionText">Total Mrp</p>
                <p className="cart-descriptionText">324</p>
              </div>
              <div className="cart-flex">
                <p className="cart-descriptionText">Delivery charges</p>
                <p className="cart-descriptionText">324</p>
              </div>
              <div className="cart-flex">
                <p className="cart-descriptionText">Discount</p>
                <p className="cart-descriptionText">324</p>
              </div>
              <div className="cart-flex">
                <p className="cart-descriptionText">Cart Value</p>
                <p className="cart-descriptionText">324</p>
              </div>
              <div className="cart-flex">
                <p className="cart-descriptionTextDark">Amount to be paid</p>
                <p className="cart-descriptionTextDark">324</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && <p>Error fetching! Try again</p>}
    </section>
  );
};
export default Cart;
