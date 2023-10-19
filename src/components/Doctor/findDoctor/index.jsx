import React from "react";
import Header from "../../Home/Nav/nav";
import InnerNav from "../../Home/Nav/innerNav";

import RightDoctor from "./rightDoctor";
import Filter from "./filter";
import Available from "./available";
import Footer from "../../Footer";
const FindDoctorIndex = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <InnerNav />
      </div>
      <div>
        <RightDoctor />
      </div>
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
