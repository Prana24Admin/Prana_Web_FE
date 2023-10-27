import React from "react";
import "../../../assets/css/Doctor/inner/filter.css";
import { BiSearch } from "react-icons/bi";
const Filter = () => {
  return (
    <div className="filters-mainContainer">
      <div className="filters-flexContainer">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <p className="filters-content">Video Consult</p>
          <select className="filters-dropdown">
            <option className="filters-dropdownContent">Availability</option>
            <option>Available Tomorrow</option>
            <option>Available Today</option>
            <option>Available in Next 7days</option>
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <p className="filters-content">Sort By</p>
          <select className="filters-dropdown">
            <option>Availability</option>
            <option>Earliest first</option>
            <option style={{ color: "blue" }}>Price low to high</option>
            <option>Oldest first</option>
          </select>
        </div>
        <div className="filters-input">
          <BiSearch size={18} color="var(--ashGray)" />
          <input
            className="filters-inputText"
            type="Search"
            placeholder="Search for Doctor"
          />
        </div>
      </div>
    </div>
  );
};
export default Filter;
