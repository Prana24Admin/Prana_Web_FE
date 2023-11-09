import React, { useState } from "react";
import Upload from "../../../assets/images/VectorImages/Prescription.png";
import "../../../assets/css/Home/homePaymentOffers.css";

const Prescription = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <div className="prescription-mainContainer">
        {/* <p className="main-title">Order with prescription</p> */}
        <div className="prescription-flexContainer">
          <div>
            <img
              loading="lazy"
              className="prescription-image"
              src={Upload}
              alt="Pres"
            />
          </div>
          <div className="prescription-flexRightContainer">
            {/* <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              Order With Prescription
            </p> */}
            <p className="main-description">
              Upload prescription and we will deliver your medicines
            </p>
            <input
              style={{
                margin: "0.5rem 0",
                // backgroundColor: "var(--crimsonPink)",
              }}
              type="file"
              onChange={handleChange}
            />
            <button
              style={{
                color: "white",
                backgroundColor: "var(--crimsonPink)",
                justifyContent: "center",
                padding: "0.25rem 0.75rem",
                borderRadius: "5px",
                // marginLeft: "100px",
                border: "none",
              }}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Prescription;
