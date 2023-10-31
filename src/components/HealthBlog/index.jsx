import React from "react";
import Explore from "./explore";
import Content from "./content";
import Downlaod from "../Home/innerHome/homeDownload";
import MainLayout from "../MainLayout";
import BlogSlide from "./blogSlide";

const HealthBlogIndex = () => {
  return (
    <>
      <MainLayout>
        <div
          style={{
            paddingTop: "10rem",
            maxWidth: "1240px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <BlogSlide />
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
        </div>
      </MainLayout>
    </>
  );
};
export default HealthBlogIndex;
