import React from "react";

import MultiItemCarousel from "../../CarouselLayout";
import { healthConcern } from "../../../utils/categories";
const Health = () => {
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
