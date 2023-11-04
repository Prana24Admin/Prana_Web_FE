import React from "react";
import "../../../assets/css/Doctor/inner/filter.css";

import { useNavigate, useParams } from "react-router-dom";

import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import DoctorCard from "../../DoctorCard";
import CostEstimate from "../../CostEstimate";
import doctors from "../../../assets/images/VectorImages/NO_DOCTORS.png";
import Loader from "../../Loader";

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
      <div className="available-flexContainer">
        <div className="available-leftContainer">
          <p className="available-doctorDetails">
            Book appointments with minimum wait-time & verified doctor details
          </p>
          <div>
            <p className="available-doctorsTitle">
              {isLoading && (
                <div className="fullContainer">
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
