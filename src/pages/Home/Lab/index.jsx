import React from "react";
import LabSlide from "./labSlide";
import Booking from "./booking";
import Slider from "../../../components/Inner/Medicine/medicineSlider";
import Test from "./test";
import LabHealth from "./labHealth";
import Package from "./package";
import Happy from "./happyCustomers";
import Download from "../../../components/Home/innerHome/homeDownload";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const LabIndex = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "12rem" }}>
        <LabSlide />
      </div>
      <div>
        <Booking />
      </div>
      <div style={{ margin: "20px 60px" }}>
        <Slider />
      </div>
      <div>
        <Test />
      </div>
      <div>
        <LabHealth />
      </div>
      <div>
        <Package />
      </div>
      <div>
        <Happy />
      </div>
      <div>
        <Download />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default LabIndex;
