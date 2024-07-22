import axiosInstance from "../libs/axios";

export const fetchProductById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `http://192.168.1.2:4000/api/products/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching product data");
  }
};
