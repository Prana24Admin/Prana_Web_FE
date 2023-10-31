import React from "react";
import MainLayout from "../../MainLayout";
import Filter from "../findDoctor/filter";
import axiosInstance from "../../../libs/axios";
import CostEstimate from "../../CostEstimate";
import { useQuery } from "@tanstack/react-query";

const DoctorNearMe = () => {
  const fetchDoctorsByZipCode = async () => {
    const zipcode = localStorage.getItem("location").split(",")[0];
    const response = await axiosInstance.get(`/doctor?zipcode=${zipcode}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery(
    ["DoctorByZipCode"],
    fetchDoctorsByZipCode
  );

  return (
    <MainLayout>
      <div>
        <Filter />
      </div>
      <div className="available-mainContainer">
        {/* <div className="d-flex flex-row"> */}
        <div className="available-flexContainer">
          <div className="available-leftContainer">
            {/* <div className="d-flex flex-column col-lg-7"> */}
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
            {/* <div className="d-flex flex-column col-lg-1"></div> */}
            <div>
              <CostEstimate />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DoctorNearMe;
