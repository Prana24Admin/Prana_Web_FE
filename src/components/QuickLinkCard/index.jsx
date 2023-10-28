import React from "react";

import "./quickLinkCard.css";

const QuickLinkCard = ({ Card }) => {
  return (
    <div
      className="homeCard-boxContainer"
      // onClick={navigateVideoConsultant}
    >
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
