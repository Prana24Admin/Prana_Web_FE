import React from "react";
import Nav from "../Home/Nav/nav";
import InnerNav from "../Home/Nav/innerNav";
import Footer from "../Home/innerHome/footer";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Nav />
      {/* <InnerNav /> */}
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
