import React from "react";

import "../../../assets/css/inner/ayurveda/herbs.css";
import MultiItemCarousel from "../../CarouselLayout";
import { herbs } from "../../../utils/ayurvedhaCards";

const Herbs = () => {
  return (
    <>
      <div>
        <p className="main-title">Featured Herbs</p>
        <MultiItemCarousel multiData={herbs} />
      </div>
    </>
  );
};
export default Herbs;
