import React from "react";

import "../../../assets/css/inner/ayurveda/herbs.css";
import MultiItemCarousel from "../../CarouselLayout";
import { skinCare } from "../../../utils/ayurvedhaCards";

const Skin = () => {
  return (
    <>
      <div>
        <p className="main-title">Skin Care</p>
        <MultiItemCarousel multiData={skinCare} />
      </div>
    </>
  );
};
export default Skin;
