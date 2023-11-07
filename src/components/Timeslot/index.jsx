import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import "../../pages/Home/Doctor/DoctorProfile/doctorProfile.css";
import axiosInstance from "../../libs/axios";
import { useQuery } from "@tanstack/react-query";

const TimeSlot = ({ doctorId }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateData, setSelectedDateData] = useState({});
  const [timeIntervals, setTimeIntervals] = useState();

  const fetchDoctorTimeSlot = async () => {
    const response = await axiosInstance.get(
      `/doctor/timeslot?doctor_id=${doctorId}`
    );
    return response.data;
  };
  const { data, isLoading, error } = useQuery(
    ["TimeSlot"],
    fetchDoctorTimeSlot
  );

  useEffect(() => {
    function getTimeIntervals(start_time, end_time) {
      // Convert string times to Date objects
      const startDate = new Date(`2000-01-01T${start_time}`);
      const endDate = new Date(`2000-01-01T${end_time}`);

      const timeIntervals = [];
      let currentTime = startDate;

      // While the current time is less than the end time
      while (currentTime < endDate) {
        // Get current time in HH:mm format
        const currentFormattedTime = currentTime.toTimeString().substring(0, 8);

        // Add current time to intervals array
        timeIntervals.push(currentFormattedTime);

        // Increment time by 15 minutes
        currentTime.setMinutes(currentTime.getMinutes() + 15);
      }

      setTimeIntervals(timeIntervals);
    }

    const getSelectedTimeSlot = () => {
      const date = new Date(selectedDate);

      // Extract year, month, and day from the Date object
      const year = date.getFullYear();
      // Months are zero-based (0-Jan, 1-Feb, ...), so we add 1 to match the desired format
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding padding for double digits
      const day = date.getDate().toString().padStart(2, "0"); // Adding padding for double digits

      // Form the new date string in 'YYYY-MM-DD' format
      const newDateFormat = `${year}-${month}-${day}`;
      if (data) {
        const timeSlotData = data.data.find(
          (arrayData) => arrayData.date === newDateFormat
        );
        if (timeSlotData) {
          setSelectedDateData(timeSlotData);
          getTimeIntervals(timeSlotData.start_time, timeSlotData.end_time);
        }
      }
    };

    getSelectedTimeSlot();
  }, [selectedDate, data]);

  useEffect(() => {
    console.log(timeIntervals); // Display the updated timeIntervals value
  }, [timeIntervals]);

  return (
    <section>
      {data && (
        <>
          {" "}
          <p className="doctorProfile-header">
            Pick a time slot for doctor consultation
          </p>
          <div className="doctorProfile-boxContainer">
            <div className="doctorProfile-clinicDetails">
              <div>
                <p className="doctorProfile-subheader">Clinic NAme</p>
                <p className="doctorProfile-description">Clinic address</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  color: "var(--azureBlue)",
                }}
              >
                <p>Change Clinic</p>
                <ChevronDown size={15} />
              </div>
            </div>
            <p className="doctorProfile-description">
              Max waiting time will be:{" "}
              <span className="doctorProfile-subheader">15mins</span>
            </p>
            <p className="doctorProfile-description">
              Consultation type:{" "}
              <span className="doctorProfile-subheader">
                {selectedDateData && selectedDateData.type}
              </span>
            </p>
            <div className="doctorProfile-flexAppointment">
              <p>Clinic appointment fee</p>
              <p>123fee</p>
            </div>
          </div>
          <div className="doctorProfile-boxContainer">
            <div>
              <DatePicker
                dateData={data}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
            <div className="doctorProfile-timeSlotContainer">
              {/* <p className="doctorProfile-timeText">11.30</p>
              <p className="doctorProfile-timeText">11.30</p>
              <p className="doctorProfile-timeText">11.30</p>
              <p className="doctorProfile-timeText">11.30</p>
              <p className="doctorProfile-timeText">11.30</p>
              <p className="doctorProfile-timeText">{selectedDate}</p> */}
              {timeIntervals &&
                timeIntervals.map((interval) => (
                  <p className="doctorProfile-timeText">{interval}</p>
                ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default TimeSlot;
