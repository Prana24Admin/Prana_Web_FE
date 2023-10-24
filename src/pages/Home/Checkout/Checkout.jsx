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
import Bill from "../../../components/Bill";
import Slider from "../../../components/Slider";
import { AddressDrawer } from "../../../components/Slider/AddressDrawer";
import { useDisclosure } from "@chakra-ui/react";

const Checkout = () => {
  const { data, setData } = useContext(ProfileContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const fetchCartData = async () => {
    const response = await axiosInstance.get("/cart");
    return response.data;
  };

  const { data: cartData, error } = useQuery(["cart"], fetchCartData);

  const [addressDropdown, setAddressDropdown] = useState(true);
  const [orderDropdown, setOrderDropdown] = useState(false);
  const [paymentDropdown, setPaymentDropdown] = useState(false);

  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const [confirmation, setConfirmation] = useState({
    address: false,
    order: false,
    payment: false,
  });

  const handleDropdowns = (dropdown) => {};

  const handleAddressContinue = () => {
    if (!address) return toast.error("Select delivery address");
    else {
      setAddressDropdown(false);
      setConfirmation({ ...confirmation, address: true });
      setPaymentDropdown(false);
      setOrderDropdown(true);
    }
  };

  const handleOrderContinue = () => {};

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
              <div className="checkout-numberContainer">1</div>
              <p className="checkout-accordianHeader">delivery address</p>
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
                <button
                  ref={btnRef}
                  onClick={() => {
                    onOpen();
                  }}
                  className="checkout-button"
                >
                  Add address
                </button>
                <button
                  onClick={handleAddressContinue}
                  className="checkout-button"
                >
                  Continue Checkout
                </button>
              </div>
            )}
            {confirmation.address && (
              <button
                onClick={() => {
                  setAddressDropdown(true);
                  setConfirmation({ ...confirmation, address: false });
                }}
                className="checkout-changeButton"
              >
                Change
              </button>
            )}
          </div>
          <div className="checkout-borderContainer">
            <div
              className="checkout-flexContainer"
              onClick={() => {
                if (confirmation.address) {
                  setOrderDropdown(!orderDropdown);
                  setAddressDropdown(false);
                  setPaymentDropdown(false);
                }
              }}
            >
              <div className="checkout-numberContainer">2</div>
              <p className="checkout-accordianHeader">order</p>
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
                    setConfirmation({ ...confirmation, order: true });
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
            {confirmation.order && (
              <button
                onClick={() => {
                  setOrderDropdown(true);
                  setConfirmation({ ...confirmation, order: false });
                }}
                className="checkout-changeButton"
              >
                Change
              </button>
            )}
          </div>
          <div className="checkout-borderContainer">
            <div
              className="checkout-flexContainer"
              onClick={() => {
                if (confirmation.order) {
                  setPaymentDropdown(!paymentDropdown);
                  setOrderDropdown(false);
                  setAddressDropdown(false);
                }
              }}
            >
              <div className="checkout-numberContainer">3</div>
              <p className="checkout-accordianHeader">Payment</p>
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
          <Bill
            couponValue={JSON.parse(localStorage.getItem("bill")).couponValue}
            subTotal={JSON.parse(localStorage.getItem("bill")).subTotal}
          />
        </div>
      </div>
      <Slider
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        header={"Add an address"}
        drawerBody={
          <AddressDrawer
            method={"add"}
            // additionalAddress={additionalAddress}
            onClose={onClose}
          />
        }
      />
    </MainLayout>
  );
};

export default Checkout;
