import React, { useEffect, useState } from "react";
import Splash from "../../assets/images/splash.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Logo from "../../assets/images/Prana_Logo.jpeg";
import LoginImage from "../../assets/images/VectorImages/LoginWallpaper.png";

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
    await axios
      .post("https://api-prana.prana24.in/api/auth/signup", data)
      .then((response) => {
        toast.success("Register success");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-mainContainer">
      <div className="register-flexContainer">
        <div>
          <img
            className="register-loginImage"
            src={LoginImage}
            alt="LOGIN_IMAGE"
          />
        </div>
        <div className="register-leftContainer">
          <div className="register-headerContainer">
            <img src={Logo} className="register-logo" alt="PRANA_24" />
            <p className="register-header">Create an Account</p>
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
                    Greater than 3 characters
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
                    // pattern:
                    //   /^[a-zA-Z0-9._%+-]+a-@[zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                  type="Phone"
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
                    please Enter correct mobile number
                  </p>
                )}
                {errors.phone_number?.type === "minLength" && (
                  <p className="form-error" role="alert">
                    Mobile number must be 10 digit
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
                    min: 8,
                    // pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/,
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password?.type === "required" && (
                  <p className="form-error" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "min" && (
                  <p className="form-error" role="alert">
                    Password must be 8 digits
                  </p>
                )}
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="register-button"
              >
                {isSubmitting ? "Loading ..." : "Register"}
              </button>
              <p
                className="forgot-password text-center for-par"
                onClick={navigateLogin}
              >
                Already registered? <span className="log-login">Login</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
