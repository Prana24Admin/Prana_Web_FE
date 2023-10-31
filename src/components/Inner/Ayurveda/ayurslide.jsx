import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
