import React, { useContext } from "react";
import "./doctorProfile.css";

import { useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../../components/MainLayout";
import Profile from "../../../../assets/images/profile/avatar.png";
import { CheckCircle } from "lucide-react";
import Loader from "../../../../components/Loader";
import TimeSlot from "../../../../components/Timeslot";
import { DoctorBookingContext } from "../../../../context/DoctorBookingProvider";

const DoctorProfile = () => {
  // Get the "id" parameter from the URL
  const { id } = useParams();

  const { setData } = useContext(DoctorBookingContext);

  // Define an asynchronous function to fetch doctor data by ID
  const fetchDoctorById = async () => {
    try {
      const response = await axiosInstance.get(`/doctor/${id}`);
      setData(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching doctor data");
    }
  };

  // Use the useQuery hook to manage doctor data and its state
  const {
    data: doctorData,
    isLoading,
    error,
  } = useQuery(["DoctorById"], fetchDoctorById);

  return (
    <MainLayout>
      <div className="doctorProfile-mainContainer">
        {isLoading && (
          // Show a loader while data is loading
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          // Display an error message if there's an error
          <div>
            <p>Error fetching. Try again</p>
          </div>
        )}
        {doctorData && (
          <>
            <div className="doctorProfile-leftContainer">
              <div className="doctorProfile-flexContainer">
                <img
                  style={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "cover",
                  }}
                  src={Profile}
                  alt="avatar"
                />
                <div>
                  {/* Display doctor's name, title, email, and contact information */}
                  <p className="doctorProfile-header">
                    Dr. {doctorData.first_name} {doctorData.last_name}
                  </p>
                  <p className="doctorProfile-description">
                    {doctorData.title}
                  </p>
                  <p className="doctorProfile-subheader">
                    Email:
                    <span className="doctorProfile-description">
                      {doctorData.email}
                    </span>
                  </p>
                  <p className="doctorProfile-subheader">
                    Mobile:
                    <span className="doctorProfile-description">
                      {doctorData.phone_ext} {doctorData.phone_number}
                    </span>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      margin: "0.5rem 0",
                    }}
                  >
                    <CheckCircle size={15} color="green" fill="lightGreen" />
                    <p>Medical Registration Verified</p>
                  </div>
                  <p className="doctorProfile-subheader">
                    Address:
                    <span className="doctorProfile-description">
                      42-199/1, Madhapur, Hyd
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="doctorProfile-rightContainer">
              {/* Render the TimeSlot component with the doctor's ID */}
              <TimeSlot doctorId={doctorData.id} />
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default DoctorProfile;
