import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <main id="root">
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
