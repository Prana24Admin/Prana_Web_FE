import React from "react";
import axiosInstance from "../../libs/axios";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import Image from "../../assets/images/home/body.png";
import toast from "react-hot-toast";

const ProductItem = ({ product, method, wishlistItem = null }) => {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <div
        className="favorites-cardContainer"
        onClick={() =>
          wishlistItem
            ? navigate(`/product/${wishlistItem.product.uuid}`)
            : navigate(`/product/${product.uuid}`)
        }
      >
        <img className="favorites-image" src={Image} alt={product.name} />
        <p className="favorites-productName">
          {wishlistItem !== null ? wishlistItem?.product.name : product?.name}
        </p>
        <div className="favorites-flexContainer">
          <p className="favorites-productPrice">
            ₹{wishlistItem ? wishlistItem.product.discount : product.discount}
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--neutralBlack)" }}>
            MRP:
            <span className="favorites-mrpPrice">
              ₹{wishlistItem ? wishlistItem.product.price : product.price}
            </span>
          </p>
        </div>
      </div>
      <div
        onClick={() =>
          wishlistItem ? method(wishlistItem.uuid) : method(product.uuid)
        }
      >
        <Heart
          className="favorites-heartIcon"
          fill={wishlistItem ? "var(--crimsonPink)" : "var(--powderWhite)"}
          size={35}
        />
      </div>
    </div>
  );
};

export default ProductItem;
