import React from "react";
import "./Input.css";

const Input = ({ label, type = "text", value, onChange, disabled = false }) => {
  return (
    <label className="labelContainer">
      <p className="labelText">{label}</p>
      <input
        className="input"
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </label>
  );
};

export default Input;
