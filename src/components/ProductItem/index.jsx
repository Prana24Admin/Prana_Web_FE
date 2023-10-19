import React from "react";
import axiosInstance from "../../libs/axios";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import Image from "../../assets/images/home/body.png";
import toast from "react-hot-toast";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const addToWishlist = async (productId) => {
    const response = await axiosInstance.post("/wishlist", {
      product_id: productId,
      quantity: 1,
    });
    if (response.status === 201) {
      toast.success("Added to wishlist");
    }
    return response.data;
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="favorites-cardContainer"
        onClick={() => navigate(`/product/${product.uuid}`)}
      >
        <img className="favorites-image" src={Image} alt={product.name} />
        <p className="favorites-productName">{product.name}</p>
        <div className="favorites-flexContainer">
          <p className="favorites-productPrice">₹{product.discount}</p>
          <p style={{ fontSize: "0.85rem", color: "var(--neutralBlack)" }}>
            MRP:<span className="favorites-mrpPrice">₹{product.price}</span>
          </p>
        </div>
      </div>
      <div onClick={() => addToWishlist(product.uuid)}>
        <Heart className="favorites-heartIcon" size={35} />
      </div>
    </div>
  );
};

export default ProductItem;
