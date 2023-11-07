import React from "react";
import "./checkout.css";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axios";
import CartCard from "../../../components/CartCard";
import CheckoutLayout from "../../../components/CheckoutLayout";
import Loader from "../../../components/Loader";

const Checkout = () => {
  // Define an asynchronous function to fetch cart data
  const fetchCartData = async () => {
    // Send a GET request to retrieve cart data
    const response = await axiosInstance.get("/cart");
    // Return the data obtained from the response
    return response.data;
  };

  // Use the useQuery hook to manage cart data and its state
  const {
    data: cartData,
    isLoading,
    error,
  } = useQuery(["cart"], fetchCartData);

  return (
    <CheckoutLayout cartData={cartData}>
      {isLoading && (
        // Show a loader component while data is loading
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
      {cartData &&
        cartData.length > 0 &&
        cartData.map((cartItem) => (
          // Map through cart data and render CartCard components for each item
          <div key={cartItem.uuid} style={{ marginBottom: "0.75rem" }}>
            <CartCard cartItem={cartItem} />
          </div>
        ))}
    </CheckoutLayout>
  );
};

// Export the Checkout component
export default Checkout;
