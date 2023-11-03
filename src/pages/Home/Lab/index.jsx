import React from "react";

import Test from "./test";

import Package from "./package";

import Download from "../../../components/Home/innerHome/homeDownload";

import CartBox from "./CartBox/CartBox";
import MainLayout from "../../../components/MainLayout";
import MainBannerCarousel from "../../../components/CarouselLayout/MainBannerCarousel";
import { MedicineBanner } from "../../../utils/banners";

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
          {/* <MedicineSlider /> */}
          <MainBannerCarousel multiData={MedicineBanner} />
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
