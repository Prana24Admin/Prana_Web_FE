import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor, specialization }) => {
  const navigate = useNavigate();
  return (
    <div
      className="available-flexCard"
      onClick={() => navigate(`/doctor/profile/${doctor.uuid}`)}
    >
      <div className="available-cardContainer">
        <div>
          <img
            loading="lazy"
            className="available-doctorImage"
            src={doctor.image}
            alt=""
          />
          <p className="type">{specialization}</p>
        </div>
        <div>
          <p className="available-doctorName">
            {"Dr. " + doctor.first_name + " " + doctor.last_name}
          </p>
          {/* <p className="available-doctorDetails">
          {item.Experience}
        </p> */}
          <p className="available-doctorDetails">Hyderabad, India</p>
          <p className="available-doctorDetails">
            {/* {doctor.consultation_fee} */}
            500 Consultation fee at clinic
          </p>
          {/* <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.5rem",
              borderRadius: "5px",
              background: "var(--cloudGray)",
            }}
          >
            <ThumbsUp size={18} />
            <p>{item.Rating}</p>
          </div>
          <p className="available-storiesText">{item.Stories}</p>
        </div> */}
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
          {/* <p
          className="available-doctorName"
          style={{ color: "green" }}
        >
          {item.Availability}
        </p> */}
          <button
            //   onClick={navigateAppointment}
            className="available-button"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
