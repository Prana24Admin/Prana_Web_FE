import axiosInstance from "../libs/axios";

export const fetchAllBrands = async () => {
  const response = await axiosInstance.get(
    "brands"
  );
  return response.data;
};

export const fetchBrandDetails = async (id) => {
  const response = await axiosInstance.get(
    `brands/${id}`
  );
  return response.data;
};
