import React from "react";
import "../../assets/css/Doctor/inner/filter.css";

import { useNavigate } from "react-router-dom";

// Functional component representing a doctor card in the available doctors list
const DoctorCard = ({ doctor, specialization }) => {
  // React Router navigation hook
  const navigate = useNavigate();

  // JSX structure for rendering a doctor card
  return (
    <div
      className="available-flexCard"
      // Navigating to the doctor's profile page on card click
      onClick={() => navigate(`/doctor/profile/${doctor.uuid}`)}
    >
      <div className="available-cardContainer">
        <div>
          {/* Displaying doctor image and specialization */}
          <img
            loading="lazy"
            className="available-doctorImage"
            src={doctor.image}
            alt=""
          />
          {/* Displaying the doctor's specialization */}
          <p className="type">{specialization}</p>
        </div>
        <div>
          {/* Displaying doctor's name, location, and consultation fee */}
          <p className="available-doctorName">
            {"Dr. " + doctor.first_name + " " + doctor.last_name}
          </p>
          {/* Displaying the doctor's location */}
          <p className="available-doctorDetails">Hyderabad, India</p>
          {/* Displaying the consultation fee at the clinic */}
          <p className="available-doctorDetails">
            500 Consultation fee at clinic
          </p>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {/* Displaying doctor's availability and a button to book an appointment */}
          <button
            //   onClick={navigateAppointment}  // Commented out as this function is not defined
            className="available-button"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

// Exporting the DoctorCard component as the default export
export default DoctorCard;
