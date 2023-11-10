import axiosInstance from "../libs/axios";

// Fetch coupons
export const fetchCoupons = async () => {
  const response = await axiosInstance.get("/coupons");
  return response.data;
};
