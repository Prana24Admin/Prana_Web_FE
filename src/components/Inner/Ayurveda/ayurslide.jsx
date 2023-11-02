import React from "react";

import "../../../assets/css/inner/ayurveda/index.css";
import MainBannerCarousel from "../../CarouselLayout/MainBannerCarousel";
import { ayurvedaSlider } from "../../../utils/banners";
const AyurSlide = () => {
  return (
    <>
      <div>
        <MainBannerCarousel multiData={ayurvedaSlider} />
      </div>
    </>
  );
};
export default AyurSlide;
