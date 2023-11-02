import React from "react";

import { blogSlideBanner } from "../../utils/banners";
import BannerCarousel from "../CarouselLayout/BannerCarousel";
const Explore = () => {
  return (
    <>
      <div>
        <BannerCarousel multiData={blogSlideBanner} />
      </div>
    </>
  );
};
export default Explore;
