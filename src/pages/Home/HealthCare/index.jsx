import React from "react";
import HealthSlide from "./healthSlide";
import Health from "./health";

import Video from "./video";
import HealthTxt from "./healthTxt";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Categories from "./Categories";
// import Categories from "./Categories";

const HealthCareIndex = () => {
  return (
    <>
      <Navbar />
      <div>
        <Categories />
      </div>
      <div>
        <HealthSlide />
      </div>
      <div>
        <Health />
      </div>
      <div>
        <Video />
      </div>
      <div>
        <HealthTxt />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default HealthCareIndex;
