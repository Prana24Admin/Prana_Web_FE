import React from "react";
import Nav from "../Home/Nav/nav";
import Footer from "../Footer";

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
