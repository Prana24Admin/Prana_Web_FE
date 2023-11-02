import React from "react";

import "../../../assets/css/inner/innerMed.css";
import MainBannerCarousel from "../../CarouselLayout/MainBannerCarousel";
import { MedicineBanner } from "../../../utils/banners";

const MedicineSlider = () => {
  return (
    <div>
      <MainBannerCarousel multiData={MedicineBanner} />
    </div>
  );
};
export default MedicineSlider;
