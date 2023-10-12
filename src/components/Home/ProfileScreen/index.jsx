import React from "react";
import Header from "../Nav/nav";
import Footer from "../innerHome/footer";
import Profile from "./Profile";

const ProfileScreen = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ProfileScreen;
