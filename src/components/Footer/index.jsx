import React from "react";

import "./footer.css";
import { Link } from "react-router-dom";
import Input from "../Input";
import { Button } from "@chakra-ui/react";
import { Contact } from "lucide-react";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-mainContainer">
        <div className="footer-widthContainer">
          <p className="footer-title">Prana24</p>
          <p className="footer-description">Subscribe To our news letter</p>
          <div style={{ position: "relative", margin: "0.75rem 0" }}>
            <input type="text" className="footer-input" />
            <button className="footer-subscribeButton">Subscribe</button>
          </div>
        </div>
        <div
          className="footer-widthContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="footer-header">Company</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to={"/"} className="footer-links">
              Home
            </Link>
            <Link to={"/about"} className="footer-links">
              About us
            </Link>
            <Link to={"/contact"} className="footer-links">
              Contact us
            </Link>
            <Link to={"/careers"} className="footer-links">
              Careers
            </Link>
          </div>
        </div>
        <div className="footer-widthContainer">
          <p className="footer-header">Registration Office</p>
          <p className="footer-description">
            H.No.1-62/K/84, Kavuri Hills Rd, CBI Colony Jubilee Hills, Madhapur,
            Hyderabad, Telangana 500033
          </p>
        </div>
        <div className="footer-widthContainer">
          <p className="footer-header">Address</p>
          <p className="footer-description">
            38432 Crosspointe Cmn, Fremont, CA 94536
          </p>
        </div>
      </div>
      <div className="footer-separator" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "0.8rem", padding: "0.5rem" }}>
          Copyright © 2023 TriVista MedAI Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
