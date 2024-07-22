import React, { useEffect, useState } from "react";
import axios from "axios";
import "./equipmentRental.css";
import Profile from "../Profile";
import Input from "../../../components/Input";
import DatePicker from "react-datepicker"; // Assuming you use react-datepicker for date picking
import "react-datepicker/dist/react-datepicker.css"; // Import styles for react-datepicker
import TimePicker from "react-time-picker"; // Import react-time-picker for time picking
import { Minus, Plus } from "lucide-react";
import LoginImage from "../../../assets/images/VectorImages/LoginWallpaper.webp";
import axiosInstance from "../../../libs/axios";

const EquipmentRental = () => {
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [deliveryTime, setDeliveryTime] = useState("12:00");
  const [timesPerDay, setTimesPerDay] = useState(1);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.get(
          "http://192.168.1.2:4000/api/equipments"
        );
        setServices(response.data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleIncrease = () => {
    setTimesPerDay((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setTimesPerDay((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleDateChange = (date) => {
    setDeliveryDate(date);
  };

  const handleTimeChange = (time) => {
    setDeliveryTime(time);
  };

  const handleButtonClick = (service) => {
    setSelectedService(service);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedService) {
      alert("Please select a service.");
      return;
    }

    const formattedDate = deliveryDate.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    const data = {
      services_ids: [selectedService.uuid],
      days: [timesPerDay],
      address: address,
      delivery_date: formattedDate,
      delivery_time: deliveryTime,
    };

    // console.log("Data", selectedService);

    try {
      const response = await axiosInstance.post(
        "http://192.168.1.2:4000/api/equipment-rental",
        data
      );
      console.log("API response:", response.data);
      alert("Rental request submitted successfully!");
    } catch (error) {
      console.error("Error submitting rental request:", error);
      alert("Failed to submit rental request. Please try again.");
    }
  };

  return (
    <Profile>
      <p className="health-Header">Medical History</p>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label>Delivery Date</label>
            <div>
              <DatePicker
                selected={deliveryDate}
                onChange={handleDateChange}
                minDate={new Date()} // Allow selection from today onwards
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <div>
            <label>Delivery time</label>
            <TimePicker
              clearIcon={null} // Hide the clear icon
              value={deliveryTime}
              onChange={handleTimeChange}
              clockIcon={null} // Display the clock icon for selecting time
              className="time-picker"
              clockClassName="clock-custom"
              dayPeriodClassName="day-period-custom"
              format="hh:mm a" // Use 12-hour format with AM/PM
            />
          </div>
          <div>
            <label>Number Of Days</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={handleDecrease}
                style={{ border: "none", background: "none" }}
              >
                <Minus />
              </button>
              <input
                value={timesPerDay}
                readOnly
                style={{ width: "50px", textAlign: "center" }}
              />
              <button
                onClick={handleIncrease}
                style={{ border: "none", background: "none" }}
              >
                <Plus />
              </button>
            </div>
          </div>
        </div>
        <Input
          type="text"
          label={"Address"}
          className="health-input"
          value={address}
          onChange={handleAddressChange}
        />
        <label>Select services</label>
        <div>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleButtonClick(service)}
              style={{
                width: "120px",
                height: "150px",
                borderWidth: 1,
                margin: "5px",
                borderRadius: 5,
                padding: "5px 10px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  selectedService?.id === service.id ? "lightblue" : "white", // Highlight selected service
              }}
            >
              <img
                style={{
                  width: "100px",
                  height: "80px",
                  alignSelf: "center",
                  borderRadius: "5px",
                }}
                src={service.image || LoginImage}
                alt={service.name}
              />
              {service.name}
              <br />₹{service.amount}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          style={{ marginTop: "10px" }}
          className="refill-editButton"
        >
          Submit
        </button>
      </div>
    </Profile>
  );
};

export default EquipmentRental;
