import React from "react";
import Med from "../../../assets/images/home/choose/med-foot.jpg";
import Location from "../../../assets/images/home/choose/location.jpg";
import Family from "../../../assets/images/home/choose/family.jpg";
import Delivery from "../../../assets/images/home/choose/deliveryBoy.jpg";
import "../../../assets/css/Home/highLights.css";

const HighLights = () => {
  return (
    <>
      <div className="highLights-mainContainer">
        <p className="highLights-title">Why to choose us?</p>
        <div className="highLights-flexContainer">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="highLights-image" src={Delivery} alt="delivery" />
            <p className="highLights-description">Lightning-Fast Delivery</p>
            <p className="main-description" style={{ width: "60%" }}>
              Experience superfast delivery for medicine on time
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="highLights-image" src={Med} alt="delivery" />
            <p className="highLights-description">24x7 Customer support</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HighLights;
