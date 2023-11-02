import React from "react";

import { blogSlider } from "../../utils/banners";
import MainBannerCarousel from "../CarouselLayout/MainBannerCarousel";

const BlogSlide = () => {
  return (
    <>
      <div>
        <MainBannerCarousel multiData={blogSlider} />
      </div>
    </>
  );
};
export default BlogSlide;
