import React from "react";
import MedicineSlider from "./medicineSlider";
import Popular from "./popular";
import Seller from "./seller";
import Deals from "./deals";
import HomeSlide from "../../Home/innerHome/homeslide";
import Picks from "./picks";
import Health from "./health";
import Medicine from "./medicine";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Prescription from "../../Home/innerHome/prescription";

const MedicineIndex = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "1240px",
          margin: "auto",
          paddingTop: "12rem",
        }}
      >
        <div>
          <Prescription />
        </div>
        <div>
          <Popular />
        </div>
        <div>
          <Seller />
        </div>
        <div>
          <Deals />
        </div>
        <div>{/* <HomeSlide /> */}</div>
        <div>{/* <Picks /> */}</div>
        <div>
          <Health />
        </div>
        <div>
          <Medicine />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default MedicineIndex;
