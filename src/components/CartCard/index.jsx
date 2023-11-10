import { ChevronDown, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { handleRefetchCartItems } from "../../libs/queryFunctions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Image from "../../assets/images/doctor/doctor.png";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import RemoveModal from "../Modals/RemoveModal";
import { handleCartQuantity } from "../../services/cartService";
import Loader from "../Loader";

const CartCard = ({ cartItem, labItem = null }) => {
  const {
    isOpen: removeIsOpen,
    onOpen: removeOnOpen,
    onClose: removeOnClose,
  } = useDisclosure();

  const pathName = window.location.pathname;

  const [toggleDropDown, setToggleDropDown] = useState(false);

  const { mutate, isLoading } = useMutation(
    (product) => {
      return handleCartQuantity(product);
    },
    {
      onSuccess: () => {
        return handleRefetchCartItems();
      },
    },
    {
      onError: () => {
        return toast.error("Failed! Try again");
      },
    }
  );

  return (
    <div className="cart-Container">
      <div className="cart-card">
        <div className="cart-flexContainer">
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
          <div className="cart-productDescription">
            <p className="cart-titleText">
              {pathName.includes("lab")
                ? labItem.lab_test.name
                : cartItem.product.name}
            </p>
            <div className="cart-priceText">
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
          <div className="cart-quantityContainerFlex">
            <div className="cart-removeButtonContainer" onClick={removeOnOpen}>
              <Trash2 size={15} />
              <p className="cart-removeText">REMOVE</p>
            </div>
            {cartItem && (
              <div
                className="cart-quantityContainer"
                onClick={() => setToggleDropDown(!toggleDropDown)}
              >
                {isLoading ? (
                  <div className="cart-loaderContainer">
                    <Loader width={"1rem"} height={"1rem"} />
                  </div>
                ) : (
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
