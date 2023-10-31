import React from "react";
import "react-multi-carousel/lib/styles.css";
import "../../../assets/css/inner/ayurveda/herbs.css";
import { digestiveCare } from "../../../utils/ayurvedhaCards";
import MultiItemCarousel from "../../CarouselLayout";

const Digestive = () => {
  return (
    <>
      <div>
        <p className="main-title">Digestive Care</p>
        <MultiItemCarousel multiData={digestiveCare} />
      </div>
    </>
  );
};
export default Digestive;
