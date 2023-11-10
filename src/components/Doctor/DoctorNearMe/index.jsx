import React from "react";
import "../../../assets/css/Doctor/inner/filter.css";

import MainLayout from "../../MainLayout";
import { useQuery } from "@tanstack/react-query";
import DoctorsNear from "../../../assets/images/VectorImages/Doctors_near_you.png";
import { fetchDoctorsByZipCode } from "../../../services/doctorService";

const DoctorNearMe = () => {
  const { data, isLoading, error } = useQuery(
    ["DoctorByZipCode"],
    fetchDoctorsByZipCode
  );

  return (
    <MainLayout>
      <div className="available-mainContainer" style={{ paddingTop: "12rem" }}>
        <div className="available-flexContainer">
          <div className="available-leftContainer">
            <div>
              <p className="available-doctorsTitle">
                {/* {data && data.doctors.length > 0
                ? `${data.doctors.length} doctors found`
                : "No doctors found"} */}
                hello
              </p>
              <p className="available-doctorDetails">
                Book appointments with minimum wait-time & verified doctor
                details
              </p>
            </div>
            {/* <hr /> */}
            {/* {data &&
            data.doctors.length > 0 &&
            data.doctors.map((doctor) => {
              return (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  specialization={data.name}
                />
              );
            })} */}
          </div>
          <div className="available-rightContainer">
            <img
              className="available-image"
              src={DoctorsNear}
              alt="Doctors_Near_You"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DoctorNearMe;
