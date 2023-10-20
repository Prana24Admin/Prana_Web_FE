import React, { useContext, useState } from "react";

import "../Profile.css";
import "./Address.css";
import { MoreVertical, Plus } from "lucide-react";
import { ProfileContext } from "../../../../context/ProfileProvider";
import AddressModal from "./AddressModal";
import axiosInstance from "../../../../libs/axios";
import { handleRefetchProfileData } from "../../../../libs/queryFunctions";
import Profile from "..";

const ProfileAddress = () => {
  const { data } = useContext(ProfileContext);

  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [show, setShow] = useState(false);
  const [method, setMethod] = useState();
  const [additionalAddress, setAdditionalAddress] = useState(null);

  const handleClose = () => setShow(false);
  const handleDropDown = (id) => {
    if (selectedDropdown === id) {
      setSelectedDropdown(null);
    } else {
      setSelectedDropdown(id);
    }
  };

  const handleDeleteAddress = async () => {
    const response = await axiosInstance.patch("/users/profile", {
      address: {},
    });
    handleRefetchProfileData();
    return response.data;
  };

  const handleDeleteAdditionalAddress = async (addressId) => {
    const index = data?.additional_address.findIndex(
      (address) => address.id === addressId
    );
    if (index !== -1) {
      const additionalAddress = [...data?.additional_address].filter(
        (address) => address.id !== addressId
      );
      const response = await axiosInstance.patch("/users/profile", {
        additional_address: additionalAddress,
      });
      handleRefetchProfileData();
      return response.data;
    }
  };

  return (
    <Profile>
      <div className="address-mainContainer">
        <p className="address-header">Manage Addresses</p>
        <button
          onClick={() => {
            setMethod("add");
            setShow(!show);
          }}
          className="address-addContainer"
        >
          <Plus size={20} color="var(--neutralBlack)" />
          <p className="address-addText">Add A new address</p>
        </button>
        {data && Object.keys(data.address).length > 1 && (
          <div className="address-addressContainer">
            <div className="address-flexTextAlignContainer">
              <p className="address-titleText">{data.address.place}</p>
              <MoreVertical
                style={{ cursor: "pointer" }}
                onClick={() => handleDropDown(data.address.id)}
                size={20}
              />
              {selectedDropdown === data.address.id && (
                <div className="address-dropdownContainer">
                  <p
                    className="address-dropdownText"
                    onClick={() => {
                      setMethod("edit");
                      setShow(!show);
                    }}
                  >
                    Edit
                  </p>
                  <p
                    onClick={() => {
                      handleDeleteAddress();
                      setSelectedDropdown(null);
                    }}
                    className="address-dropdownText"
                  >
                    Delete
                  </p>
                </div>
              )}
            </div>
            <div className="address-flexContainer">
              <p className="address-userName">{data.address.name}</p>
              <p className="address-userName">{data.address.phoneNumber}</p>
            </div>
            <div className="address-addressText">
              {data.address.street}, {data.address.city}-{data.address.pinCode},{" "}
              {data.address.state}
            </div>
          </div>
        )}
        {data &&
          data.additional_address &&
          data.additional_address.map((address) => (
            <div key={address.id} className="address-addressContainer">
              <div className="address-flexTextAlignContainer">
                <p className="address-titleText">{address.place}</p>
                <MoreVertical
                  style={{ cursor: "pointer", position: "relative" }}
                  onClick={() => handleDropDown(address.id)}
                  size={20}
                />

                {selectedDropdown === address.id && (
                  <div className="address-dropdownContainer">
                    <p
                      className="address-dropdownText"
                      onClick={() => {
                        setShow(!show);
                        setAdditionalAddress(address);
                        setMethod("editAdditionalAddress");
                      }}
                    >
                      Edit
                    </p>

                    <p
                      className="address-dropdownText"
                      onClick={() => {
                        handleDeleteAdditionalAddress(address.id);
                        setSelectedDropdown(null);
                      }}
                    >
                      Delete
                    </p>
                  </div>
                )}
              </div>
              <div className="address-flexContainer">
                <p className="address-userName">{address.name}</p>
                <p className="address-userName">{address.phoneNumber}</p>
              </div>
              <div className="address-addressText">
                {address.street}, {address.city}-{address.pinCode},{" "}
                {address.state}
              </div>
            </div>
          ))}
        {data &&
          Object.keys(data.address).length < 1 &&
          data.additional_address.length < 1 && (
            <p>No addresses! Add one right now</p>
          )}
      </div>
      {show && (
        <AddressModal
          show={show}
          handleClose={handleClose}
          method={method}
          additionalAddress={additionalAddress}
        />
      )}
    </Profile>
  );
};

export default ProfileAddress;
