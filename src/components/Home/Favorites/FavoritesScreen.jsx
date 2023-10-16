import React from "react";
import "./Favorites.css";
import image from "../../../assets/images/home/Beautynew.jpg";
import { Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axios";

const FavoritesScreen = () => {
  const fetchWishlist = async () => {
    const response = await axiosInstance.get("/wishlist");
    return response.data;
  };
  const { data, isLoading, error } = useQuery(["Wishlist"], fetchWishlist);

  return (
    <div className="favorites-mainContainer">
      <p className="favorites-title">Favorites</p>
      <div className="favorites-gridContainer">
        {data &&
          data.map((item) => (
            <div key={item.uuid} className="favorites-cardContainer">
              <img className="favorites-image" src={image} alt="imge" />
              <Heart
                fill="red"
                color="red"
                className="favorites-heartIcon"
                size={35}
              />
              <p className="favorites-productName">{item.product.name}</p>
              <div className="favorites-flexContainer">
                <p className="favorites-productPrice">₹{item.product.price}</p>
              </div>
              <p className="favorites-button">Add to cart</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FavoritesScreen;
