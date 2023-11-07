import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import "./bookAppointment.css";
import { Calendar, Timer } from "lucide-react";
import Image from "../../../assets/images/doctor/clinic/dentist.jpg";
import { formatDate, formatTime } from "../../../libs/dateTimeFormater";

const BookAppointmentModal = ({
  isOpen,
  onClose,
  doctorData,
  timeSlotData,
}) => {
  const navigate = useNavigate();

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="appointmentModal-header">
          Booking confirmation
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {doctorData && timeSlotData && (
            <div>
              <div className="appointmentModal-container">
                <div>
                  <div className="appointmentModal-flexContainer">
                    <Calendar size={18} color="var(--ashGray)" />
                    <p className="appointmentModal-text">
                      On {timeSlotData.date}
                    </p>
                  </div>
                  <p className="appointmentModal-changeText">
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
              <div className="appointmentModal-line" />
              <button className="appointmentModal-button">Book Now</button>
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BookAppointmentModal;
