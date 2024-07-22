import React, { useState, useEffect } from "react";
import "../healthCare.css";
import Profile from "../../Profile";
import Input from "../../../../components/Input";
import LoginImage from "../../../../assets/images/VectorImages/LoginWallpaper.webp";

const HomeHealthCare = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);

  const buttonNames = [
    {
      name: "Physiotherpy",
    },
    {
      name: "X-Ray",
    },
    {
      name: "ECG",
    },
    {
      name: "Procedure",
    },
    {
      name: "Critical Care",
    },
    {
      name: "Nursing Care",
    },
    {
      name: "Medical Equipment",
    },
  ];

  useEffect(() => {
    // Fetch options from API
    fetch("/api/patients")
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => console.error("Error fetching options:", error));
  }, []);

  const handleAddPatient = () => {
    console.log("hi");
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = (buttonName) => {
    console.log(buttonName);
  };

  return (
    <Profile>
      <p className="health-Header">Home Health Care</p>
      <div>
        <label className="dropdown">Select Patient</label>
        <div>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
            style={{
              width: "400px",
              padding: "5px",
              borderWidth: 1,
              borderRadius: 5,
              margin: "5px 0",
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.length > 0 ? (
              options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No data
              </option>
            )}
          </select>
          <button
            style={{
              margin: "0 10px",
              backgroundColor: "red",
              color: "white",
              padding: "5px",
              borderRadius: 5,
            }}
            onClick={handleAddPatient}
          >
            Add Patient
          </button>
        </div>
        <Input type="text" label={"Address"} className="health-input" />
        <label>Amenities</label>
        <div>
          {buttonNames.map((name, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(name)}
              style={{
                width: "120px",
                height: "150px",
                borderWidth: 1,
                margin: "5px",
                borderRadius: 5,
                padding: "5px 10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src={LoginImage}
                alt="LOGIN_IMAGE"
              />
              {name.name}
            </button>
          ))}
        </div>
      </div>
    </Profile>
  );
};

export default HomeHealthCare;
