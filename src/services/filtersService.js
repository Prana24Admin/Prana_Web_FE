import axiosInstance from "../libs/axios";

// Function to fetch categories
export const fetchCategories = async () => {
  const response = await axiosInstance.get("category/get-all");
  const categories = response?.data?.data?.data || [];
  return { data: categories };
};

// Function to fetch product data by category
export const fetchProductDataByCategory = async (categoryId) => {
  try {
    // Category endpoint returns sub-categories and nested products.
    const response = await axiosInstance.get(`category/get/by/${categoryId}`);
    const category = response?.data?.data;
    const items = (category?.sub_categories || []).map((item) => ({
      id: item.id,
      uuid: item.uuid || item.id,
      name: item.name,
    }));
    const products = (category?.sub_categories || []).flatMap(
      (item) => item.products || []
    );
    return { items, products };
  } catch (error) {
    // When a sub-category id is passed, fetch products directly from sub-category.
    const response = await axiosInstance.get(`sub-category/get/by/${categoryId}`);
    const subCategory = response?.data?.data;
    return {
      items: [],
      products: subCategory?.products || [],
    };
  }
};

// Function to fetch all specializations from the server
export const fetchAllDoctorSpecializations = async () => {
  try {
    const response = await axiosInstance.get("doctor/specialization");
    return response?.data || [];
  } catch (error) {
    return [];
  }
};
