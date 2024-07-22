import axiosInstance from "../libs/axios";

export const fetchAllBrands = async () => {
  const response = await axiosInstance.get(
    "http://192.168.1.2:4000/api/brands"
  );
  return response.data;
};

export const fetchBrandDetails = async (id) => {
  const response = await axiosInstance.get(
    `http://192.168.1.2:4000/api/brands/${id}`
  );
  return response.data;
};
