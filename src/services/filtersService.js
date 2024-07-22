import axiosInstance from "../libs/axios";

// Function to fetch categories
export const fetchCategories = async () => {
  const response = await axiosInstance.get(
    "http://192.168.1.2:4000/api/filters?type=MEDICINE_CATEGORY"
  );
  console.log(response.data);
  return response.data;
};

// Function to fetch product data by category
export const fetchProductDataByCategory = async (categoryId) => {
  const response = await axiosInstance.get(
    `http://192.168.1.2:4000/api/filters/products/${categoryId}`
  );
  return response.data;
};

// Function to fetch all specializations from the server
export const fetchAllDoctorSpecializations = async () => {
  const response = await axiosInstance.get(
    "http://192.168.1.2:4000/api/filters?type=CONSULTATION_SPECIALIZATION"
  );
  return response.data;
};
