import React, { useContext, useState } from "react";
import Profile from "../Profile";
import "../Profile.css";
import "./Address.css";
import { MoreVertical, Plus } from "lucide-react";
import { ProfileContext } from "../../../../context/ProfileProvider";
import AddressModal from "./AddressModal";

const Address = () => {
  const [dropdown, setDropdown] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <p className="address-titleText">Home</p>
              <MoreVertical
                style={{ cursor: "pointer", position: "relative" }}
                onClick={() => setDropdown(!dropdown)}
                size={20}
              />
              {dropdown && (
                <div className="address-dropdownContainer">
                  <p className="address-dropdownText">Edit</p>

                  <p className="address-dropdownText">Delete</p>
                </div>
              )}
            </div>
            <div className="address-flexContainer">
              <p className="address-userName">Sanjay</p>
              <p className="address-userName">123456789</p>
            </div>
            <div className="address-addressText">
              <p>42-199/1,AnjaiahNaga,JagathgiriGutta</p>
            </div>
          </div>
        ) : (
          <p>No addresses</p>
        )}
      </div>
      {show && <AddressModal show={show} handleClose={handleClose} />}
    </Profile>
  );
};

export default Address;
