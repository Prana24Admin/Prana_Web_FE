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
            <div className="products-productsContainer">
              {data.products.map((product) => (
                <ProductItem key={product.uuid} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
      {error && <p>Error fetching! Try again.</p>}
    </div>
  );
};

export default Products;
