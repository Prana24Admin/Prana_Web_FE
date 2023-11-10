import axiosInstance from "../libs/axios";

export const fetchProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching product data");
  }
};
