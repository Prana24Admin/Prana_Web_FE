import React from "react";
import "../../../assets/css/Doctor/inner/filter.css";

import { useNavigate, useParams } from "react-router-dom";

import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import DoctorCard from "../../DoctorCard";
import CostEstimate from "../../CostEstimate";

const Available = () => {
  const navigate = useNavigate();
  const navigateAppointment = () => {
    navigate("/inner/doctor/appointment");
  };
  // const docArr = [
  //   {
  //     Name: "Dr. Ganesh Shetty",
  //     Type: "Dentist",
  //     Experience: "25 years experience overall",
  //     Place: "Kalyan Nagar,Bangalore  Dental and Orthodontic Clinic",
  //     Fee: "₹500 Consultation fee at clinic",
  //     Image:
  //       "https://imagesx.practo.com/providers/dr-ganesh-shetty-dentist-bangalore-99076776-8ead-45fd-813e-377e936f7465.jpg?i_type=t_100x100",
  //     Rating: "86%",
  //     Stories: "33 Patient Stories",
  //     Availability: " Available Today",
  //   },
  //   {
  //     Name: "Dr. Ganesh Shetty",
  //     Type: "Dentist",
  //     Experience: "25 years experience overall",
  //     Place: "Kalyan Nagar,Bangalore  Dental and Orthodontic Clinic",
  //     Fee: "₹500 Consultation fee at clinic",
  //     Image:
  //       "https://imagesx.practo.com/providers/dr-ganesh-shetty-dentist-bangalore-99076776-8ead-45fd-813e-377e936f7465.jpg?i_type=t_100x100",
  //     Rating: "86%",
  //     Stories: "33 Patient Stories",
  //     Availability: " Available Today",
  //   },
  //   {
  //     Name: "Dr. Ganesh Shetty",
  //     Type: "Dentist",
  //     Experience: "25 years experience overall",
  //     Place: "Kalyan Nagar,Bangalore  Dental and Orthodontic Clinic",
  //     Fee: "₹500 Consultation fee at clinic",
  //     Image:
  //       "https://imagesx.practo.com/providers/dr-ganesh-shetty-dentist-bangalore-99076776-8ead-45fd-813e-377e936f7465.jpg?i_type=t_100x100",
  //     Rating: "86%",
  //     Stories: "33 Patient Stories",
  //     Availability: " Available Today",
  //   },
  // ];

  const { id } = useParams();

  const fetchDoctorsBySpecialization = async () => {
    const response = await axiosInstance.get(`/doctor/specialization/${id}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery(
    ["DoctorsBySpecialization"],
    fetchDoctorsBySpecialization
  );

  return (
    <div className="available-mainContainer">
      {/* <div className="d-flex flex-row"> */}
      <div className="available-flexContainer">
        <div className="available-leftContainer">
          {/* <div className="d-flex flex-column col-lg-7"> */}
          <div>
            <p className="available-doctorsTitle">
              {data && data.doctors.length > 0
                ? `${data.doctors.length} doctors found`
                : "No doctors found"}
            </p>
            <p className="available-doctorDetails">
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
          {/* <hr /> */}
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
        <div className="available-rightContainer">
          {/* <div className="d-flex flex-column col-lg-1"></div> */}
          <div>
            <CostEstimate />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Available;
