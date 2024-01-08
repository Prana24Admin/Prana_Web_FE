import React from "react";
import "./appointments.css";

import { useQuery } from "@tanstack/react-query";
import Profile from "../../Profile";
import Loader from "../../../../components/Loader";
import profile from "../../../../assets/images/profile/avatar.png";
import {
  formatDateToText,
  formatTime,
} from "../../../../libs/dateTimeFormater";
import { useNavigate } from "react-router-dom";
import { fetchAllAppointments } from "../../../../services/appointmentsService";

const Appointments = () => {
  const navigate = useNavigate();

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
            <div key={appointment.uuid} className="appointments-boxContainer">
              <div className="appointments-justifyContainer">
                <div>
                  <p className="appointments-titleText">
                    Appointment Date & Time
                  </p>
                  <p className="appointments-descriptionText">
                    On {formatDateToText(appointment.date)},{" "}
                    {formatTime(appointment.start_time)} -{" "}
                    {formatTime(appointment.end_time)}
                  </p>
                </div>
                <div className="appointments-flexColumn">
                  <div className="appointments-headerFlex">
                    <p className="appointments-titleText">Appointment Id: </p>
                    <p className="appointments-descriptionText">
                      {appointment.appointment_id}
                    </p>
                  </div>
                  <p
                    className="appointments-viewText"
                    onClick={() =>
                      navigate(`/appointments/${appointment.uuid}`)
                    }
                  >
                    View Appointment Details
                  </p>
                </div>
              </div>
              <div className="appointments-separator" />
              <div className="appointments-detailsContainer">
                <div className="appointments-flexContainer">
                  <div>
                    <img
                      className="appointments-image"
                      src={appointment.image}
                      alt="Avatar"
                    />
                  </div>

                  <div>
                    <p className="appointments-doctorTitle">
                      {appointment.doctor.first_name}{" "}
                      {appointment.doctor.last_name}
                    </p>
                    <p className="appointments-titleText">Specialization</p>
                  </div>
                </div>
                <div>
                  <p className="appointments-titleText">
                    Consultation Fee:
                    <span className="appointments-consultationText">
                      {" "}
                      ₹{appointment.consultation_fee}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Profile>
  );
};

export default Appointments;
