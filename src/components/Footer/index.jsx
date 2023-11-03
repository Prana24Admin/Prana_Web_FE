import React from "react";

import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer-container">
      <div className="foot-col">
        <div className="footer">
          <div className="sub-row3">
            <div className="d-flex flex-row sub-inner-row">
              <div className="d-flex flex-column">
                <h5 style={{ color: "#e11960" }}>Prana 24</h5>
                <p className="footer-par">Subscribe To Our News Letter To</p>
                <p className="footer-par">Stay up to date</p>
                <input className="foot-input" type="email" />
                <div className="foot-btn">
                  <button className="foot-sub-btn">Subscribe</button>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <p className="footer-par1" id="footer-par1">
                    Company
                  </p>
                  <Link className="footer-par1-1" to={"/"}>
                    Home
                  </Link>
                  <Link className="footer-par1-1" to={"/about"}>
                    About Us
                  </Link>
                  <Link className="footer-par1-1" to={"/contact"}>
                    Contact Us
                  </Link>
                  <Link className="footer-par1-1" to={"/careers"}>
                    Careers
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="footer-par1">Registration Office</p>
                <p className="footer-par1-1">
                  Ayro Retail Solutions Private Limited
                  <br />
                  Office No. 317, Phii Platinum Square
                  <br /> situated at Viman Nagar,SNO 30/3A3B,
                  <br /> Next to Hyatt, Pune, Maharashtra - 411014 IN
                </p>
              </div>
            </div>
          </div>
          <div className="separator" />
          <div>
            <p className="btm-par">
              Copyright © 2021 Biddano Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
