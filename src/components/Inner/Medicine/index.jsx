import React from "react";
import Popular from "./popular";
import Seller from "./seller";
import Deals from "./deals";

import Health from "./health";
import Medicine from "./medicine";

import Prescription from "../../Home/innerHome/prescription";
import MainLayout from "../../MainLayout";

const MedicineIndex = () => {
  return (
    <>
      <MainLayout>
        <div
          style={{
            maxWidth: "1240px",
            margin: "auto",
            paddingTop: "10rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
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
          <div style={{ marginBottom: "0" }}>
            <Health />
          </div>
          <div>
            <Medicine />
          </div>
        </div>
      </MainLayout>
    </>
  );
};
export default MedicineIndex;
