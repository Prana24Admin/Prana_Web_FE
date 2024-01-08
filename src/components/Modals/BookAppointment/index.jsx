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
import BookingSuccess from "../../../assets/images/Lottie/booking_success.json";
import Lottie from "lottie-react";
import { bookDoctorAppointment } from "../../../services/appointmentsService";

// BookAppointmentModal component for handling appointment booking confirmation
const BookAppointmentModal = ({
  isOpen, // Boolean indicating whether the modal is open or not
  onClose, // Function to close the modal
  doctorData, // Data about the selected doctor for the appointment
  timeSlotData, // Data about the selected time slot for the appointment
}) => {
  // React Router navigation hook
  const navigate = useNavigate();

  // State to track booking success
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingSuccessId, setBookingSuccessId] = useState("");

  // React Query hook for handling the mutation (posting booking data)
  const { mutate } = useMutation(
    (bookingData) => {
      return bookDoctorAppointment(bookingData, setBookingSuccessId);
    },
    {
      onError: () => toast.error("Failed! Try again"), // Display an error toast if mutation fails
    },
    {
      onSuccess: () => {
        setBookingSuccess(true);
      }, // Set booking success flag on successful mutation
    }
  );

  // JSX structure for rendering the modal content
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
              {/* Display selected date and time */}
              <div className="appointmentModal-container">
                <div>
                  <div className="appointmentModal-flexContainer">
                    <Calendar size={18} color="var(--ashGray)" />
                    <p className="appointmentModal-text">
                      On {formatDateToText(timeSlotData.date)}
                    </p>
                  </div>
                  {/* Allow changing date and time */}
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
                {/* Display doctor details */}
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
              {/* Display clinic details (placeholder text) */}
              <div>clinic details</div>

              {/* Button to trigger booking */}
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
            // Display a success animation upon successful booking
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
