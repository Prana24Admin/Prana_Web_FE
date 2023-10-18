import React from "react";
import Header from "../../Nav/nav";
import Footer from "../../innerHome/footer";
import OrderDetails from "./OrderDetails";

const OrderDetailsScreen = () => {
  return (
    <div>
      <Header />
      <OrderDetails />
      <Footer />
    </div>
  );
};

export default OrderDetailsScreen;
