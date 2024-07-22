import axiosInstance from "../libs/axios";

// Define an asynchronous function to fetch doctor data by ID
export const fetchDoctorById = async (id, setData) => {
  try {
    const response = await axiosInstance.get(
      `http://192.168.1.2:4000/api/doctor/${id}`
    );
    setData(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching doctor data");
  }
};

export const fetchDoctorsByZipCode = async () => {
  const zipcode = localStorage.getItem("location").split(",")[0];
  const response = await axiosInstance.get(
    `http://192.168.1.2:4000/api/doctor?zipcode=${zipcode}`
  );
  return response.data;
};

// Function to fetch doctors by specialization from the server
export const fetchDoctorsBySpecialization = async (id) => {
  const response = await axiosInstance.get(
    `http://192.168.1.2:4000/api/doctor/specialization/${id}`
  );
  return response.data;
};

// Function to fetch doctor's time slots using axios
export const fetchDoctorTimeSlot = async (doctorId) => {
  const response = await axiosInstance.get(
    `/doctor/timeslot?doctor_id=${doctorId}`
  );
  return response.data;
};
