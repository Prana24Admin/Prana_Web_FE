import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    await axios
      .post("https://api-prana.prana24.in/api/auth/forgot-password", data)
      .then((response) => {
        toast.success("Link has been sent to your mail");
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  return (
    <AuthLayout>
      <div className="register-headerContainer">
        <p className="register-header">
          Reset your password <span className="header-dot">.</span>
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
          <button
            disabled={isSubmitting}
            type="submit"
            className="register-button"
          >
            {isSubmitting ? "Loading ..." : "Continue"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
