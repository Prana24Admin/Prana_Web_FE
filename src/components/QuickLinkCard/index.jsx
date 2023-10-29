import React from "react";

import "./quickLinkCard.css";
import { useNavigate } from "react-router-dom";

const QuickLinkCard = ({ Card }) => {
  const navigate = useNavigate();
  return (
    <div className="homeCard-boxContainer" onClick={() => navigate(Card.path)}>
      <img className="homeCard-img" src={Card.Image} alt={Card.header} />
      <div
      // style={{ display: "flex", alignItems: "center" }}
      >
        <p className="homeCard-header"> {Card.header}</p>
        <p className="homeCard-description">{Card.description}</p>
      </div>
    </div>
  );
};

export default QuickLinkCard;
