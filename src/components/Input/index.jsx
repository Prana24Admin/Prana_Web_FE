import React from "react";
import "./Input.css";

const Input = ({ label, type = "text" }) => {
  return (
    <label className="labelContainer">
      <p className="labelText">{label}</p>
      <input className="input" type="text" name="name" />
    </label>
  );
};

export default Input;
