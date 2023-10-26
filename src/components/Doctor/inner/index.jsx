import React from "react";

import DoctorNav from "../../Home/Nav/doctorNav";
import Video from "./video";
import HealthConcern from "./HealthConcern/healthConcern";
import Customers from "./customers";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

const Index = () => {
  return (
    <>
      <Navbar />

      <div>
        <Video />
      </div>
      <div>
        <HealthConcern />
      </div>
      <div>
        <Customers />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Index;
