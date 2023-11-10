import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import OrderSuccess from "../../assets/images/Lottie/booking_success.json";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ isOpen, onClose, onOpen, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Lottie
              animationData={OrderSuccess}
              loop={false}
              onComplete={() => navigate(`/orders/healthcare/${id}`)}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SuccessModal;
