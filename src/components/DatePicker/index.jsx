import React, { useEffect, useRef, useState } from "react";
import "./datePicker.css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatDateToText } from "../../libs/dateTimeFormater";

const DatePicker = ({ dateData, selectedDate, setSelectedDate }) => {
  // State to store the array of formatted date strings
  const [dates, setDates] = useState([]);

  // Ref to manage the date items container
  const dateItemsRef = useRef(null);
  // Width of a single date item for scrolling
  const dateItemWidth = 111;

  // Effect to handle updates when dateData or setSelectedDate changes
  useEffect(() => {
    // Convert date strings to Date objects
    const dateObjects = dateData.data.map(
      (timeSlot) => new Date(timeSlot.date)
    );

    // Sort the Date objects
    dateObjects.sort((a, b) => a - b);

    // Convert sorted Date objects back to strings
    const dateArray = dateObjects.map((date) => formatDateToText(date));

    // Update state with the sorted and formatted date strings
    setDates(dateArray);
    // Set the selected date to the first date in the array
    setSelectedDate(dateArray[0]);
  }, [dateData, setSelectedDate]);

  // Handler for clicking on a date item
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Function to scroll date items based on the scrollOffset
  const scrollDateItems = (scrollOffset) => {
    dateItemsRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  // JSX structure for the DatePicker component
  return (
    <>
      <div className="date-picker-container">
        {/* Button to scroll date items to the left */}
        <button onClick={() => scrollDateItems(-dateItemWidth)}>
          <ChevronLeft />
        </button>
        {/* Container for displaying date items with horizontal scrolling */}
        <div className="date-picker" ref={dateItemsRef}>
          <div className="date-items">
            {/* Mapping through date strings to create date items */}
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
        {/* Button to scroll date items to the right */}
        <button onClick={() => scrollDateItems(dateItemWidth)}>
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default DatePicker;
