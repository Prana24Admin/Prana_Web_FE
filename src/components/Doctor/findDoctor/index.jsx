import React from "react";

import RightDoctor from "./rightDoctor";
import Filter from "./filter";
import Available from "./available";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
const FindDoctorIndex = () => {
  return (
    <>
      <Navbar />
      <div>{/* <RightDoctor /> */}</div>
      <div>
        <Filter />
      </div>
      <div>
        <Available />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default FindDoctorIndex;
