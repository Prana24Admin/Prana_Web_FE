import React from "react";

import "./products.css";

import { useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";

import MainLayout from "../../../../components/MainLayout";
import ProductItem from "../../../../components/ProductItem";
const Products = () => {
  const { id } = useParams();

  const fetchData = async () => {
    const response = await axiosInstance.get(`filters/products/${id}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["All Products"], fetchData);

  return (
    <MainLayout>
      <div className="products-container">
        {isLoading && <p>Loading..</p>}
        {data && (
          <div className="products-flexContainer">
            <div className="products-leftContainer">
              <div className="products-filtersContainer">
                <p className="main-header">Categories</p>
                <div className="products-categoryContainer">
                  {data.items.map((category) => (
                    <p className="products-filterItems" key={category.uuid}>
                      {category.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="products-rightContainer">
              <p className="main-header">Products</p>
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
    </MainLayout>
  );
};

export default Products;
