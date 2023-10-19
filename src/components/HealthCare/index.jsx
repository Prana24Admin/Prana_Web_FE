import React from "react";
import HealthSlide from "./healthSlide";
import Health from "./health";

import Video from "./video";
import HealthTxt from "./healthTxt";
import Categories from "./Categories";
import Footer from "../Footer";
import Navbar from "../Navbar";
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
