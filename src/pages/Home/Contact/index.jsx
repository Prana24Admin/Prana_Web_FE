import React from "react";

import "./contact.css";
import MainLayout from "../../../components/MainLayout";
const Contact = () => {
  return (
    <MainLayout>
      <div className="contact-form">
        <div className="d-flex flex-row">
          <div
            className="d-flex flex-column  contact-col"
            style={{ alignItems: "flex-start" }}
          >
            <p className="contact-title">Contact Us</p>
            <p className="contact-titleDescription">
              Need to get in touch with us?<span> </span>Either fill out the
              form
              <br /> with your inquiry or find the department email you'd <br />
              like to contact below.
            </p>
          </div>
          <div className="d-flex flex-column contact-col">
            <div className="d-flex flex-row row-input">
              <div className="d-flex flex-column row-input-col">
                <label>First name</label>
                <input className="text-input" type="text" />
              </div>
              <div className="d-flex flex-column">
                <label className="row-input-col">Last name</label>
                <input className="text-input row-input-col" type="text" />
              </div>
            </div>
            <div className="d-flex flex-column">
              <label className="row-input-col-email">Email</label>
              <input className="row-input-col-email-text" type="email" />
            </div>
            <div className="d-flex flex-column">
              <label className="row-input-col-email">
                What can we help you with?
              </label>
              <input className="row-input-col-email-text" type="text" />
            </div>
            <div className="contact-btn">
              <button className="contact-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Contact;
