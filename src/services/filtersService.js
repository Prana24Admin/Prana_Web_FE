import axiosInstance from "../libs/axios";

// Function to fetch categories
export const fetchCategories = async () => {
  const response = await axiosInstance.get("/filters?type=MEDICINE_CATEGORY");
  return response.data;
};

// Function to fetch product data by category
export const fetchProductDataByCategory = async (categoryId) => {
  const response = await axiosInstance.get(`filters/products/${categoryId}`);
  return response.data;
};

// Function to fetch all specializations from the server
export const fetchAllDoctorSpecializations = async () => {
  const response = await axiosInstance.get(
    "/filters?type=CONSULTATION_SPECIALIZATION"
  );
  return response.data;
};
