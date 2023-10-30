import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../assets/css/Home/slider.css";
import BannerCarousel from "../../CarouselLayout/BannerCarousel";
import { BestSeller } from "../../../utils/bestSellers";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
