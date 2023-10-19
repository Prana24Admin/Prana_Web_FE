import React from "react";
import Header from "../Home/Nav/nav";
import InnerNav from "../Home/Nav/innerNav";
import HealthSlide from "./healthSlide";
import Health from "./health";
import Footer from "../Home/innerHome/footer";
import Video from "./video";
import HealthTxt from "./healthTxt";
import Categories from "./Categories";
const HealthCareIndex = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <InnerNav />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <HealthSlide />
      </div>
      <div>
        <Health />
      </div>
      <div>
        <Video />
      </div>
      <div>
        <HealthTxt />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default HealthCareIndex;
