import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {/* <InnerNav /> */}
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
