import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../assets/css/inner/innerMed.css";
import MultiItemCarousel from "../../CarouselLayout";
import MainBannerCarousel from "../../CarouselLayout/MainBannerCarousel";
import { MedicineBanner } from "../../../utils/banners";

const MedicineSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
    <div style={{ paddingTop: "10rem", maxWidth: "1240px", margin: "auto" }}>
      <MainBannerCarousel multiData={MedicineBanner} />
    </div>
  );
};
export default MedicineSlider;
