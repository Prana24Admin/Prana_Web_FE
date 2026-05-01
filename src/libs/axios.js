import axios from "axios";
import { API_BASE_URL } from "../config/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="));
    const accessTokenCookie = cookies.find(
      (cookie) => cookie[0].trim() === "accessToken"
    );

    const token = accessTokenCookie ? accessTokenCookie[1] : null;

    config.headers["Cache-Control"] = "max-age=3600";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  try {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="));
    const refreshTokenCookie = cookies.find(
      (cookie) => cookie[0].trim() === "refreshToken"
    );
    const refreshToken = refreshTokenCookie ? refreshTokenCookie[1] : null;
    const response = await axiosInstance.post("/auth/refresh", {
      refresh_token: refreshToken,
    });
    const newAccessToken = response.data.token;
    document.cookie = `accessToken=${response.data.token}; max-age=3600; path=/`;
    document.cookie = `refreshToken=${response.data.refresh_token}; max-age=86400; path=/`;
    return newAccessToken;
  } catch (error) {
    console.log(error);
  }
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const accessToken = await refreshAccessToken();
      if (accessToken) {
        localStorage.setItem("isAuthenticated", true);
        axios.defaults.headers.common.Authorization = "Bearer " + accessToken;
        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
