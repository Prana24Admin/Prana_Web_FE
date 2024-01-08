import {
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

// RemoveModal component for confirming removal of an item from the cart
const RemoveModal = ({
  isOpen, // Boolean indicating whether the modal is open or not
  onClose, // Function to close the modal
  product, // Product data (cart item or lab test)
  labTest = null, // Lab test data (optional, only for lab cart)
  pathName, // Path indicating the type of cart (e.g., "/lab")
}) => {
  // React Query hook for handling the mutation (adding to wishlist)
  const { mutate } = useMutation(
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

  // JSX structure for rendering the modal content
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* Modal header */}
          <ModalHeader fontSize={"1.25rem"} fontWeight={"medium"}>
            Remove from Cart?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Main container for item details and image */}
            <div className="removeModal-mainContainer">
              <img
                loading="lazy"
                className="removeModal-img"
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
            {/* Container for buttons (Remove and Save for Later) */}
            <div className="removeModal-buttonContainer">
              {/* Remove button */}
              <button
                onClick={() =>
                  pathName.includes("/lab")
                    ? removeLabCartItem(labTest.uuid)
                    : removeCartItem(product.uuid, onClose)
                }
                className="removeModal-removeButton"
              >
                Remove
              </button>
              {/* Save for Later button (only for regular cart, not lab cart) */}
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
