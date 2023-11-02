import React from "react";
import Slider from "../../../components/Inner/Medicine/medicineSlider";
import Test from "./test";
import LabHealth from "./labHealth";
import Package from "./package";
import Happy from "./happyCustomers";
import Download from "../../../components/Home/innerHome/homeDownload";

import CartBox from "./CartBox/CartBox";
import MainLayout from "../../../components/MainLayout";
import MedicineSlider from "../../../components/Inner/Medicine/medicineSlider";

const LabIndex = () => {
  return (
    <>
      <MainLayout>
        <div
          style={{
            maxWidth: "1240px",
            margin: "auto",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <CartBox />
          </div>
          <MedicineSlider />
          <Test />
          {/* <LabHealth /> */}
          <Package />
          <div style={{ marginTop: "1.5rem" }}>
            <Download />
          </div>
        </div>
      </MainLayout>
    </>
  );
};
export default LabIndex;
