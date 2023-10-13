import React, { useState } from "react";
import Profile from "../Profile";
import "../Profile.css";
import "./Address.css";
import { MoreVertical, Plus } from "lucide-react";

const Address = () => {
  const [dropdown, setDropdown] = useState();
  return (
    <Profile>
      <div className="address-mainContainer">
        <p className="address-header">Manage Addresses</p>
        <div className="address-addContainer">
          <Plus size={20} color="#0f382c" />
          <p className="address-addText">Add A new address</p>
        </div>
        <div className="address-addressContainer">
          <div className="address-flexTextAlingContainer">
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
      </div>
    </Profile>
  );
};

export default Address;
