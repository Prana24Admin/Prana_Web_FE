import React from "react";
import MainLayout from "../../../../../components/MainLayout";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import Profile from "../../../Profile";

const AppointmentById = () => {
  const { id } = useParams();
  const fetchAppointmentById = async () => {
    const response = await axiosInstance.get(`/users/appointment/${id}`);
    return response.data;
  };
  const { data, isLoading, error } = useQuery(
    ["AppointmentByd"],
    fetchAppointmentById
  );
  return (
    <Profile>
      <p>sanjay</p>
    </Profile>
  );
};

export default AppointmentById;
