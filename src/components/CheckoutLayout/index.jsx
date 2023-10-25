import React, { useContext, useState } from "react";
import "../../pages/Home/Checkout/checkout.css";
import { Check } from "lucide-react";
import toast from "react-hot-toast";
import MainLayout from "../MainLayout";
import Bill from "../Bill";
import Slider from "../Slider";
import { AddressDrawer } from "../Slider/AddressDrawer";
import { useDisclosure } from "@chakra-ui/react";
import SuccessModal from "../Modals/SucessModal";
import { ProfileContext } from "../../context/ProfileProvider";
import {
  placeHealthCareCartOrder,
  placeLabCartOrder,
} from "../../services/orderService";

const CheckoutLayout = ({ children, cartData }) => {
  const pathName = window.location.pathname;
  const { data } = useContext(ProfileContext);
  const {
    isOpen: successIsOpen,
    onOpen: successOnOpen,
    onClose: successOnClose,
  } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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

  const handlePlaceOrder = () => {
    if (pathName.includes("/lab")) {
      placeLabCartOrder(
        address,
        paymentMethod,
        cartData,
        setSuccessOrderId,
        successOnOpen
      );
    } else {
      placeHealthCareCartOrder(
        address,
        paymentMethod,
        cartData,
        setSuccessOrderId,
        successOnOpen
      );
    }
  };

  return (
    <MainLayout>
      <div className="checkout-mainContainer">
        <div className="checkout-boxLeftContainer">
          {/* ---------------Address------------------- */}
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

          {/* ---------------------------------Order----------------------------------- */}
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
                {children}
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

          {/* -------------------------------payment--------------------------- */}
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
                <p
                  className="checkout-button"
                  onClick={() => handlePlaceOrder()}
                >
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
            discount={JSON.parse(localStorage.getItem("bill")).discount}
            sampleCollectionCharges={
              JSON.parse(localStorage.getItem("bill")).sampleCollectionCharges
            }
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

export default CheckoutLayout;
