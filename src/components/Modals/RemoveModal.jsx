import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import TruckSuccess from "../../assets/images/lab/med/innermed-img.jpg";
import "./RemoveModal.css";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { removeCartItem } from "../../services/cartService";
import { addToWishlist } from "../../services/wishlistService";
import { removeLabCartItem } from "../../services/labCartService";

const RemoveModal = ({
  isOpen,
  onClose,
  product,
  labTest = null,
  pathName,
}) => {
  const { mutate, isLoading } = useMutation(
    (productId) => {
      return addToWishlist(productId);
    },
    {
      onSuccess: () => {
        toast.success("Added to wishlist");
        removeCartItem(product.uuid, onClose);
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
                loading="lazy"
                className="removeModal-img"
                // src={product.product.image}
                src={TruckSuccess}
                alt={
                  pathName.includes("/lab")
                    ? labTest.lab_test.name
                    : product.product.name
                }
              />
              <div>
                <p className="removeModal-title">
                  {pathName.includes("/lab")
                    ? labTest.lab_test.name
                    : product.product.name}
                </p>
                <p className="removeModal-price">
                  MRP :
                  {pathName.includes("/lab")
                    ? labTest.lab_test.price
                    : product.product.price}
                </p>
              </div>
            </div>
            <div className="removeModal-buttonContainer">
              <button
                onClick={() =>
                  pathName.includes("/lab")
                    ? removeLabCartItem(labTest.uuid)
                    : removeCartItem(product.uuid)
                }
                className="removeModal-removeButton"
              >
                Remove
              </button>
              {labTest === null && (
                <button
                  onClick={() => mutate(product.product.uuid)}
                  className="removeModal-button"
                >
                  Save for later
                </button>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RemoveModal;
