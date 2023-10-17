import React from "react";
import Checkout from "./Checkout";
import Header from "../Home/Nav/nav";
import Footer from "../Home/innerHome/footer";
import InnerNav from "../Home/Nav/innerNav";

const CheckoutScreen = () => {
  return (
    <div>
      <Header />
      <InnerNav />
      <Checkout />
      <Footer />
    </div>
  );
};

export default CheckoutScreen;
