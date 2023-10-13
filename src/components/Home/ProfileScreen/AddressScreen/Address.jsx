import React, { useContext, useState } from "react";
import Profile from "../Profile";
import "../Profile.css";
import "./Address.css";
import { MoreVertical, Plus } from "lucide-react";
import { ProfileContext } from "../../../../context/ProfileProvider";
import AddressModal from "./AddressModal";

const Address = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const { data } = useContext(ProfileContext);

  return (
    <Profile>
      <div className="address-mainContainer">
        <p className="address-header">Manage Addresses</p>
        <button onClick={() => setShow(!show)} className="address-addContainer">
          <Plus size={20} color="#0f382c" />
          <p className="address-addText">Add A new address</p>
        </button>
        {data && Object.keys(data.address).length > 1 ? (
          <div className="address-addressContainer">
            <div className="address-flexTextAlignContainer">
              <p className="address-titleText">{data.address.place}</p>
              <MoreVertical
                style={{ cursor: "pointer" }}
                onClick={() => {
                  selectedDropdown === null
                    ? setSelectedDropdown(
                        data.address.street +
                          data.address.city +
                          data.address.pinCode
                      )
                    : setSelectedDropdown(null);
                }}
                size={20}
              />
              {selectedDropdown ===
                data.address.street +
                  data.address.city +
                  data.address.pinCode && (
                <div className="address-dropdownContainer">
                  <p className="address-dropdownText" onClick={() => {}}>
                    Edit
                  </p>
                  <p
                    onClick={() => {
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
        ) : (
          <p>No addresses</p>
        )}
        {data &&
          data.additional_address &&
          data.additional_address.map((address) => (
            <div
              key={address.street + address.city + address.pinCode}
              className="address-addressContainer"
            >
              <div className="address-flexTextAlignContainer">
                <p className="address-titleText">{address.place}</p>
                <MoreVertical
                  style={{ cursor: "pointer", position: "relative" }}
                  onClick={() => {
                    selectedDropdown === null
                      ? setSelectedDropdown(
                          address.street + address.city + address.pinCode
                        )
                      : setSelectedDropdown(null);
                  }}
                  size={20}
                />
                {selectedDropdown ===
                  address.street + address.city + address.pinCode && (
                  <div className="address-dropdownContainer">
                    <p
                      className="address-dropdownText"
                      onClick={() => {
                        setSelectedDropdown(null);
                      }}
                    >
                      Edit
                    </p>

                    <p
                      className="address-dropdownText"
                      onClick={() => {
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
      </div>
      {show && <AddressModal show={show} handleClose={handleClose} />}
    </Profile>
  );
};

export default Address;
