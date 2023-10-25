import React, { useContext, useState } from "react";
import "./checkout.css";
import { Check, ChevronDown, Trash2 } from "lucide-react";
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
import SuccessModal from "../../../components/Modals/SucessModal";

const Checkout = () => {
  const { data, setData } = useContext(ProfileContext);
  const {
    isOpen: successIsOpen,
    onOpen: successOnOpen,
    onClose: successOnClose,
  } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const fetchCartData = async () => {
    const response = await axiosInstance.get("/cart");
    return response.data;
  };

  const { data: cartData, error } = useQuery(["cart"], fetchCartData);

  const [dropdown, setDropdown] = useState({
    addressDropdown: true,
    orderDropdown: false,
    paymentDropdown: false,
  });

  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [successOrderId, setSuccessOrderId] = useState(null);

  const [confirmation, setConfirmation] = useState({
    address: false,
    order: false,
    payment: false,
  });

  const handleAddressContinue = () => {
    if (!address) return toast.error("Select delivery address");
    else {
      setConfirmation({ ...confirmation, address: true });
      setDropdown({
        addressDropdown: false,
        orderDropdown: true,
        paymentDropdown: false,
      });
      console.log(JSON.parse(address));
    }
  };

  const handleOrderContinue = () => {};

  const placeOrder = async () => {
    if (!address) return toast.error("Select delivery address");
    if (!paymentMethod) return toast.error("Select payment method");
    else {
      let completeAddress = JSON.parse(address);
      // let coupon_code = JSON.parse(localStorage.getItem("bill"))?.selectedCoupon.code;
      const products = cartData.map((item) => {
        return item.product.uuid;
      });
      const shippingAddress = `${completeAddress.houseNumber}, ${completeAddress.street}, ${completeAddress.city}, ${completeAddress.state}, ${completeAddress.pinCode}`;
      const billingAddress = shippingAddress;

      const formData = new FormData();

      formData.append("product_ids", JSON.stringify(products));
      formData.append("shipping_address", shippingAddress);
      formData.append("billing_address", billingAddress);
      formData.append("payment_method", paymentMethod);
      // formData.append("coupon_code", coupon_code);

      const response = await axiosInstance.post("/orders", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setSuccessOrderId(response.data.uuid);
        successOnOpen();
      }

      return response.data;
    }
  };

  return (
    <MainLayout>
      <div className="checkout-mainContainer">
        <div className="checkout-boxLeftContainer">
          <div className="checkout-borderContainer">
            <div>
              <div
                className="checkout-flexContainer"
                onClick={() => {
                  setDropdown({
                    addressDropdown: !dropdown.addressDropdown,
                    orderDropdown: false,
                    paymentDropdown: false,
                  });
                }}
              >
                <div className="checkout-numberContainer">1</div>
                <p className="checkout-accordianHeader">delivery address</p>
                {address && (
                  <Check
                    size={20}
                    color="var(--crimsonPink)"
                    strokeWidth={2.5}
                  />
                )}
              </div>
              {confirmation.address && address && (
                <p className="checkout-addressDescription">{`${
                  JSON.parse(address).houseNumber
                }, ${JSON.parse(address).street}, ${
                  JSON.parse(address).city
                }, ${JSON.parse(address).state}, ${
                  JSON.parse(address).pinCode
                }`}</p>
              )}
            </div>
            {dropdown.addressDropdown && (
              <div className="checkout-dropdownContainer">
                {data && Object.keys(data.address).length > 0 && (
                  <div className="checkout-addressContainer">
                    <div className="checkout-addressFlex">
                      <input
                        type="radio"
                        name="checkout-address"
                        style={{ width: "1.1rem" }}
                        value={JSON.stringify(data.address)}
                        checked={address === JSON.stringify(data.address)}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          // console.log(address);
                        }}
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
                          value={JSON.stringify(addressItem)}
                          checked={address === JSON.stringify(addressItem)}
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
                <div className="checkout-flexButton">
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
              </div>
            )}
            {confirmation.address && (
              <button
                onClick={() => {
                  setDropdown({
                    addressDropdown: true,
                    orderDropdown: false,
                    paymentDropdown: false,
                  });
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
                  setDropdown({
                    orderDropdown: !dropdown.orderDropdown,
                    addressDropdown: false,
                    paymentDropdown: false,
                  });
                }
              }}
            >
              <div className="checkout-numberContainer">2</div>
              <p className="checkout-accordianHeader">order</p>
              {confirmation.order && (
                <Check size={20} color="var(--crimsonPink)" strokeWidth={2.5} />
              )}
            </div>
            {dropdown.orderDropdown && (
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
                    setDropdown({
                      paymentDropdown: true,
                      addressDropdown: false,
                      orderDropdown: false,
                    });
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
                  setDropdown({
                    orderDropdown: true,
                    addressDropdown: false,
                    paymentDropdown: false,
                  });
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
                  setDropdown({
                    paymentDropdown: !dropdown.paymentDropdown,
                    orderDropdown: false,
                    addressDropdown: false,
                  });
                }
              }}
            >
              <div className="checkout-numberContainer">3</div>
              <p className="checkout-accordianHeader">Payment</p>
            </div>
            {dropdown.paymentDropdown && (
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
      <SuccessModal
        isOpen={successIsOpen}
        onClose={successOnClose}
        onOpen={successOnOpen}
        id={successOrderId}
      />
    </MainLayout>
  );
};

export default Checkout;
