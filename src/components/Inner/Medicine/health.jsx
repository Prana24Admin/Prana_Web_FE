import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MultiItemCarousel from "../../CarouselLayout";
import { healthConcern } from "../../../utils/categories";
const Health = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <>
      <div className="innerMed-popular">
        <p className="main-title">Health Concerns</p>
      </div>
      <div style={{ margin: " 0.2rem 0 " }}>
        <MultiItemCarousel multiData={healthConcern} />
      </div>
    </>
  );
};
export default Health;
