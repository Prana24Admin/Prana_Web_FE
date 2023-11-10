import React from "react";
import "../../../assets/css/Doctor/inner/filter.css";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DoctorCard from "../../DoctorCard";
import Loader from "../../Loader";
import doctors from "../../../assets/images/VectorImages/NO_DOCTORS.png";
import DoctorsNear from "../../../assets/images/VectorImages/Doctors_near_you.png";
import { fetchDoctorsBySpecialization } from "../../../services/doctorService";

const Available = () => {
  // React Router useParams hook to get parameters from the URL
  const { id } = useParams();

  // UseQuery hook to fetch and manage data, loading, and error states
  const { data, isLoading, error } = useQuery(
    ["DoctorsBySpecialization", id],
    () => fetchDoctorsBySpecialization(id)
  );

  // JSX structure for the Available component
  return (
    <div className="available-mainContainer">
      <div className="available-flexContainer">
        {/* Left container for doctor details */}
        <div className="available-leftContainer">
          {/* Information about booking appointments */}
          <p className="available-doctorDetails">
            Book appointments with minimum wait-time & verified doctor details
          </p>
          <div>
            {/* Doctors title based on data loading and availability */}
            <p className="available-doctorsTitle">
              {isLoading && (
                <div className="fullContainer">
                  {/* Loader component during data loading */}
                  <Loader width={"4rem"} height={"4rem"} />
                </div>
              )}
              {error && (
                <div>
                  <p>Error fetching. Try again</p>
                </div>
              )}
              {data && data.doctors.length > 0 ? (
                `${data.doctors.length} doctors found`
              ) : (
                <div className="available-imageContainer">
                  {/* Image for no doctors found */}
                  <img
                    style={{ width: "50%" }}
                    src={doctors}
                    alt="No Doctors found Near you !"
                  />
                  <p className="available-imageDescription">
                    Sorry! No Doctors found Near you{" "}
                  </p>
                </div>
              )}
            </p>
          </div>
          {/* DoctorCard components for displaying individual doctor details */}
          {data &&
            data.doctors.length > 0 &&
            data.doctors.map((doctor) => {
              return (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  specialization={data.name}
                />
              );
            })}
        </div>
        {/* Right container for the image */}
        <div className="available-rightContainer">
          <img
            className="available-image"
            src={DoctorsNear}
            alt="Doctors_Near_You"
          />
        </div>
      </div>
    </div>
  );
};

export default Available;
