import React, { useState } from "react";
import "./zipCodeDrawer.css";
import axios from "axios";
import toast from "react-hot-toast";

const ZipCodeDrawer = ({ onClose, setLocation, location }) => {
  const [pinCode, setPinCode] = useState("");

  const getLocation = async () => {
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pinCode}`
      );
      if (response.status === 200) {
        if (response.data[0].PostOffice !== null) {
          console.log(response.data[0].PostOffice[0].District);
          localStorage.setItem(
            "location",
            pinCode + "," + response.data[0].PostOffice[0].District
          );
          setLocation(response.data[0].PostOffice[0].District);
          onClose();
        } else {
          if (location) {
            localStorage.removeItem("location");
            setLocation("Select location");
            setPinCode("");
          }
          toast.error("PIN Code Not found!");
        }
      }
    } catch (err) {
      toast.error("Try again");
    }
  };
  return (
    <div className="zipCodeContainer">
      <div style={{ position: "relative" }}>
        <input
          type="text"
          className="zipCodeInput"
          placeholder="Enter your PIN Code"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />
        <button className="checkButton" onClick={getLocation}>
          Check
        </button>
      </div>
      <div className="tagLineContainer">
        <p>Tagline</p>
      </div>
    </div>
  );
};

export default ZipCodeDrawer;
