import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import "./bookAppointment.css";
import { Calendar, Timer } from "lucide-react";
import Image from "../../../assets/images/doctor/clinic/dentist.jpg";
import { formatDateToText, formatTime } from "../../../libs/dateTimeFormater";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axios";
import BookingSuccess from "../../../assets/images/Lottie/booking_success.json";
import Lottie from "lottie-react";

const BookAppointmentModal = ({
  isOpen,
  onClose,
  doctorData,
  timeSlotData,
}) => {
  const navigate = useNavigate();

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingSuccessId, setBookingSuccessId] = useState("");

  const postBookingData = async (bookingData) => {
    const consultationType = bookingData.type === "offline" ? true : false;
    console.log(bookingData);
    const response = await axiosInstance.post("/users/appointment/", {
      date: bookingData.date,
      timeslot_id: bookingData.timeslot_id,
      is_offline: consultationType,
    });
    if (response.status === 201 || response.status === 200) {
      setBookingSuccessId(response.data.uuid);
      setBookingSuccess(true);
    }
    return response.data;
  };

  const { mutate, isLoading } = useMutation(
    (bookingData) => {
      return postBookingData(bookingData);
    },
    {
      onError: () => toast.error("Failed! Try again"),
    },
    {
      onSuccess: () => setBookingSuccess(true),
    }
  );

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        {!bookingSuccess && (
          <ModalHeader className="appointmentModal-header">
            Booking confirmation
          </ModalHeader>
        )}
        {!bookingSuccess && <ModalCloseButton />}
        <ModalBody>
          {doctorData && timeSlotData && !bookingSuccess && (
            <div>
              <div className="appointmentModal-container">
                <div>
                  <div className="appointmentModal-flexContainer">
                    <Calendar size={18} color="var(--ashGray)" />
                    <p className="appointmentModal-text">
                      On {formatDateToText(timeSlotData.date)}
                    </p>
                  </div>
                  <p
                    className="appointmentModal-changeText"
                    onClick={() => onClose()}
                  >
                    Change Date & Time
                  </p>
                </div>
                <div className="appointmentModal-flexContainer">
                  <Timer size={18} color="var(--ashGray)" />
                  <p className="appointmentModal-text">
                    From {formatTime(timeSlotData.start_time)} -{" "}
                    {formatTime(timeSlotData.end_time)}
                  </p>
                </div>
              </div>
              <div className="appointmentModal-line" />
              <div>
                <div className="appointmentModal-doctorFlexContainer">
                  <img
                    className="appointmentModal-Image"
                    src={Image}
                    alt="Doctor_Image"
                  />
                  <div>
                    <p className="appointmentModal-doctorText">
                      Dr. {doctorData.first_name} {doctorData.last_name}
                    </p>
                    <p className="appointmentModal-text">{doctorData.title}</p>
                  </div>
                </div>
              </div>
              <div className="appointmentModal-line" />
              <div>clinic details</div>

              <button
                onClick={() =>
                  mutate({
                    date: timeSlotData.date,
                    timeslot_id: timeSlotData.uuid,
                    is_offline: timeSlotData.type,
                  })
                }
                className="appointmentModal-button"
              >
                Book Now
              </button>
            </div>
          )}
          {bookingSuccess && (
            <Lottie
              animationData={BookingSuccess}
              loop={false}
              onComplete={() => navigate(`/appointments/${bookingSuccessId}`)}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BookAppointmentModal;
