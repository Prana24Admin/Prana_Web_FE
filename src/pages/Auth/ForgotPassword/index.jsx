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
    try {
      const response = await axios.post(
        "https://api-prana.prana24.in/api/auth/forgot-password",
        data
      );
      if (response.status === 200) {
        // Display a success toast when the password reset link is sent.
        toast.success("Password reset link has been sent to your email.");
        navigate("/login"); // Redirect to the login page after sending the link.
      } else {
        // Handle other possible scenarios, e.g., server error.
        toast.error("Password reset link could not be sent. Please try again.");
      }
    } catch (error) {
      // Handle any errors that may occur during the password reset request.
      toast.error("An error occurred while sending the password reset link.");
      console.error("Password reset error:", error);
    }
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
