import React from "react";
import "./products.css";
import axiosInstance from "../../../libs/axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const addToCart = async (productId) => {
    const response = await axiosInstance.post("/cart", {
      quantity: 1,
      product_id: productId,
    });

    return response.data;
  };

  const { mutate, isSuccess, isLoading, isError } = useMutation((productId) => {
    return addToCart(productId);
  });

  return (
    <div
      className="products-productsCard"
      onClick={() => navigate(`/product/${product.uuid}`)}
    >
      <div className="products-ImageCenter">
        <img
          className="products-productsImage"
          src={product.image}
          alt={product.name}
        />
        <Heart className="products-heartIcon" size={35} />
      </div>
      <p className="products-title">{product.name}</p>
      <p className="products-mrpPrice">
        MRP:<span className="products-mrp"> {product.price}</span>
      </p>
      <p className="products-discountPrice">Our Price:{product.discount}</p>
      <button
        onClick={() => mutate(product.uuid)}
        className={isSuccess ? "products-successButton" : "products-addButton"}
      >
        {isLoading ? "Loading" : isSuccess ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductItem;
