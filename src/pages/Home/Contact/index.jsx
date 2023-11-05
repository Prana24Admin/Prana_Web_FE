import React from "react";

import "./contact.css";
import MainLayout from "../../../components/MainLayout";
import Input from "../../../components/Input/index";

const Contact = () => {
  return (
    <MainLayout>
      <div className="contact-form">
        <div className="contact-flexContainer">
          <div className="contact-leftContainer">
            <p className="contact-title">Contact Us</p>
            <div>
              <Input label="Name" />
              <Input label="Email" />
              <Input label="About" />
              <button className="contact-button">Submit</button>
            </div>
          </div>
          <div className="contact-borderContainer ">
            <p className="contact-formTitle">Corporate Details</p>
            <p className="contact-formDescription">
              Mail us at:{" "}
              <span style={{ fontWeight: "500", color: "var(--ashGray)" }}>
                Prana24@gmail.com
              </span>
            </p>
            <p className="contact-formTitle">Our location:</p>
            <p
              className="contact-formDescription"
              style={{ display: "flex", flexDirection: "column" }}
            >
              Register Address:
              <span style={{ fontWeight: "500", color: "var(--ashGray)" }}>
                H.No.1-62/K/84, Kavuri Hills Rd, CBI Colony Jubilee Hills,
                Madhapur, Hyderabad, Telangana 500033
              </span>
            </p>
            <p
              className="contact-formDescription"
              style={{ display: "flex", flexDirection: "column" }}
            >
              Corporate Address:
              <span style={{ fontWeight: "500", color: "var(--ashGray)" }}>
                38432 Crosspointe Cmn, Fremont, CA 94536
              </span>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Contact;
