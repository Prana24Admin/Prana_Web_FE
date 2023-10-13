import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./AddressModal.css";
import Input from "../../../../Input";
import { Building, CheckCircle, Home } from "lucide-react";
import ProfileProvider, {
  ProfileContext,
} from "../../../../../context/ProfileProvider";
import axiosInstance from "../../../../../libs/axios";
import { handleRefetchProfileData } from "../../../../../libs/queryFunctions";

const AddressModal = ({ show, handleClose }) => {
  const { data } = useContext(ProfileContext);
  const [addressData, setAddressData] = useState({
    place: "",
    name: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const saveAddress = async () => {
    let response;
    if (Object.keys(data?.address) < 1) {
      response = await axiosInstance.patch("/users/profile", {
        address: addressData,
      });
      handleRefetchProfileData();
      handleClose();
      return response.data;
    } else {
      response = await axiosInstance.patch("/users/profile", {
        additional_address: [...data?.additional_address, addressData],
      });
      handleRefetchProfileData();
      handleClose();
      return response.data;
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Add an address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-bodyContainer">
          <div className="modal-iconContainer">
            <button
              onClick={() => setAddressData({ ...addressData, place: "Home" })}
              className="modal-innerIconContainer"
            >
              {addressData.place === "Home" ? (
                <CheckCircle size={16} strokeWidth={2.5} />
              ) : (
                <Home size={16} />
              )}

              <p>Home</p>
            </button>
            <button
              onClick={() => setAddressData({ ...addressData, place: "Work" })}
              className="modal-innerIconContainer"
            >
              {addressData.place === "Work" ? (
                <CheckCircle size={16} strokeWidth={2.5} />
              ) : (
                <Building size={16} />
              )}
              <p>Work</p>
            </button>
          </div>
          <div className="modal-flexContainer">
            <Input
              label="Name"
              value={addressData.name}
              onChange={(e) =>
                setAddressData({ ...addressData, name: e.target.value })
              }
            />
            <Input
              label="Phone number"
              value={addressData.phoneNumber}
              onChange={(e) =>
                setAddressData({ ...addressData, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className="modal-flexContainer">
            <Input
              label="Street"
              value={addressData.street}
              onChange={(e) =>
                setAddressData({ ...addressData, street: e.target.value })
              }
            />
            <Input
              label="City"
              value={addressData.city}
              onChange={(e) =>
                setAddressData({ ...addressData, city: e.target.value })
              }
            />
          </div>
          <div className="modal-flexContainer">
            <Input
              label="State"
              value={addressData.state}
              onChange={(e) =>
                setAddressData({ ...addressData, state: e.target.value })
              }
            />
            <Input
              label="Pincode"
              value={addressData.pinCode}
              onChange={(e) =>
                setAddressData({ ...addressData, pinCode: e.target.value })
              }
            />
          </div>
          <div className="modal-buttonsContainer">
            <button className="modal-button" onClick={handleClose}>
              Close
            </button>
            <button className="modal-button" onClick={saveAddress}>
              Save
            </button>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
};

export default AddressModal;
