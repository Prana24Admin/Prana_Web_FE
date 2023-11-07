import React, { useState } from "react";
import "./products.css";

import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../../components/MainLayout";
import "../../HealthCare/ProductScreen/ProductScreen.css";
import ProductsByCategories from "./ProductsByCategories";
import Loader from "../../../../components/Loader";

const Products = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [subcategory, setSubCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Function to handle category navigation
  const handleCategoryNavigate = (category, categoryUUID) => {
    if (category !== "All Products") {
      navigate(
        `/healthcare/categories/${categoryId}?subcategory=${categoryUUID}`
      );
      setSelectedCategory(category);
      setSubCategory(categoryUUID);
    } else {
      navigate(`/healthcare/categories/${categoryId}`);
      setSelectedCategory("All Products");
      setSubCategory(null);
    }
  };

  // Function to fetch category data
  const fetchData = async () => {
    const response = await axiosInstance.get(`filters/products/${categoryId}`);
    return response.data;
  };

  // Use the useQuery hook to manage category data and its state
  const {
    data: categoryData,
    isLoading,
    error,
  } = useQuery(["AllCategories", categoryId], fetchData);

  return (
    // Render the Products component within the MainLayout
    <MainLayout>
      <div className="products-container">
        {isLoading && (
          // Show a loader while data is loading
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          // Display an error message if there's an error
          <div>
            <p>Error fetching. Try again</p>
          </div>
        )}
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
              {subcategory === null && (
                // Render products based on the selected category
                <ProductsByCategories
                  categoryId={categoryId}
                  selectedCategory={selectedCategory}
                />
              )}
              {subcategory && (
                // Render products for subcategories
                <ProductsByCategories
                  categoryId={subcategory}
                  selectedCategory={selectedCategory}
                />
              )}
            </div>
          </div>
        )}
        {/* Display an error image if there's an error */}
        {error && <img className="error-image" src={Error} alt="Error" />}
      </div>
    </MainLayout>
  );
};

export default Products;
