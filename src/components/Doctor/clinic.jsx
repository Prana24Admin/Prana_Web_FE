import React from "react";
import "../../assets/css/Doctor/clinic.css";

import { useNavigate } from "react-router-dom";
import MultiItemCarousel from "../CarouselLayout";
import { specializations } from "../../utils/specializations";
import { ChevronRight } from "lucide-react";

const Clinic = () => {
  // React Router navigation hook
  const navigate = useNavigate();

  // JSX structure for the Clinic component
  return (
    <div className="clinic-mainContainer">
      <div className="clinic">
        {/* Clinic section title and description */}
        <div>
          <p className="clinic-title">
            Book an appointment for an in-clinic consultation
          </p>
          <p className="clinic-description">
            Find experienced doctors across all specialities
          </p>
        </div>

        {/* View More link to navigate to the Specialization component */}
        <div
          className="main-leftText"
          onClick={() => navigate("/doctor/specialization")}
        >
          <p>View More</p>
          <ChevronRight size={15} />
        </div>
      </div>

      {/* Multi-item carousel displaying specializations */}
      <div>
        <MultiItemCarousel multiData={specializations} />
      </div>
    </div>
  );
};

export default Clinic;
