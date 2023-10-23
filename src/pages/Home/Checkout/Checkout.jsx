import React, { useContext, useState } from "react";
import "./checkout.css";
import { ChevronDown, Trash2 } from "lucide-react";
import image from "../../../assets/images/lab/med/innermed-img1.png";
import Loader from "../../../components/loader";
import { useMutation, useQuery } from "@tanstack/react-query";
import { handleRefetchCartItems } from "../../../libs/queryFunctions";
import { ProfileContext } from "../../../context/ProfileProvider";
import toast from "react-hot-toast";
import axiosInstance from "../../../libs/axios";
import MainLayout from "../../../components/MainLayout";
import CartCard from "../../../components/CartCard";

const Checkout = () => {
  const { data, setData } = useContext(ProfileContext);

  const fetchCartData = async () => {
    const response = await axiosInstance.get("/cart");
    return response.data;
  };

  const { data: cartData, error } = useQuery(["cart"], fetchCartData);

  const [addressDropdown, setAddressDropdown] = useState(false);
  const [orderDropdown, setOrderDropdown] = useState(false);
  const [paymentDropdown, setPaymentDropdown] = useState(false);

  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleAddressContinue = () => {
    if (!address) return toast.error("Select delivery address");
    else {
      setAddressDropdown(false);
      setPaymentDropdown(false);
      setOrderDropdown(true);
    }
  };

  const placeOrder = async () => {
    if (!address) return toast.error("Select delivery address");
    if (!paymentMethod) return toast.error("Select payment method");
    else {
      let completeAddress;
      const products = cartData.map((item) => {
        return item.product.uuid;
      });
      if (address === data.address.id) completeAddress = data.address;
      else {
        const index = data?.additional_address.findIndex(
          (additionalAddress) => additionalAddress.id === address
        );
        if (index !== -1) completeAddress = data?.additional_address[index];
      }
      const shippingAddress = `${completeAddress.street}, ${completeAddress.city}, ${completeAddress.state}, ${completeAddress.pinCode}`;
      const billingAddress = shippingAddress;

      const formData = new FormData();

      formData.append("product_ids", JSON.stringify(products));
      formData.append("shipping_address", shippingAddress);
      formData.append("billing_address", billingAddress);
      formData.append("payment_method", paymentMethod);

      const response = await axiosInstance.post("/orders", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    }
  };

  return (
    <MainLayout>
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
              <ChevronDown size={25} color="var(--neutralBlack)" />
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
                        value={data.address.id}
                        checked={address === data.address.id}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <div className="checkout-addressFlexCol">
                        <p className="checkout-addressHeading">
                          {data.address.name} {data.address.phoneNumber}{" "}
                          <span className="checkout-placeBadge">
                            {data.address.place}
                          </span>
                        </p>
                        <p className="checkout-subAddress">
                          {data.address.houseNumber}, {data.address.street},{" "}
                          {data.address.city} - {data.address.pinCode},{" "}
                          {data.address.state}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {data &&
                  data.additional_address.length > 0 &&
                  data.additional_address.map((addressItem) => (
                    <div
                      key={addressItem.id}
                      className="checkout-addressContainer"
                    >
                      <div className="checkout-addressFlex">
                        <input
                          type="radio"
                          name="checkout-address"
                          style={{ width: "1.1rem" }}
                          value={addressItem.id}
                          checked={address === addressItem.id}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <div className="checkout-addressFlexCol">
                          <p className="checkout-addressHeading">
                            {addressItem.name} {addressItem.phoneNumber}{" "}
                            <span className="checkout-placeBadge">
                              {addressItem.place}
                            </span>
                          </p>
                          <p className="checkout-subAddress">
                            {addressItem.houseNumber}, {addressItem.street},{" "}
                            {addressItem.city} - {addressItem.pinCode},{" "}
                            {addressItem.state}
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
                <p onClick={handleAddressContinue} className="checkout-button">
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
              <ChevronDown size={25} color="var(--neutralBlack)" />
            </div>
            {orderDropdown && (
              <div className="checkout-dropdownContainer">
                {cartData &&
                  cartData.length > 0 &&
                  cartData.map((cartItem) => (
                    <div
                      key={cartItem.uuid}
                      style={{ marginBottom: "0.75rem" }}
                    >
                      <CartCard cartItem={cartItem} />
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
              <ChevronDown size={25} color="var(--neutralBlack)" />
            </div>
            {paymentDropdown && (
              <div className="checkout-dropdownContainer">
                <label className="checkout-flex">
                  <input
                    type="radio"
                    name="paymentMode"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cash on delivery
                </label>
                <p className="checkout-button" onClick={placeOrder}>
                  Confirm Order
                </p>
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
    </MainLayout>
  );
};

export default Checkout;
