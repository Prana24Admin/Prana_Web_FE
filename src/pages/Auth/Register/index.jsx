import React from "react";

import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import AuthLayout from "../../../components/AuthLayout";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      phone_ext: "+91",
      address: "Hyd",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://api-prana.prana24.in/api/auth/signup",
        data
      );
      if (response.status === 200) {
        // Display a success toast when registration is successful.
        toast.success("Registration successful");

        // Redirect to the login page after a short delay.
        setTimeout(() => {
          navigateLogin();
        }, 1000);
      } else {
        // Handle other possible scenarios, e.g., server error.
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle any errors that may occur during registration.
      toast.error("An error occurred while registering.");
      console.error("Registration error:", error);
    }
  };

  return (
    <AuthLayout>
      <div className="register-headerContainer">
        <p className="register-header">
          Create a new account <span className="header-dot">.</span>
        </p>
      </div>
      <div className="register-formContainer">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="register-inputField">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              name="first_name"
              {...register("first_name", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              aria-invalid={errors.first_name ? "true" : "false"}
            />
            {errors.first_name?.type === "required" && (
              <p className="form-error" role="alert">
                First name is required
              </p>
            )}
            {errors.first_name?.type === "minLength" && (
              <p className="form-error" role="alert">
                Should be more than 3 characters
              </p>
            )}
          </div>
          <div className="register-inputField">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              name="last_name"
              {...register("last_name", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
              aria-invalid={errors.last_name ? "true" : "false"}
            />
            {errors.last_name?.type === "required" && (
              <p className="form-error" role="alert">
                Last name is required
              </p>
            )}
          </div>
          <div className="register-inputField">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              {...register("email", {
                required: true,
                // You can add a regular expression pattern for email validation here.
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p className="form-error" role="alert">
                Email is required
              </p>
            )}
          </div>
          <div className="register-inputField">
            <label>Phone No.</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter contact no"
              {...register("phone_number", {
                required: true,
                minLength: 10,
                maxLength: 10,
                pattern: /^\d{10}$/,
              })}
              aria-invalid={errors.phone_number ? "true" : "false"}
            />
            {errors.phone_number?.type === "required" && (
              <p className="form-error" role="alert">
                Please enter a correct mobile number
              </p>
            )}
            {errors.phone_number?.type === "minLength" && (
              <p className="form-error" role="alert">
                Mobile number must be 10 digits
              </p>
            )}
          </div>
          <div className="register-inputField">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              {...register("password", {
                required: true,
                minLength: 8,
                // You can add a regular expression pattern for password validation here.
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
              <p className="form-error" role="alert">
                Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="form-error" role="alert">
                Password must be at least 8 characters long
              </p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="register-button"
          >
            {isSubmitting ? "Loading..." : "Register"}
          </button>
          <p
            className="forgot-password text-center for-par"
            onClick={navigateLogin}
          >
            Already registered? <span className="log-login">Login</span>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
