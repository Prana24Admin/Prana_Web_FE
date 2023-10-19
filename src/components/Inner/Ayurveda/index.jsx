import React from "react";
import "react-multi-carousel/lib/styles.css";
import AyurSlide from "./ayurslide";
import Offers from "./offers";
import Herbs from "./herbs";
import Hair from "./hair";
import Skin from "./skin";
import Digest from "./digestive";
import Download from "../../Home/innerHome/homeDownload";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

const AyurvedaIndex = () => {
  return (
    <>
      <Navbar />
      <div>
        <AyurSlide />
      </div>
      <div>
        <Offers />
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
      <div>
        <Footer />
      </div>
    </>
  );
};
export default AyurvedaIndex;
