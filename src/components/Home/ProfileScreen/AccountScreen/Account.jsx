import React from "react";
import "../Profile.css";
import Profile from "../Profile";
import Input from "../../../Input";

const Account = () => {
  return (
    <Profile>
      <div className="profile-innerContainer">
        <p className="profile-header">Profile Information</p>
        <div className="profile-inputsContainer">
          <Input label={"First Name"} />
          <Input label={"Last Name"} />
        </div>

        <div className="profile-gapContainer">
          <p style={{ color: "#000" }}>Gender</p>
          <div className="profile-genderContainer">
            <div className="profile-borderlessContainer">
              <input type="radio" />
              <p className="profile-labelText">Male</p>
            </div>
            <div className="profile-borderlessContainer">
              <input type="radio" />
              <p className="profile-labelText">Female</p>
            </div>
            <div className="profile-borderlessContainer">
              <input type="radio" />
              <p className="profile-labelText">Others</p>
            </div>
          </div>
        </div>

        <div className="profile-inputsContainer">
          <Input label={"Email"} type="email" />
        </div>
        <div className="profile-inputsContainer">
          <Input label={"Mobile Number"} />
        </div>
      </div>
    </Profile>
  );
};

export default Account;
