import React from "react";
import "react-multi-carousel/lib/styles.css";
import "../../../assets/css/inner/innerMed.css";
import MainBannerCarousel from "../../CarouselLayout/MainBannerCarousel";
import { MedicineBanner } from "../../../utils/banners";

const MedicineSlider = () => {
  return (
    <div style={{ paddingTop: "10rem", maxWidth: "1240px", margin: "auto" }}>
      <MainBannerCarousel multiData={MedicineBanner} />
    </div>
  );
};
export default MedicineSlider;
