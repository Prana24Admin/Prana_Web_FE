import React from "react";
import "./doctorProfile.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../../components/MainLayout";

const DoctorProfile = () => {
  const { id } = useParams();
  const fetchDoctorById = async () => {
    const response = await axiosInstance.get(`/doctor/${id}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["DoctorById"], fetchDoctorById);

  return (
    <MainLayout>
      <div>DoctorProfile</div>
    </MainLayout>
  );
};

export default DoctorProfile;
