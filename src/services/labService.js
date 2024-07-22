import axiosInstance from "../libs/axios";

// Function to fetch all lab tests
export const fetchAllLabTests = async () => {
  const response = await axiosInstance.get(
    "http://192.168.1.2:4000/api/lab/test"
  );
  return response.data;
};

export const fetchLabTestById = async (id) => {
  const response = await axiosInstance(
    `http://192.168.1.2:4000/api/lab/test/${id}`
  );
  return response.data;
};
