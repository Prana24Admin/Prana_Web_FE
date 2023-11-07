import React from "react";
import "./doctorProfile.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../../components/MainLayout";
import Profile from "../../../../assets/images/profile/avatar.png";
import "./doctorProfile.css";
import { CheckCircle } from "lucide-react";
import Loader from "../../../../components/Loader";
import TimeSlot from "../../../../components/Timeslot";

const DoctorProfile = () => {
  const { id } = useParams();
  const fetchDoctorById = async () => {
    const response = await axiosInstance.get(`/doctor/${id}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["DoctorById"], fetchDoctorById);

  return (
    <MainLayout>
      <div className="doctorProfile-mainContainer">
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
        {data && (
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
                  <p className="doctorProfile-header">
                    Dr. {data.first_name} {data.last_name}
                  </p>
                  <p className="doctorProfile-description">{data.title}</p>
                  <p className="doctorProfile-subheader">
                    Email:
                    <span className="doctorProfile-description">
                      {data.email}
                    </span>
                  </p>
                  <p className="doctorProfile-subheader">
                    Mobile:
                    <span className="doctorProfile-description">
                      {data.phone_ext} {data.phone_number}
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
                      42-199/1,madhapur,Hyd
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="doctorProfile-rightContainer">
              <TimeSlot doctorId={data.id} />
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default DoctorProfile;
