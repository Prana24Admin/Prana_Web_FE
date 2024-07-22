import axiosInstance from "../libs/axios";

// Fetch coupons
export const fetchCoupons = async () => {
  const response = await axiosInstance.get(
    "http://192.168.1.2:4000/api/coupons"
  );
  return response.data;
};
