import { ChevronDown } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import "../../pages/Home/Doctor/DoctorProfile/doctorProfile.css";
import { useQuery } from "@tanstack/react-query";
import { formatDate, formatTime } from "../../libs/dateTimeFormater";
import { useDisclosure } from "@chakra-ui/react";
import BookAppointmentModal from "../Modals/BookAppointment";
import { DoctorBookingContext } from "../../context/DoctorBookingProvider";
import { fetchDoctorTimeSlot } from "../../services/doctorService";

// TimeSlot Component for booking doctor appointments
const TimeSlot = ({ doctorId }) => {
  // Chakra UI's Disclosure hook for modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Accessing data from DoctorBookingContext
  const { data } = useContext(DoctorBookingContext);

  // State to manage selected date, selected date data, and selected time slot
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateData, setSelectedDateData] = useState({});
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  // Using react-query to fetch doctor's time slots
  const { data: timeSlotData } = useQuery(["TimeSlot", doctorId], () =>
    fetchDoctorTimeSlot(doctorId)
  );

  // Effect hook to update selectedDateData based on selectedDate and timeSlotData
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

  return (
    <section>
      {timeSlotData && (
        <>
          {/* Header for picking a time slot */}
          <p className="doctorProfile-header">
            Pick a time slot for doctor consultation
          </p>
          <div className="doctorProfile-boxContainer">
            {/* Clinic details section */}
            <div className="doctorProfile-clinicDetails">
              <div>
                <p className="doctorProfile-subheader">Clinic Name</p>
                <p className="doctorProfile-description">Clinic address</p>
              </div>
              {/* Change Clinic button */}
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
            {/* Maximum waiting time information */}
            <p className="doctorProfile-description">
              Max waiting time will be:{" "}
              <span className="doctorProfile-subheader">15mins</span>
            </p>
            {/* Consultation type information */}
            {selectedDateData && Object.keys(selectedDateData).length > 0 && (
              <p className="doctorProfile-description">
                Consultation type:{" "}
                <span className="doctorProfile-subheader">
                  {selectedDateData.type}
                </span>
              </p>
            )}
            {/* Clinic appointment fee section */}
            <div className="doctorProfile-flexAppointment">
              <p>Clinic appointment fee</p>
              <p>123fee</p>
            </div>
          </div>
          {/* Date picker and time slot selection section */}
          {timeSlotData.data.length > 0 ? (
            <div className="doctorProfile-boxContainer">
              {/* Date picker component */}
              <div>
                <DatePicker
                  dateData={timeSlotData}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </div>
              {/* Time slot selection section */}
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
                  {selectedDateData && (
                    <p>
                      {formatTime(selectedDateData.start_time) +
                        " - " +
                        formatTime(selectedDateData.end_time)}
                    </p>
                  )}
                </div>
              </div>
              {/* Continue Booking button */}
              <button
                className="doctorProfile-continueButton"
                disabled={!selectedTimeSlot ? true : false}
                onClick={() => onOpen()}
              >
                Continue Booking
              </button>
            </div>
          ) : (
            // Message if no time slots are available
            <div className="doctorProfile-boxContainer">
              <p className="doctorProfile-appointmentText">
                Sorry! No time-slot available to book an appointment.
              </p>
            </div>
          )}
          {/* Book Appointment modal */}
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
