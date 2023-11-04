import React from "react";
import "./loader.css";

const Loader = ({ width, height }) => {
  return (
    <div className="loaderContainer">
      <span className="loader" style={{ width: width, height: height }}></span>
    </div>
  );
};

export default Loader;
