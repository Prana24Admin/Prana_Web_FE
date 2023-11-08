import React from "react";
import "./Input.css";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  disabled = false,
  register,
  name,
  error,
}) => {
  return (
    <label className="labelContainer">
      <p className="labelText">{label}</p>
      <input
        name={name}
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...register}
        aria-invalid={error.name ? "true" : "false"}
      />
    </label>
  );
};

export default Input;
