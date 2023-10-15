import React from "react";
import Header from "../Nav/nav";
import InnerNav from "../Nav/innerNav";
import Footer from "../innerHome/footer";
import "./Orders.css";
import OrdersScreen from "./OrdersScreen";

const Orders = () => {
  return (
    <div>
      <Header />
      <InnerNav />
      <OrdersScreen />
      <Footer />
    </div>
  );
};

export default Orders;
