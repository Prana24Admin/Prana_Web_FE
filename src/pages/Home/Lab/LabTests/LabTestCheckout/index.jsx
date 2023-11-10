import React from "react";
import "./labcheckout.css";

import CheckoutLayout from "../../../../../components/CheckoutLayout";
import { useQuery } from "@tanstack/react-query";
import CartCard from "../../../../../components/CartCard";
import Loader from "../../../../../components/Loader";
import { fetchLabCartData } from "../../../../../services/labCartService";

const LabTestCheckout = () => {
  // Use the useQuery hook to manage lab cart data and its state
  const {
    data: labCartData,
    isLoading,
    error,
  } = useQuery(["LabCart"], fetchLabCartData);

  return (
    <CheckoutLayout cartData={labCartData?.data}>
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
