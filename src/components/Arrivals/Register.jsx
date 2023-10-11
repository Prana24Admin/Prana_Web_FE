import React, { useEffect, useState } from "react";
import Splash from "../../assets/images/splash.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const {
    register,
    handleSubmit,
    watch,
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
    <div className="register-screen">
      <div className="d-flex flex-row col-lg-8">
        <div className="d-flex flex-column">
          <img className="splash-img" src={Splash} alt="" />
        </div>
        <div className="d-flex flex-column col-lg-6">
          <div className="outer">
            <div className="inner">
              <h3 className="prana-head">Prana 24</h3>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-height">
                  <div className="form-group form-field">
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
                </div>
                <div className="form-group input-height form-field">
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
                <div className="form-group input-height form-field">
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
                <div className="form-group input-height form-field">
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
                <div className="form-group input-height form-field">
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
                <div className="register-btn form-field">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="reg-btn"
                  >
                    {isSubmitting ? "Loading ..." : "Register"}
                  </button>
                </div>
                <p
                  className="forgot-password text-center for-par"
                  onClick={navigateLogin}
                >
                  Already registered{"  "}{" "}
                  <span className="log-login">Login</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
