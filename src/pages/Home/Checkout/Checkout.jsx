import React from "react";
import "./checkout.css";

import { useQuery } from "@tanstack/react-query";
import CartCard from "../../../components/CartCard";
import CheckoutLayout from "../../../components/CheckoutLayout";
import Loader from "../../../components/Loader";
import { fetchCartData } from "../../../services/cartService";

const Checkout = () => {
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
