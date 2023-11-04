import React from "react";
import "./labCard.css";
import Image from "../../assets/images/lab/package/basic-women.jpg";
import { useNavigate } from "react-router-dom";

const LabCard = () => {
  const navigate = useNavigate();
  return (
    <div className="labCard-Container">
      <div
        className="labCard-cardContainer"
        onClick={() => navigate("/packageorder")}
      >
        <img
          loading="lazy"
          className="labCard-cardImage"
          src={Image}
          alt="sanju"
        />
        <p className="labCard-cardTitle">Title</p>
        <div className="labCard-flexContainer">
          <div>
            <p className="labCard-descriptionText">Includes 100 test</p>
            <p className="labCard-cardPrice">
              ₹1230<span className="labCard-flexText">onwards</span>
            </p>
          </div>
          <div>
            <button className="labCard-button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabCard;
