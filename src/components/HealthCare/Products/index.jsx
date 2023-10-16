import React from "react";
import Header from "../../Home/Nav/nav";
import InnerNav from "../../Home/Nav/innerNav";
import World from "../../../assets/images/home/Arrivals/homeopathic_drops.jpg";
import "./products.css";
import { propTypes } from "react-bootstrap/esm/Image";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "./ProductItem";
import image from "../../../assets/images/home/covid.jpg";
import { Heart } from "lucide-react";

const Products = () => {
  const { id } = useParams();

  const fetchData = async () => {
    const response = await axiosInstance.get(`filters/products/${id}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["data"], fetchData);

  return (
    <div className="products-container">
      <Header />
      <InnerNav />
      {isLoading && <p>Loading..</p>}
      {data && (
        <div className="products-flexContainer">
          <div className="products-leftContainer">
            <div className="products-filtersContainer">
              <h3>Categories</h3>
              <div className="products-categoryContainer">
                {data.items.map((category) => (
                  <h6 key={category.uuid}>{category.name}</h6>
                ))}
              </div>
            </div>
          </div>
          <div className="products-rightContainer">
            <h3>Products</h3>
            {/* <div className="products-productsContainer">
              {data.products.map((product) => (
                <ProductItem key={product.uuid} product={product} />
              ))}
              <div className="favorites-cardContainer">
                <div style={{ position: "relative", zIndex: 100 }}>
                <img className="favorites-image" src={image} alt="imge" />
                <Heart className="favorites-heartIcon" size={35} />
                </div>
                <p className="favorites-productName">Product name</p>
                <div className="favorites-flexContainer">
                  <p className="favorites-productPrice">₹568</p>
                </div>
                <p className="favorites-button">Add to cart</p>
              </div>
            </div> */}
            <div className="products-productsContainer">
              <div className="favorites-cardContainer">
                <img className="favorites-image" src={image} alt="imge" />
                <Heart className="favorites-heartIcon" size={35} />
                <p className="favorites-productName">Product name</p>
                <div className="favorites-flexContainer">
                  <p className="favorites-productPrice">₹568</p>
                  <p style={{ fontSize: "0.9rem", color: "#676767" }}>
                    MRP:<span className="favorites-mrpPrice">₹568</span>
                  </p>
                </div>
                <p className="favorites-button">Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && <p>Error fetching! Try again.</p>}
    </div>
  );
};

export default Products;
