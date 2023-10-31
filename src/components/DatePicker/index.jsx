import React, { useEffect, useRef, useState } from "react";
import "./datePicker.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DatePicker = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const dateItemsRef = useRef(null);
  const dateItemWidth = 111;

  useEffect(() => {
    const currentDate = new Date();
    const dateArray = [];

    for (let i = 0; i < 15; i++) {
      const date = new Date();
      date.setDate(currentDate.getDate() + i);
      dateArray.push(
        date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      );
    }

    setDates(dateArray);
    setSelectedDate(dateArray[0]);
  }, []);

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
