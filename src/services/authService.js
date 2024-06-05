import axios from "axios";
import toast from "react-hot-toast";
import axiosInstance from "../libs/axios";

export const login = async (data) => {
  const response = await axios.post(
    // "https://api-prana.prana24.in/api/auth/login",
    "http://192.168.1.6:4000/api/auth/login",
    data
  );
  if (response.status === 200) {
    // Display a success toast when the login is successful.
    toast.success("Login successful");

    // Store access and refresh tokens as cookies and set authentication status.
    document.cookie = `accessToken=${response.data.token}; max-age=3600; path=/`;
    document.cookie = `refreshToken=${response.data.refresh_token}; max-age=86400; path=/`;
    localStorage.setItem("isAuthenticated", true);

    return response.data;
  } else {
    // Handle other possible scenarios, e.g., server error.
    toast.error("Login failed. Please try again.");
  }
};

export const signup = async (data) => {
  const response = await axios.post(
    // "https://api-prana.prana24.in/api/auth/signup",
    "http://192.168.1.6:4000/api/auth/signup",
    data
  );
  return response;
};

export const logout = async () => {
  const cookies = document.cookie.split(";").map((cookie) => cookie.split("="));
  const accessTokenCookie = cookies.find(
    (cookie) => cookie[0].trim() === "accessToken"
  );
  const token = accessTokenCookie ? accessTokenCookie[1] : null;

  const response = await axiosInstance.post("/auth/logout", {
    token: token,
  });
  return response;
};
