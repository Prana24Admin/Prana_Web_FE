import React from "react";

import Categories from "./Categories";
import MainLayout from "../../../components/MainLayout";
import MedicineSlider from "../../../components/Inner/Medicine/medicineSlider";
import HealthCareTxt from "./healthTxt";

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
          <div>
            <HealthCareTxt />
          </div>
        </div>
      </MainLayout>
    </>
  );
};
export default HealthCareIndex;
