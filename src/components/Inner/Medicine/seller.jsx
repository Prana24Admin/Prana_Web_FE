import React from "react";

import "../../../assets/css/Home/slider.css";
import BannerCarousel from "../../CarouselLayout/BannerCarousel";
import { BestSeller } from "../../../utils/bestSellers";
const Slider = () => {
  return (
    <div className="popular-mainContainer">
      <div className="innerMed-popular">
        <p className="main-title">Best Sellers</p>
      </div>
      <div>
        <BannerCarousel multiData={BestSeller} />
      </div>
    </div>
  );
};
export default Slider;
