import React from "react";

import Footer from "../../innerHome/footer";

import Header from "../../Nav/nav";
import Address from "./Address";

const AddressScreen = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Address />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AddressScreen;
