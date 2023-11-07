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
        <ModalHeader fontSize={"1.25rem"} fontWeight={"medium"}>
          Booking confirmation
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>doctor</div>
          <div>consultation details</div>
          <div>clinic details</div>
          <button>Book</button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BookAppointmentModal;
