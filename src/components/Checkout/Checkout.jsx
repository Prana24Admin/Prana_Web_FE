import React, { useState } from "react";
import "./checkout.css";
import { Accordion, Dropdown, DropdownButton } from "react-bootstrap";
import { ChevronDown, IndianRupee, Radio, Trash2 } from "lucide-react";
import image from "../../assets/images/lab/med/innermed-img1.png";
import Loader from "../loader";
import { useMutation } from "@tanstack/react-query";
import { handleRefetchCartItems } from "../../libs/queryFunctions";

const Checkout = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [addressDropdown, setAddressDropdown] = useState(false);
  const [orderDropdown, setOrderDropdown] = useState(false);
  const [paymentDropdown, setPaymentDropdown] = useState(false);

  const handleQuantity = async (product) => {
    // const response = await axiosInstance.post("/cart", {
    //   quantity: product.quantity,
    //   product_id: product.productId,
    // });
    // if (response.status === 400) {
    //   toast.error("Try again");
    // }
    // return response.data;
  };

  const { mutate, isLoading } = useMutation(
    (product) => {
      return handleQuantity(product);
    },
    {
      onSuccess: () => {
        return handleRefetchCartItems();
      },
    }
  );

  return (
    <div className="checkout-mainContainer">
      <div className="checkout-boxLeftContainer">
        <div className="checkout-borderContainer">
          <div
            className="checkout-flexContainer"
            onClick={() => setLoginDropdown(!loginDropdown)}
          >
            <p className="checkout-accordianHeader">Login</p>
            <ChevronDown size={25} />
          </div>
          {loginDropdown && (
            <div className="checkout-dropdownContainer">
              <div className="checkout-flex">
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  Phone
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  12345678990
                </p>
              </div>
              <p className="checkout-button">Continue Checkout</p>
            </div>
          )}
        </div>
        <div className="checkout-borderContainer">
          <div
            className="checkout-flexContainer"
            onClick={() => setAddressDropdown(!addressDropdown)}
          >
            <p className="checkout-accordianHeader">delivery address</p>
            <ChevronDown size={25} />
          </div>
          {addressDropdown && (
            <div className="checkout-dropdownContainer">
              <div className="checkout-flex">
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  Phone
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  12345678990
                </p>
              </div>
              <p className="checkout-button">Continue Checkout</p>
            </div>
          )}
        </div>
        <div className="checkout-borderContainer">
          <div
            className="checkout-flexContainer"
            onClick={() => setOrderDropdown(!orderDropdown)}
          >
            <p className="checkout-accordianHeader">order</p>
            <ChevronDown size={25} />
          </div>
          {orderDropdown && (
            <div className="checkout-dropdownContainer">
              <div className="checkout-justifyContainer">
                <div className="checkout-flex">
                  <img className="checkout-orderImage" src={image} alt="sasa" />
                  <div>
                    <p className="checkout-accordianHeader">Product name</p>
                    <p>product description</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.25rem",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "400",
                          color: "#7b7b7b",
                          textDecoration: "line-through",
                        }}
                      >
                        ₹333
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          color: "#000",
                        }}
                      >
                        ₹666
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="checkout-flexCenter">
                    <Trash2 size={15} />
                    <p style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                      Remove
                    </p>
                  </div>
                  <div
                    className="cart-quantityContainer"
                    onClick={() => setToggleDropDown(!toggleDropDown)}
                  >
                    {isLoading ? (
                      <div className="cart-loaderContainer">
                        <Loader />
                      </div>
                    ) : (
                      <>
                        <p className="cart-quantity">
                          Qty:
                          <span style={{ fontWeight: "bold" }}>1</span>
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
                        {Array.from(
                          { length: 20 },
                          (_, index) => index + 1
                        ).map((number) => (
                          <div key={number} className="cart-dropDownQuantity">
                            <p>{number}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="checkout-borderContainer">
          <div
            className="checkout-flexContainer"
            onClick={() => setPaymentDropdown(!paymentDropdown)}
          >
            <p className="checkout-accordianHeader">Payment</p>
            <ChevronDown size={25} />
          </div>
          {paymentDropdown && (
            <div className="checkout-dropdownContainer">
              <label className="checkout-flex">
                <input type="radio" />
                Cash on delivery
              </label>
              <p className="checkout-button">Cofirm Order</p>
            </div>
          )}
        </div>
      </div>
      <div className="checkout-boxRightContainer">
        <div className="cart-billContainer">
          <p className="cart-titleText">Bill Summary</p>
          <div className="cart-flex">
            <p className="cart-descriptionText">Total Mrp</p>
            <p className="cart-descriptionText">₹123</p>
          </div>
          <div className="cart-flex">
            <p className="cart-descriptionText">Delivery charges</p>
            <p className="cart-descriptionText">₹324</p>
          </div>
          <div className="cart-flex">
            <p className="cart-descriptionText">Discount</p>
            <p className="cart-descriptionText">₹324</p>
          </div>
          <div className="checkout-line" />
          <div className="cart-flex">
            <p className="cart-descriptionTextDark">Cart value</p>
            <p className="cart-descriptionTextDark">₹324</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
