import React from "react";

import HealthBlog from "./blogSlide";
import Explore from "./explore";
import Content from "./content";
import Downlaod from "../Home/innerHome/homeDownload";
import Footer from "../Footer";
import Navbar from "../Navbar";

const HealthBlogIndex = () => {
  return (
    <>
      <Navbar />
      <div>
        <HealthBlog />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Downlaod />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default HealthBlogIndex;
