import React from "react";
import "./medicalHistory.css";
import Profile from "../Profile";
import Input from "../../../components/Input";

const MedicalHistory = () => {
  return (
    <Profile>
      <p className="health-Header">Medical History</p>
      <div>
        <Input
          type="text"
          label={"1.What is your height(in feet)"}
          className="health-input"
        />
        <Input
          type="text"
          label={"2.What is your last measured weight"}
          className="health-input"
        />
        <Input
          type="text"
          label={"3.Do you stay in a village or a towm?"}
          className="health-input"
        />
        <Input
          type="text"
          label={"4.What is the number of members in your household"}
          className="health-input"
        />
      </div>
    </Profile>
  );
};

export default MedicalHistory;
