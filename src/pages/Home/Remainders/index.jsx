import React, { useState } from "react";
import "./remainders.css";
import Profile from "../Profile";
import Input from "../../../components/Input";
import { Plus, Minus } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const durationOptions = ["10 days", "15 days", "1 month", "2 months"];

const Remainders = () => {
  const [timesPerDay, setTimesPerDay] = useState(1);
  const [time, setTime] = useState(new Date());
  const [duration, setDuration] = useState("");

  const handleIncrease = () => {
    setTimesPerDay((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setTimesPerDay((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <Profile>
      <p className="health-Header">Medical History</p>
      <div>
        <Input type="text" label={"Medication Name"} className="health-input" />
        <Input type="text" label={"From"} className="health-input" />
        <Input type="text" label={"Dosage"} className="health-input" />
        <Input type="text" label={"Dosage Unit"} className="health-input" />
        <Input type="text" label={"Reason"} className="health-input" />
        <Input type="text" label={"Route"} className="health-input" />
        <Input type="text" label={"Frequency"} className="health-input" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label>Times Per Day</label>
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

          <div>
            <label>Timings</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <DatePicker
                selected={time}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                customInput={<input />}
              />
            </div>
          </div>

          <div>
            <label>Duration</label>
            <select
              value={duration}
              onChange={handleDurationChange}
              style={{ width: "100%", padding: "5px" }}
            >
              {durationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Input
          type="text"
          label={"Additional Directions"}
          className="health-input"
        />
      </div>
    </Profile>
  );
};

export default Remainders;
