import React from "react";
import "../../../Orders/OrderDetails/OrderDetails.css";

import image from "../../../../../assets/images/profile/avatar.png";
import MainLayout from "../../../../../components/MainLayout";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../../components/Loader";
import { formatDateToText } from "../../../../../libs/dateTimeFormater";
import { fetchAppointmentById } from "../../../../../services/appointmentsService";

const AppointmentById = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery(["AppointmentByd", id], () =>
    fetchAppointmentById(id)
  );

  return (
    <MainLayout>
      <div className="orderDetails-mainContainer">
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
          <div>
            <p className="orderDetails-title">Appointment Details</p>
            <div className="orderDetails-justifyContainer">
              <div className="orderDetails-flexContainer">
                <p className="orderDetails-bodyText">
                  Appointment Booked On{" "}
                  <span className="orderDetails-idText">
                    {" "}
                    {formatDateToText(new Date(data.date), "dd MMMM yyyy")}
                  </span>
                </p>

                <div className="orderDetails-line" />
                <p className="orderDetails-bodyText">
                  Appointment Id:{" "}
                  <span className="orderDetails-idText">
                    {" "}
                    {data.appointment_id}
                  </span>
                </p>
              </div>
            </div>
            <div className="orderDetails-borderContainer">
              <div className="orderDetails-justifyContainer">
                <div className="orderDetails-borderFlexContainer">
                  <div>
                    <p className="orderDetails-header">Clinic Details</p>
                    <p className="orderDetails-bodyText">address</p>
                  </div>
                  <div>
                    <p className="orderDetails-header">Consultation Type</p>
                    <p className="orderDetails-bodyText">
                      {data.is_offline ? "offline" : "online"}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="orderDetails-bodyText">
                    <div className="orderDetails-billJustifyContainer">
                      <p>Consultation Fee:</p>
                      <p>₹{data.consultation_fee}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="orderDetails-borderContainer">
              <div className="orderDetails-justifyContainer">
                <div className="orderDetails-borderFlexContainer">
                  <img className="orderDetails-image" src={image} alt="sanju" />
                  <div>
                    <p className="orderDetails-header">Doctor Name</p>
                    <p className="orderDetails-bodyText">Specialization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AppointmentById;
