import React from "react";
import Header from "../Nav/nav";
import InnerNav from "../Nav/innerNav";

import ProductScreen from "./ProductScreen";
import Footer from "../../Footer";

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
