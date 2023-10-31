import React from "react";
import HealthSlide from "./healthSlide";
import Health from "./health";

import Video from "./video";
import HealthTxt from "./healthTxt";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Categories from "./Categories";
import MainLayout from "../../../components/MainLayout";
import MedicineSlider from "../../../components/Inner/Medicine/medicineSlider";
// import Categories from "./Categories";

const HealthCareIndex = () => {
  return (
    <>
      <MainLayout>
        <div
          style={{ maxWidth: "1240px", margin: "auto", paddingTop: "11rem" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <MedicineSlider />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <Categories />
          </div>
          {/* <HealthSlide /> */}
          {/* <Health /> */}
          {/* <Video /> */}
          {/* <HealthTxt /> */}
        </div>
      </MainLayout>
    </>
  );
};
export default HealthCareIndex;
