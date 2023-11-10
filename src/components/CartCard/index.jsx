import React, { useState } from "react";
import "../../pages/Home/Cart/cart.css";

import { ChevronDown, Trash2 } from "lucide-react";

import { handleRefetchCartItems } from "../../libs/queryFunctions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Image from "../../assets/images/doctor/doctor.png";

import { useDisclosure } from "@chakra-ui/react";

import RemoveModal from "../Modals/RemoveModal";
import Loader from "../Loader";
import { handleCartQuantity } from "../../services/cartService";

const CartCard = ({ cartItem, labItem = null }) => {
  // State and functions for managing the remove modal state
  const {
    isOpen: removeIsOpen,
    onOpen: removeOnOpen,
    onClose: removeOnClose,
  } = useDisclosure();

  // Getting the current pathname from the window location
  const pathName = window.location.pathname;

  // State and function for managing the dropdown toggle state
  const [toggleDropDown, setToggleDropDown] = useState(false);

  // React Query mutation for handling cart quantity updates
  const { mutate, isLoading } = useMutation(
    (product) => {
      return handleCartQuantity(product);
    },
    {
      onSuccess: () => {
        return handleRefetchCartItems();
      },
      onError: () => {
        return toast.error("Failed! Try again");
      },
    }
  );

  // JSX structure for rendering the CartCard component
  return (
    <div className="cart-Container">
      <div className="cart-card">
        <div className="cart-flexContainer">
          {/* Image for the cart item */}
          <img
            loading="lazy"
            className="cart-Image"
            src={Image}
            alt={
              pathName.includes("/lab")
                ? labItem.lab_test.name
                : cartItem.product.name
            }
          />

          {/* Product description and price */}
          <div className="cart-productDescription">
            <p className="cart-titleText">
              {/* Displaying lab test name for lab items, otherwise product name */}
              {pathName.includes("lab")
                ? labItem.lab_test.name
                : cartItem.product.name}
            </p>
            <div className="cart-priceText">
              {/* Displaying discounted price and original price with strikethrough */}
              <p className="cart-discountText">
                ₹
                {pathName.includes("/lab")
                  ? (
                      labItem.lab_test.price -
                      labItem.lab_test.price * (labItem.lab_test.discount / 100)
                    ).toFixed(2)
                  : cartItem.product.price}
              </p>
              <span className="cart-linethrough">
                ₹
                {pathName.includes("/lab")
                  ? labItem.lab_test.price
                  : cartItem.product.price}
              </span>
            </div>
          </div>

          {/* Container for quantity, remove button, and dropdown */}
          <div className="cart-quantityContainerFlex">
            {/* Remove button */}
            <div className="cart-removeButtonContainer" onClick={removeOnOpen}>
              <Trash2 size={15} />
              <p className="cart-removeText">REMOVE</p>
            </div>

            {/* Quantity dropdown */}
            {cartItem && (
              <div
                className="cart-quantityContainer"
                onClick={() => setToggleDropDown(!toggleDropDown)}
              >
                {isLoading ? (
                  // Display loader while updating quantity
                  <div className="cart-loaderContainer">
                    <Loader width={"1rem"} height={"1rem"} />
                  </div>
                ) : (
                  // Display current quantity and dropdown icon
                  <>
                    <p className="cart-quantity">
                      Qty:
                      <span style={{ fontWeight: "bold" }}>
                        {" " + cartItem.quantity}
                      </span>
                    </p>
                    <div className="cart-chevronIcon">
                      <ChevronDown
                        size={18}
                        strokeWidth={2.5}
                        color="#0e382c"
                      />
                    </div>
                  </>
                )}

                {/* Dropdown with quantity options */}
                {toggleDropDown && (
                  <div className="cart-dropdown">
                    {Array.from({ length: 20 }, (_, index) => index + 1).map(
                      (number) => (
                        <div
                          key={number}
                          onClick={() =>
                            mutate({
                              quantity: number,
                              productId: cartItem.product.uuid,
                            })
                          }
                          className="cart-dropDownQuantity"
                        >
                          <p>{number}</p>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Remove modal for confirmation */}
        <RemoveModal
          product={!pathName.includes("/lab") && cartItem}
          isOpen={removeIsOpen}
          onClose={removeOnClose}
          onOpen={removeOnOpen}
          labTest={labItem}
          pathName={pathName}
        />
      </div>
    </div>
  );
};

export default CartCard;
