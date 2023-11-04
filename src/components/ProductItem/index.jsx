import React from "react";

import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import Image from "../../assets/images/home/body.png";
import axiosInstance from "../../libs/axios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const ProductItem = ({ product, removeFromWishlist, wishlistItem = null }) => {
  const navigate = useNavigate();

  const addToCart = async (productId) => {
    const response = await axiosInstance.post("/cart", {
      quantity: 1,
      product_id: productId,
    });

    return response.data;
  };

  const { mutate, isLoading } = useMutation(
    (productId) => {
      return addToCart(productId);
    },
    {
      onSuccess: () => {
        removeFromWishlist(wishlistItem.uuid);
        toast.success("Added to cart");
      },
    },
    {
      onError: () => {
        toast.error("Try again");
      },
    }
  );

  return (
    <div
      className="favorites-cardWrapper"
      style={wishlistItem ? { height: "360px" } : { height: "auto" }}
    >
      <div
        className="favorites-cardContainer"
        onClick={() =>
          wishlistItem
            ? navigate(`/product/${wishlistItem.product.uuid}`)
            : navigate(`/product/${product.uuid}`)
        }
      >
        <img
          loading="lazy"
          className="favorites-image"
          src={Image}
          alt={product.name}
        />
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
      {wishlistItem && (
        <div onClick={() => removeFromWishlist(wishlistItem.uuid)}>
          <Trash2 className="favorites-trashIcon" size={32} />
        </div>
      )}
      {wishlistItem && (
        <button
          onClick={() => mutate(wishlistItem.product.uuid)}
          className="wishlist-addToCartButton"
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
