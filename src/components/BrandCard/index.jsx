import React from "react";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const navigate = useNavigate();
  const brandNavigation = (brandId) => {
    navigate(`/brands/${brandId}`);
  };
  return (
    <div
      className="card-borderContainer"
      onClick={() => brandNavigation(brand.uuid)}
    >
      <img
        loading="lazy"
        className="card-image"
        src={brand.image}
        alt={brand.name}
      />
      <p className="card-title">{brand.name}</p>
    </div>
  );
};

export default BrandCard;
