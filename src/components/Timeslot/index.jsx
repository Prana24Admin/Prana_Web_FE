import { ChevronDown } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import "../../pages/Home/Doctor/DoctorProfile/doctorProfile.css";
import axiosInstance from "../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { formatDate, formatTime } from "../../libs/dateTimeFormater";
import { useDisclosure } from "@chakra-ui/react";
import BookAppointmentModal from "../Modals/BookAppointment";
import { DoctorBookingContext } from "../../context/DoctorBookingProvider";

const TimeSlot = ({ doctorId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useContext(DoctorBookingContext);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateData, setSelectedDateData] = useState({});

  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const fetchDoctorTimeSlot = async () => {
    const response = await axiosInstance.get(
      `/doctor/timeslot?doctor_id=${doctorId}`
    );
    return response.data;
  };
  const {
    data: timeSlotData,
    isLoading,
    error,
  } = useQuery(["TimeSlot"], fetchDoctorTimeSlot);

  useEffect(() => {
    const getSelectedTimeSlot = () => {
      const date = new Date(selectedDate);
      const newDate = formatDate(date);
      if (timeSlotData) {
        const timeSlot = timeSlotData.data.find(
          (arrayData) => arrayData.date === newDate
        );
        if (timeSlot) {
          setSelectedDateData(timeSlot);
        }
      }
    };

    getSelectedTimeSlot();
  }, [selectedDate, timeSlotData]);

  useEffect(() => {
    console.log(selectedDate);
    console.log(selectedDateData);
  });

  return (
    <section>
      {timeSlotData && (
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
            {Object.keys(selectedDateData).length > 0 && (
              <p className="doctorProfile-description">
                Consultation type:{" "}
                <span className="doctorProfile-subheader">
                  {selectedDateData.type}
                </span>
              </p>
            )}
            <div className="doctorProfile-flexAppointment">
              <p>Clinic appointment fee</p>
              <p>123fee</p>
            </div>
          </div>
          {timeSlotData.data.length > 0 ? (
            <div className="doctorProfile-boxContainer">
              <div>
                <DatePicker
                  dateData={timeSlotData}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </div>
              <div className="doctorProfile-timeSlotContainer">
                <div
                  className={
                    selectedTimeSlot ===
                    selectedDate +
                      selectedDateData.start_time +
                      " - " +
                      selectedDateData.end_time
                      ? "doctorProfile-selectedTimeText"
                      : "doctorProfile-timeText"
                  }
                  onClick={() =>
                    setSelectedTimeSlot(
                      selectedDate +
                        selectedDateData.start_time +
                        " - " +
                        selectedDateData.end_time
                    )
                  }
                >
                  <p>
                    {selectedDateData &&
                      formatTime(selectedDateData.start_time) +
                        " - " +
                        formatTime(selectedDateData.end_time)}
                  </p>
                </div>
              </div>
              <button
                className="doctorProfile-continueButton"
                disabled={!selectedTimeSlot ? true : false}
                onClick={() => onOpen()}
              >
                Continue Booking
              </button>
            </div>
          ) : (
            <div className="doctorProfile-boxContainer">
              <p className="doctorProfile-appointmentText">
                Sorry! No time-slot available to book an appointment.
              </p>
            </div>
          )}
          <BookAppointmentModal
            isOpen={isOpen}
            onClose={onClose}
            doctorData={data}
            timeSlotData={selectedDateData}
          />
        </>
      )}
    </section>
  );
};

export default TimeSlot;
