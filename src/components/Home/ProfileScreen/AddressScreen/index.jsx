import React from "react";

import Footer from "../../innerHome/footer";

import Header from "../../Nav/nav";
import Address from "./Address";
import ProfileProvider from "../../../../context/ProfileProvider";

const AddressScreen = () => {
  return (
    <ProfileProvider>
      <div>
        <Header />
      </div>
      <div>
        <Address />
      </div>
      <div>
        <Footer />
      </div>
    </ProfileProvider>
  );
};

export default AddressScreen;
