import React, { useContext, useState } from "react";
import "../Profile.css";
import "./Address.css";

import { Pencil, Plus, Trash2 } from "lucide-react";
import { ProfileContext } from "../../../../context/ProfileProvider";
import Profile from "..";
import { useDisclosure } from "@chakra-ui/react";
import Slider from "../../../../components/Slider";
import { AddressDrawer } from "../../../../components/Slider/AddressDrawer";
import address from "../../../../assets/images/VectorImages/NO_ADDRESS.png";
import {
  handleDeleteUserAdditionalAddress,
  handleDeleteUserAddress,
} from "../../../../services/profileService";

const ProfileAddress = () => {
  const { data } = useContext(ProfileContext);

  const [method, setMethod] = useState();
  const [additionalAddress, setAdditionalAddress] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Profile>
      <div className="address-mainContainer">
        <p className="address-header">Manage Addresses</p>
        <button
          ref={btnRef}
          onClick={() => {
            onOpen();
            setMethod("add");
          }}
          className="address-addContainer"
        >
          <Plus size={20} color="var(--neutralBlack)" />
          <p className="address-addText">Add an address</p>
        </button>
        {data && Object.keys(data.address).length > 1 && (
          <div className="address-addressContainer">
            <div className="address-flexTextAlignContainer">
              <p className="address-titleText">{data.address.place}</p>
              <div className="address-dropdownContainer">
                <div className="address-iconsContainer">
                  <Pencil
                    size={20}
                    onClick={() => {
                      setMethod("edit");
                      onOpen();
                    }}
                  />
                </div>
                <div className="address-iconsContainer">
                  <Trash2
                    size={20}
                    onClick={() => {
                      handleDeleteUserAddress();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="address-flexContainer">
              <p className="address-userName">{data.address.name}</p>
              <p className="address-userName">{data.address.phoneNumber}</p>
            </div>
            <div className="address-addressText">
              {data.address.houseNumber}, {data.address.street},{" "}
              {data.address.city}-{data.address.pinCode}, {data.address.state}
            </div>
          </div>
        )}
        {data &&
          data.additional_address &&
          data.additional_address.map((address) => (
            <div key={address.id} className="address-addressContainer">
              <div className="address-flexTextAlignContainer">
                <p className="address-titleText">{address.place}</p>
                <div className="address-dropdownContainer">
                  <div className="address-iconsContainer">
                    <Pencil
                      size={20}
                      onClick={() => {
                        onOpen();
                        setAdditionalAddress(address);
                        setMethod("editAdditionalAddress");
                      }}
                    />
                  </div>
                  <div className="address-iconsContainer">
                    <Trash2
                      size={20}
                      onClick={() => {
                        handleDeleteUserAdditionalAddress(data, address.id);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="address-flexContainer">
                <p className="address-userName">{address.name}</p>
                <p className="address-userName">{address.phoneNumber}</p>
              </div>
              <div className="address-addressText">
                {address.houseNumber}, {address.street}, {address.city}-
                {address.pinCode}, {address.state}
              </div>
            </div>
          ))}
        {data &&
          Object.keys(data.address).length < 1 &&
          data.additional_address.length < 1 && (
            <div className="address-imageContainer">
              <img
                style={{ width: "35%", height: "35%" }}
                src={address}
                alt="No Address Found"
              />
              <p className="address-imageText">
                No Address Found ! <span>Please Add one...</span>
              </p>
            </div>
          )}
      </div>
      <Slider
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        header={method === "add" ? "Add address" : "Edit address"}
        drawerBody={
          <AddressDrawer
            method={method}
            additionalAddress={additionalAddress}
            onClose={onClose}
          />
        }
      />
    </Profile>
  );
};

export default ProfileAddress;
