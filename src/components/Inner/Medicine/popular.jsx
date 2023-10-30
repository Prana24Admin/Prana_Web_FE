import React from "react";
import "react-multi-carousel/lib/styles.css";
import MultiItemCarousel from "../../CarouselLayout";
import { categories2 } from "../../../utils/categories";

const InnerPopular = () => {
  return (
    <div className="popular-mainContainer">
      <div className="innerMed-popular">
        <p className="main-title">Popular Categories</p>
      </div>
      <div>
        <MultiItemCarousel multiData={categories2} />
      </div>
    </div>
  );
};
export default InnerPopular;
