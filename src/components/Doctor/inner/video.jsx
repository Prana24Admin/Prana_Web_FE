import React from "react";
import Per from "../../../assets/images/doctor/video/per.jpeg";
import Per1 from "../../../assets/images/doctor/video/per1.jpeg";
import Per2 from "../../../assets/images/doctor/video/per2.jpeg";
import Sofa from "../../../assets/images/doctor/video/sofa.png";
import "../../../assets/css/Doctor/inner/video.css";

import { useNavigate } from "react-router-dom";
const Video = () => {
  const navigate = useNavigate();
  const navigateAppointment = () => {
    navigate("/inner/doctor/appointment");
  };
  return (
    <div className="video-mainContainer">
      <div className="video-flexContainer">
        {/* <div className="d-flex flex-column video-col"> */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p className="video-title">
            Private Consultation + Audio calls just Rs.199
          </p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <img className="video-doctorImage" src={Per} alt="" />
            <img className="video-doctorImage" id="per" src={Per1} alt="" />
            <img className="video-doctorImage" id="per" src={Per2} alt="" />
            <p className="vid-par">+ 142 doctors are in online</p>
          </div>
          <p onClick={navigateAppointment} className="video-button">
            Consult Now
          </p>
        </div>
        <img className="sofa" src={Sofa} alt="" />
      </div>
    </div>
  );
};
export default Video;
