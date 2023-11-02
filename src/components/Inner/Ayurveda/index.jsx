import React from "react";

import AyurSlide from "./ayurslide";

import Herbs from "./herbs";
import Hair from "./hair";
import Skin from "./skin";
import Digest from "./digestive";
import Download from "../../Home/innerHome/homeDownload";

import MainLayout from "../../MainLayout";

const AyurvedaIndex = () => {
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
            <AyurSlide />
          </div>
          <div>
            <Herbs />
          </div>
          <div>
            <Hair />
          </div>
          <div>
            <Skin />
          </div>
          <div>
            <Digest />
          </div>
          <div>
            <Download />
          </div>
        </div>
      </MainLayout>
    </>
  );
};
export default AyurvedaIndex;
