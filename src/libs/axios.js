import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-prana.prana24.in/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
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
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await axiosInstance.post("/auth/refresh", {
      refresh_token: refreshToken,
    });
    const newAccessToken = response.data.token;
    localStorage.setItem("accessToken", response.data.token);
    localStorage.setItem("refreshToken", response.data.refresh_token);
    return newAccessToken;
  } catch (error) {
    throw error;
  }
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await refreshAccessToken();
      if (accessToken) {
        axios.defaults.headers.common.Authorization = "Bearer " + accessToken;
        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
