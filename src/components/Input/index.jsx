import React from "react";
import "./Input.css";

/**
 * Reusable Input component for form fields.
 *
 * @component
 * @param {Object} props - The properties of the Input component.
 * @param {string} props.label - The label for the input field.
 * @param {string} [props.type="text"] - The type of the input field (default is "text").
 * @param {string} props.value - The value of the input field.
 * @param {function} props.onChange - The function to handle input changes.
 * @param {boolean} [props.disabled=false] - Whether the input field is disabled (default is false).
 * @param {Object} props.register - The react-hook-form register object.
 * @param {string} props.name - The name attribute for the input field.
 * @param {Object} props.error - The error object from react-hook-form.
 * @param {string} props.error.name - The name of the error (if exists).
 * @returns {JSX.Element} - The rendered Input component.
 */
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
  // Determine the ARIA attributes for accessibility
  const ariaInvalid = error?.name ? "true" : "false";
  const ariaDescribedBy = error?.name ? `${name}-error` : undefined;

  return (
    <label className="labelContainer">
      {/* Label for the input field */}
      <p className="labelText">{label}</p>

      {/* Input field with associated ARIA attributes */}
      <input
        name={name}
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...register}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
      />

      {/* Display error message if it exists */}
      {error && (
        <p id={`${name}-error`} className="errorText">
          {error.message}
        </p>
      )}
    </label>
  );
};

export default Input;
