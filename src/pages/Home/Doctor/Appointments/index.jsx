import React from "react";
import MainLayout from "../../../../components/MainLayout";
import "./appointments.css";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";

const Appointments = () => {
  const fetchAllAppointments = async () => {
    const response = await axiosInstance.get("/users/appointment/");
    return response.data;
  };
  const { data, isLoading, error } = useQuery(
    ["Appointments"],
    fetchAllAppointments
  );
  return (
    <MainLayout>
      <div>Appointments</div>
    </MainLayout>
  );
};

export default Appointments;
