import axiosInstance from "../libs/axios";

// Function to fetch all lab test orders
export const fetchAllLabOrders = async () => {
  const response = await axiosInstance.get("/orders/laborders/");
  return response.data;
};

// Function to fetch lab order details by ID
export const fetchLabOrderById = async (id) => {
  const response = await axiosInstance.get(`/orders/laborders/${id}`);
  return response.data;
};
