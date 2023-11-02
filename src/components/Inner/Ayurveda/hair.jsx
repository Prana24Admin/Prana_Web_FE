import React from "react";

import "../../../assets/css/inner/ayurveda/herbs.css";
import MultiItemCarousel from "../../CarouselLayout";
import { hairCare } from "../../../utils/ayurvedhaCards";

const Herbs = () => {
  return (
    <>
      <div>
        <p className="main-title">Hair Care</p>
        <MultiItemCarousel multiData={hairCare} />
      </div>
    </>
  );
};
export default Herbs;
