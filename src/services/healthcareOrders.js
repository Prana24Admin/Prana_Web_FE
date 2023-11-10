import axiosInstance from "../libs/axios";

// Function to fetch all healthcare orders
export const fetchAllOrders = async () => {
  const response = await axiosInstance.get("/orders");
  return response.data;
};

// Function to fetch order details by ID
export const fetchOrderHealthcareById = async (id) => {
  const response = await axiosInstance.get(`/orders/${id}`);
  return response.data;
};
