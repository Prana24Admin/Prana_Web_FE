import axiosInstance from "../libs/axios";

export const fetchAllAppointments = async () => {
  const response = await axiosInstance.get("/users/appointment/");
  return response.data;
};

export const fetchAppointmentById = async (id) => {
  const response = await axiosInstance.get(`/users/appointment/${id}`);
  return response.data;
};

// Function to post booking data to the server
export const bookDoctorAppointment = async (
  bookingData,
  setBookingSuccessId
) => {
  // Determine the consultation type (offline or online)
  const consultationType = bookingData.type === "offline" ? true : false;

  // Send a POST request to create the appointment
  const response = await axiosInstance.post("/users/appointment/", {
    date: bookingData.date,
    timeslot_id: bookingData.timeslot_id,
    is_offline: consultationType,
  });

  // If the request is successful, update state and set the booking success flag
  if (response.status === 201 || response.status === 200) {
    setBookingSuccessId(response.data.uuid);
  }

  return response.data;
};
