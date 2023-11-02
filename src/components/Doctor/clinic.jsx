import React from "react";
import "react-multi-carousel/lib/styles.css";

import "../../assets/css/Doctor/clinic.css";
import { useNavigate } from "react-router-dom";

import MultiItemCarousel from "../CarouselLayout";
import { specializations } from "../../utils/specializations";

const Clinic = () => {
  const navigate = useNavigate();
  const navigateDoctor = () => {
    navigate("doctor/finddoctor");
  };

  return (
    <div className="clinic-mainContainer">
      <div className="clinic">
        <p className="clinic-title">
          Book an appointment for an in-clinic consultation
        </p>
        <p className="clinic-description">
          Find experienced doctors across all specialities
        </p>
      </div>
      <div>
        <MultiItemCarousel multiData={specializations} />
      </div>
    </div>
  );
};
export default Clinic;
