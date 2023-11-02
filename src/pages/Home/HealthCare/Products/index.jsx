import React, { useState } from "react";

import "./products.css";

import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";

import MainLayout from "../../../../components/MainLayout";

import ProductsByCategories from "./ProductsByCategories";
const Products = () => {
  const navigate = useNavigate();
  const { categoryId, id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const handleCategoryNavigate = (category, categoryUUID) => {
    if (category !== "All Products") {
      navigate(`/healthcare/categories/${categoryId}/${categoryUUID}`);
    } else {
      navigate(`/healthcare/categories/${categoryId}`);
    }
    setSelectedCategory(category);
  };

  const fetchData = async () => {
    console.log(categoryId, id);
    const response = await axiosInstance.get(`filters/products/${categoryId}`);
    return response.data;
  };

  const {
    data: categoryData,
    isLoading,
    error,
  } = useQuery(["AllCategories"], fetchData);

  return (
    <MainLayout>
      <div className="products-container">
        {isLoading && <p>Loading..</p>}
        {categoryData && (
          <div className="products-flexContainer">
            <div className="products-leftContainer">
              <div className="products-filtersContainer">
                <p className="products-categoryHeading">Categories</p>
                <div className="products-categoryContainer">
                  <p
                    className={
                      selectedCategory === "All Products"
                        ? "products-filterItemsActive"
                        : "products-filterItems"
                    }
                    onClick={() =>
                      handleCategoryNavigate("All Products", categoryId)
                    }
                  >
                    All Products
                  </p>
                  {categoryData.items.map((category) => (
                    <p
                      onClick={() =>
                        handleCategoryNavigate(category.name, category.uuid)
                      }
                      className={
                        selectedCategory === category.name
                          ? "products-filterItemsActive"
                          : "products-filterItems"
                      }
                      key={category.uuid}
                    >
                      {category.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="products-rightContainer">
              <p className="main-header">Products</p>
              {!id && (
                <ProductsByCategories
                  categoryId={categoryId}
                  selectedCategory={selectedCategory}
                />
              )}
              {id && (
                <ProductsByCategories
                  categoryId={id}
                  selectedCategory={selectedCategory}
                />
              )}
            </div>
          </div>
        )}
        {error && <img className="error-image" src={Error} alt="Error" />}
      </div>
    </MainLayout>
  );
};

export default Products;
