import React from "react";
import "./Profile.css";
import Avatar from "../../../assets/images/profile/avatar.jpg";
import { ShoppingCart, User2 } from "lucide-react";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-marginContainer">
        <div className="profile-leftContainer">
          <div className="profile-flexContainer">
            <div className="profile-avatarContainer">
              <img className="profile-avatarImage" src={Avatar} alt="avatar" />
            </div>
            <div>
              <p className="profile-greeting ">Hello,</p>
              <p className="profile-username">Hitesh Kumar</p>
            </div>
          </div>
          <div className="profile-borderContainer">
            <div style={{ padding: "1.25rem 1rem" }}>
              <div
                style={{
                  marginBottom: "0.75rem",
                }}
              >
                <div className="profile-optionsContainer">
                  <User2 style={{ width: "10%" }} size={24} />
                  <p className="profile-optionsTitle">Account Settings</p>
                </div>
                <div className="profile-innerOptions">
                  <div className="profile-optionsMainContainer">
                    <div style={{ width: "10%" }} />
                    <p className="profile-innerOptionsText">
                      Profile Information
                    </p>
                  </div>
                  <div className="profile-optionsMainContainer">
                    <div style={{ width: "10%" }} />
                    <p className="profile-innerOptionsText">Manage Addresses</p>
                  </div>
                </div>
              </div>
              <div className="profile-optionsContainer">
                <ShoppingCart style={{ width: "10%" }} size={24} />
                <p className="profile-optionsTitle">My Orders</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-rightContainer">
          <div className="profile-innerContainer">
            <p className="profile-header">Profile Information</p>
            <div className="profile-inputsContainer">
              <label className="profile-labelContainer">
                <p className="profile-labelText">First Name</p>
                <input className="profile-input" type="text" name="name" />
              </label>
              <label className="profile-labelContainer">
                <p className="profile-labelText">Last Name</p>
                <input className="profile-input" type="text" name="name" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
