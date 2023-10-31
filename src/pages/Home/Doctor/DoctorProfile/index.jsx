import React from "react";
import "./doctorProfile.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../../components/MainLayout";
import Profile from "../../../../assets/images/profile/avatar.png";
import "./doctorProfile.css";
import { CheckCircle, ChevronDown } from "lucide-react";
import DatePicker from "../../../../components/DatePicker";

const DoctorProfile = () => {
  const { id } = useParams();
  const fetchDoctorById = async () => {
    const response = await axiosInstance.get(`/doctor/${id}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["DoctorById"], fetchDoctorById);

  return (
    <MainLayout>
      {data && (
        <div className="doctorProfile-mainContainer">
          <div className="doctorProfile-leftContainer">
            <div className="doctorProfile-flexContainer">
              <img
                style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
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
            <p className="doctorProfile-header">
              Pick a time slot for doctor consultation
            </p>
            <div className="doctorProfile-boxContainer">
              <div className="doctorProfile-clinicDetails">
                <div>
                  <p className="doctorProfile-subheader">Clinic NAme</p>
                  <p className="doctorProfile-description">Clinic address</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    color: "var(--azureBlue)",
                  }}
                >
                  <p>Change Clinic</p>
                  <ChevronDown size={15} />
                </div>
              </div>
              <p className="doctorProfile-description">
                Max waiting time will be:{" "}
                <span className="doctorProfile-subheader">15mins</span>
              </p>
              <div className="doctorProfile-flexAppointment">
                <p>Clinic appointment fee</p>
                <p>123fee</p>
              </div>
            </div>
            <div className="doctorProfile-boxContainer">
              <div>
                <DatePicker />
              </div>
              <div className="doctorProfile-timeSlotContainer">
                <p className="doctorProfile-timeText">11.30</p>
                <p className="doctorProfile-timeText">11.30</p>
                <p className="doctorProfile-timeText">11.30</p>
                <p className="doctorProfile-timeText">11.30</p>
                <p className="doctorProfile-timeText">11.30</p>
                <p className="doctorProfile-timeText">11.30</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default DoctorProfile;
