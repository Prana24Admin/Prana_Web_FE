import React from "react";

import Categories from "./Categories";
import MainLayout from "../../../components/MainLayout";
import HealthCareTxt from "./healthTxt";
import MainBannerCarousel from "../../../components/CarouselLayout/MainBannerCarousel";
import { MedicineBanner } from "../../../utils/banners";

const HealthCareIndex = () => {
  return (
    <>
      <MainLayout>
        <div
          style={{ maxWidth: "1340px", margin: "auto", paddingTop: "11rem" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <MainBannerCarousel multiData={MedicineBanner} />
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
