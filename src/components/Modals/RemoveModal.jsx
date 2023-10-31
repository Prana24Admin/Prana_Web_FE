import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import TruckSuccess from "../../assets/images/lab/med/innermed-img.jpg";
import { useNavigate } from "react-router-dom";
import "./RemoveModal.css";

const RemoveModal = ({ isOpen, onClose, product, onOpen, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"1.25rem"} fontWeight={"medium"}>
            Remove from Cart?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="removeModal-mainContainer">
              <img
                className="removeModal-img"
                // src={product.product.image}
                src={TruckSuccess}
                alt={product.product.name}
              />
              <div>
                <p className="removeModal-title">{product.product.name}</p>
                <p className="removeModal-price">
                  MRP :{product.product.price}
                </p>
              </div>
            </div>
            <div className="removeModal-buttonContainer">
              <button className="removeModal-removeButton">Remove</button>
              <button className="removeModal-button">Save for later</button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RemoveModal;
