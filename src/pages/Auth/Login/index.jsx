import React, { useContext } from "react";

import "../Register/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import AuthLayout from "../../../components/AuthLayout";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };

  const navigateForgot = () => {
    navigate("/forgot_password");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
        document.cookie = `accessToken=${response.data.token}; max-age=3600; path=/`;
        document.cookie = `refreshToken=${response.data.refresh_token}; max-age=86400; path=/`;
        localStorage.setItem("isAuthenticated", true);
        setIsAuthenticated(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <AuthLayout>
      <div className="register-headerContainer">
        <p className="register-header">
          Login to Prana24 <span className="header-dot">.</span>
        </p>
      </div>
      <div className="register-formContainer">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="forgotPassword-container">
            <p className="forgotPasswordText" onClick={navigateForgot}>
              Forgot password?
            </p>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="register-button"
          >
            {isSubmitting ? "Loading ..." : "Login"}
          </button>
          <p
            className="forgot-password text-center for-par"
            onClick={navigateRegister}
          >
            New to Prana24? <span className="log-login">Register</span>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Login;
