import React, { useState } from "react";
import Splash from "../../../assets/images/splash.jpg";
import "./login.module.css";
import axios from "axios";
import { Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/");
  };

  const navigateForgot = () => {
    navigate("/forgot");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    await axios
      .post("https://api-prana.prana24.in/api/auth/login", data)
      .then((response) => {
        toast.success("Login success");
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <>
      <div className="register-screen">
        <div className="d-flex flex-row col-lg-8">
          <div className="d-flex flex-column">
            <img className="splash-img" src={Splash} alt="" />
          </div>
          <div className="d-flex flex-column col-lg-6">
            <div className="outer">
              <div className="inner">
                <h3 className="prana-head">Prana 24</h3>
                <form
                  className="form"
                  id="form-login"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group input-height">
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

                  <div className="form-group" id="form-pass">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      {...register("password", {
                        required: true,
                        min: 8,
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
                  <div>
                    <p
                      className="forgot"
                      id="pass-for"
                      onClick={navigateForgot}
                    >
                      Forgot Password?
                    </p>
                  </div>
                  <div className="register-btn">
                    <button
                      type="submit"
                      className="reg-btn"
                      // onClick={navigateHome}
                    >
                      Login
                    </button>
                  </div>

                  <p
                    className="forgot-password text-center for-par"
                    onClick={navigateRegister}
                  >
                    Create new account Signup?
                  </p>
                  {flag && (
                    <Alert color="primary" variant="danger">
                      I got it you are in hurry! But every Field is important!
                    </Alert>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
