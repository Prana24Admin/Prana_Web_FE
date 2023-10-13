import React from "react";

import Footer from "../../innerHome/footer";

import Header from "../../Nav/nav";
import Account from "./Account";

const AccountScreen = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Account />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AccountScreen;
