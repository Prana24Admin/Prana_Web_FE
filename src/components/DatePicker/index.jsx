import React, { useEffect, useRef, useState } from "react";
import "./datePicker.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DatePicker = ({ dateData, selectedDate, setSelectedDate }) => {
  const [dates, setDates] = useState([]);

  const dateItemsRef = useRef(null);
  const dateItemWidth = 111;

  useEffect(() => {
    // Convert date strings to Date objects
    const dateObjects = dateData.data.map(
      (timeSlot) => new Date(timeSlot.date)
    );

    // Sort the Date objects
    dateObjects.sort((a, b) => a - b);

    // Convert sorted Date objects back to strings
    const dateArray = dateObjects.map((date) =>
      date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );

    setDates(dateArray);
    setSelectedDate(dateArray[0]);
  }, [dateData, setSelectedDate]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const scrollDateItems = (scrollOffset) => {
    dateItemsRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className="date-picker-container">
      <button onClick={() => scrollDateItems(-dateItemWidth)}>
        <ChevronLeft />
      </button>
      <div className="date-picker" ref={dateItemsRef}>
        <div className="date-items">
          {dates.map((date) => (
            <div
              key={date}
              className={`date-item ${selectedDate === date ? "active" : ""}`}
              onClick={() => handleDateClick(date)}
            >
              {date}
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => scrollDateItems(dateItemWidth)}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default DatePicker;
