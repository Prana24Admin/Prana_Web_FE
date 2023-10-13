import React from "react";

import Footer from "../../innerHome/footer";

import Header from "../../Nav/nav";
import Account from "./Account";
import ProfileProvider from "../../../../context/ProfileProvider";

const AccountScreen = () => {
  return (
    <ProfileProvider>
      <div>
        <Header />
      </div>
      <div>
        <Account />
      </div>
      <div>
        <Footer />
      </div>
    </ProfileProvider>
  );
};

export default AccountScreen;
