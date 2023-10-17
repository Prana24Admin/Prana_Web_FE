import React, { useContext, useState } from "react";
import "./checkout.css";
import { ChevronDown, Trash2 } from "lucide-react";
import image from "../../assets/images/lab/med/innermed-img1.png";
import Loader from "../loader";
import { useMutation } from "@tanstack/react-query";
import { handleRefetchCartItems } from "../../libs/queryFunctions";
import { ProfileContext } from "../../context/ProfileProvider";
import { CartContext } from "../../context/CartProvider";

const Checkout = () => {
  const { data, setData } = useContext(ProfileContext);
  const { cartData } = useContext(CartContext);

  const [toggleDropDown, setToggleDropDown] = useState(false);
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
            onClick={() => {
              setAddressDropdown(!addressDropdown);
              setOrderDropdown(false);
              setPaymentDropdown(false);
            }}
          >
            <p className="checkout-accordianHeader">delivery address</p>
            <ChevronDown size={25} />
          </div>
          {addressDropdown && (
            <div className="checkout-dropdownContainer">
              {data && Object.keys(data.address).length > 0 && (
                <div className="checkout-addressContainer">
                  <div className="checkout-addressFlex">
                    <input
                      type="radio"
                      name="checkout-address"
                      style={{ width: "1.1rem" }}
                      checked
                    />
                    <div className="checkout-addressFlexCol">
                      <p className="checkout-addressHeading">
                        {data.address.name} {data.address.phoneNumber}{" "}
                        <span className="checkout-placeBadge">
                          {data.address.place}
                        </span>
                      </p>
                      <p className="checkout-subAddress">
                        {data.address.street}, {data.address.city} -{" "}
                        {data.address.pinCode}, {data.address.state}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {data &&
                data.additional_address.length > 0 &&
                data.additional_address.map((address) => (
                  <div className="checkout-addressContainer">
                    <div className="checkout-addressFlex">
                      <input
                        type="radio"
                        name="checkout-address"
                        style={{ width: "1.1rem" }}
                      />
                      <div className="checkout-addressFlexCol">
                        <p className="checkout-addressHeading">
                          {address.name} {address.phoneNumber}{" "}
                          <span className="checkout-placeBadge">
                            {address.place}
                          </span>
                        </p>
                        <p className="checkout-subAddress">
                          {address.street}, {address.city} - {address.pinCode},{" "}
                          {address.state}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              {data &&
                Object.keys(data.address).length < 1 &&
                data.additional_address.length < 1 && (
                  <p>No addresses! Add one right now</p>
                )}
              <p
                onClick={() => {
                  setAddressDropdown(false);
                  setPaymentDropdown(false);
                  setOrderDropdown(true);
                }}
                className="checkout-button"
              >
                Continue Checkout
              </p>
            </div>
          )}
        </div>
        <div className="checkout-borderContainer">
          <div
            className="checkout-flexContainer"
            onClick={() => {
              setOrderDropdown(!orderDropdown);
              setAddressDropdown(false);
              setPaymentDropdown(false);
            }}
          >
            <p className="checkout-accordianHeader">order</p>
            <ChevronDown size={25} />
          </div>
          {orderDropdown && (
            <div className="checkout-dropdownContainer">
              {cartData &&
                cartData.length > 0 &&
                cartData.map((cartItem) => (
                  <div className="checkout-justifyContainer">
                    <div className="checkout-flex">
                      <img
                        className="checkout-orderImage"
                        src={image}
                        alt="sasa"
                      />
                      <div>
                        <p className="checkout-accordianHeader">
                          {cartItem.product.name}
                        </p>

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
                            ₹300
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",
                              fontWeight: "400",
                              color: "#000",
                            }}
                          >
                            ₹{cartItem.product.price}
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
                              <span style={{ fontWeight: "bold" }}>
                                {cartItem.quantity}
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
                            {Array.from(
                              { length: 20 },
                              (_, index) => index + 1
                            ).map((number) => (
                              <div
                                key={number}
                                className="cart-dropDownQuantity"
                              >
                                <p>{number}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              <p
                onClick={() => {
                  setPaymentDropdown(true);
                  setAddressDropdown(false);
                  setOrderDropdown(false);
                }}
                className="checkout-button"
              >
                Continue Checkout
              </p>
            </div>
          )}
        </div>
        <div className="checkout-borderContainer">
          <div
            className="checkout-flexContainer"
            onClick={() => {
              setPaymentDropdown(!paymentDropdown);
              setOrderDropdown(false);
              setAddressDropdown(false);
            }}
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
