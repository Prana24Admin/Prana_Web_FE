import React from "react";

import "./about.css";
import Connect from "../../../assets/images/about/connect.png";
import Transparency from "../../../assets/images/about/transparency.png";
import Trust from "../../../assets/images/about/trust.png";
import AboutInner from "./about-inner";
import MainLayout from "../../../components/MainLayout";

const AboutIndex = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <MainLayout>
      <div className="about-mainContainer">
        <div className="about-detailsContainer">
          <p className="about-detailsHeader">Our Mission</p>
          <p className="about-par-txt">
            Practo is on a mission to make quality healthcare affordable and
            accessible for over a billion+ Indians. We believe in empowering our
            users with the most accurate, comprehensive, and curated information
            and care, enabling them to make better healthcare decisions.
          </p>
        </div>
        <div
          className="about-detailsContainer"
          style={{
            marginTop: "1.5rem",
          }}
        >
          <p className="about-detailsHeader">Our approach to healthcare </p>
          <p className="about-par-txt">
            Providing high-quality, trusted, and accessible healthcare is our
            reason for being
          </p>
        </div>
        <div
          // className="d-flex flex-row justify-content-center"
          style={{
            // justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            margin: "auto",
            marginLeft: "15rem",
          }}
        >
          <div
            className="d-flex flex-column col-3 "
            style={{ alignItems: "center" }}
          >
            <img className="about-img" src={Connect} alt="" />
            <h3 className="connect">Connect</h3>
          </div>
          <div
            className="d-flex flex-column col-3"
            style={{ alignItems: "center" }}
          >
            <img className="about-img" src={Transparency} alt="" />
            <h3 className="transparency">Transparency</h3>
          </div>
          <div
            className="d-flex flex-column col-3"
            style={{ alignItems: "center" }}
          >
            <img className="about-img" src={Trust} alt="" />
            <h3 className="connect">Trust</h3>
          </div>
        </div>
        <div className="prana">
          <p className="pra">What is Prana24 ?</p>
          <p className="about-par-txt">
            Prana24 is a consumer healthcare “super app”.
          </p>
          <p className="about-par-txt">
            Prana 24 is a consumer healthcare “super app” that provides
            consumers with on-demand, home delivered access to a wide range of
            prescription, OTC pharmaceutical, other consumer healthcare
            products, comprehensive diagnostic test services, and
            teleconsultations thereby serving their healthcare needs.
          </p>
        </div>
        <div className="par-mid">
          <p className="ultimate">
            Our ultimate goal is to provide affordable healthcare to one and
            all.
          </p>
        </div>
        <div className="about-alingCenter">
          <p className="about-knownText">Get to know us better</p>
          <iframe
            className="youtube"
            src="https://www.youtube.com/embed/Kk-POoUQAoA"
          />
        </div>
        <div>
          <AboutInner />
        </div>
      </div>
    </MainLayout>
  );
};
export default AboutIndex;
