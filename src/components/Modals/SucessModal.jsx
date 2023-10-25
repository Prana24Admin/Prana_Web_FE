import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import TruckSuccess from "../../assets/images/Lottie/TruckSucess.json";
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
              animationData={TruckSuccess}
              loop={false}
              onComplete={() => navigate(`/orders/${id}`)}
              //   style={{ width: "20rem", height: "20rem" }}
            />
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: "600",
                color: "var(--ashGray)",
                marginBottom: "1rem",
              }}
            >
              Order placed successfully!
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SuccessModal;
