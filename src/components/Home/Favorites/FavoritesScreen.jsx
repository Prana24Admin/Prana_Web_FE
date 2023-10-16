import React from "react";
import "./Favorites.css";
import image from "../../../assets/images/home/Beautynew.jpg";
import { Heart } from "lucide-react";

const FavoritesScreen = () => {
  return (
    <div className="favorites-mainContainer">
      <p className="favorites-title">Favorites</p>
      <div className="favorites-gridContainer">
        <div className="favorites-cardContainer">
          {/* <div style={{ position: "relative", zIndex: 100 }}> */}
          <img className="favorites-image" src={image} alt="imge" />
          <Heart className="favorites-heartIcon" size={35} />
          {/* </div> */}
          <p className="favorites-productName">Product name</p>
          <div className="favorites-flexContainer">
            <p className="favorites-productPrice">₹568</p>
          </div>
          <p className="favorites-button">Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default FavoritesScreen;
