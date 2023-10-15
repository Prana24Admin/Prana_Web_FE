import React from "react";
import Header from "../Nav/nav";
import InnerNav from "../Nav/innerNav";
import Footer from "../innerHome/footer";
import ProductScreen from "./ProductScreen";

const Product = () => {
  return (
    <div>
      <Header />
      <InnerNav />
      <ProductScreen />
      <Footer />
    </div>
  );
};

export default Product;
