import React, { useState } from "react";
import "./vitalSigns.css";
import Profile from "../Profile";
import Input from "../../../components/Input";
import axiosInstance from "../../../libs/axios";

const VitalSigns = () => {
  const [formData, setFormData] = useState({
    blood_pressure: "",
    pulse_rate: "",
    oxygen_saturation: "",
    weight: "",
    height: "",
    bmi: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "http://192.168.1.2:4000/api/vitals",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Profile>
      <form onSubmit={handleSubmit}>
        <p className="health-Header">Medical History</p>
        <div>
          <Input
            type="text"
            label={"Blood Pressure"}
            name="blood_pressure"
            value={formData.blood_pressure}
            onChange={handleChange}
            className="health-input"
          />
          <Input
            type="text"
            label={"Pulse Rate"}
            name="pulse_rate"
            value={formData.pulse_rate}
            onChange={handleChange}
            className="health-input"
          />
          <Input
            type="text"
            label={"Oxygen Saturation"}
            name="oxygen_saturation"
            value={formData.oxygen_saturation}
            onChange={handleChange}
            className="health-input"
          />
          <Input
            type="text"
            label={"Weight"}
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="health-input"
          />
          <Input
            type="text"
            label={"Height"}
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="health-input"
          />
          <Input
            type="text"
            label={"BMI"}
            name="bmi"
            value={formData.bmi}
            onChange={handleChange}
            className="health-input"
          />
        </div>
        <button
          type="submit"
          style={{ marginTop: 20 }}
          className="vital-editButton"
        >
          Submit
        </button>
      </form>
    </Profile>
  );
};

export default VitalSigns;
