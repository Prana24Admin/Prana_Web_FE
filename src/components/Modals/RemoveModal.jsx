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
import axiosInstance from "../../libs/axios";
import toast from "react-hot-toast";
import { handleRefetchCartItems } from "../../libs/queryFunctions";
import { useMutation } from "@tanstack/react-query";

const RemoveModal = ({ isOpen, onClose, product }) => {
  const navigate = useNavigate();

  const removeCartItem = async (productId) => {
    const response = await axiosInstance.delete(`/cart/${productId}`);
    if (response.status === 200) {
      toast.success("Product removed");
      localStorage.removeItem(productId);
      handleRefetchCartItems();
      onClose();
    }
    return response.data;
  };

  const addToWishlist = async (productId) => {
    const response = await axiosInstance.post("/wishlist", {
      product_id: productId,
      quantity: 1,
    });

    return response.data;
  };

  const { mutate, isLoading } = useMutation(
    (productId) => {
      return addToWishlist(productId);
    },
    {
      onSuccess: () => {
        toast.success("Added to wishlist");
        removeCartItem(product.uuid);
      },
    }
  );

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
              <button
                onClick={() => removeCartItem(product.uuid)}
                className="removeModal-removeButton"
              >
                Remove
              </button>
              <button
                onClick={() => mutate(product.product.uuid)}
                className="removeModal-button"
              >
                Save for later
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RemoveModal;
