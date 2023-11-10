import axiosInstance from "../libs/axios";

// Function to fetch all lab tests
export const fetchAllLabTests = async () => {
  const response = await axiosInstance.get("/lab/test");
  return response.data;
};

export const fetchLabTestById = async (id) => {
  const response = await axiosInstance(`/lab/test/${id}`);
  return response.data;
};
