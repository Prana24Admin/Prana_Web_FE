import React from "react";

const CostEstimate = () => {
  return (
    <form>
      <p className="available-doctorsTitle">
        Book an appointment with the best doctors for your health needs
      </p>
      <div style={{ marginTop: "1.5rem" }}>
        <input
          className="aliment"
          type="text"
          placeholder="Select Ailment"
          required
        />
        <input className="aliment" type="text" placeholder="Name" required />
        <input
          className="aliment"
          type="text"
          placeholder="Contact Number"
          required
        />
        <input
          className="aliment"
          type="text"
          placeholder="Select City"
          required
        />
        <p
          style={{ cursor: "pointer" }}
          // onClick={navigateAppointment}
          className="available-formButton"
        >
          Get CostEstimate
        </p>
      </div>
    </form>
  );
};

export default CostEstimate;
