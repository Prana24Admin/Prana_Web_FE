import React from "react";
import "../CarouselLayout/carousel.css";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const navigate = useNavigate();

  const brandNavigation = (brandId) => {
    navigate(`/brands/${brandId}`);
  };

  // JSX structure for rendering the brand card
  return (
    <div
      className="card-borderContainer"
      onClick={() => brandNavigation(brand.uuid)}
    >
      {/* Image for the brand card */}
      <img
        loading="lazy"
        className="card-image"
        src={brand.image}
        alt={brand.name}
      />

      {/* Title for the brand card */}
      <p className="card-title">{brand.name}</p>
    </div>
  );
};

export default BrandCard;
