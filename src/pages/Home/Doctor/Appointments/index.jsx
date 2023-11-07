import React from "react";
import "./appointments.css";

import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import Profile from "../../Profile";
import Loader from "../../../../components/Loader";

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
    <Profile>
      <p className="appointments-Header">Appointments</p>
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
      {data && (
        <div className="appointments-mainContainer">
          {data.data.map((appointment) => (
            <div className="appointments-boxContainer">
              <p>{appointment.appointment_id}</p>
              <p>
                From{appointment.start_time} To {appointment.end_time}
              </p>
              <p>On {appointment.date}</p>
              <p>{appointment.consultation_fee}</p>
              <p>{appointment.is_offline}</p>
            </div>
          ))}
        </div>
      )}
    </Profile>
  );
};

export default Appointments;
