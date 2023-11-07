import React, { useEffect } from "react";
import "./products.css";

import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../../../components/ProductItem";
import { handleRefetchAllCategories } from "../../../../libs/queryFunctions";
import products from "../../../../assets/images/VectorImages/NO_PRODUCTS.png";

import Loader from "../../../../components/Loader";

const ProductsByCategories = ({ categoryId, selectedCategory }) => {
  // Function to fetch products by category
  const fetchProductsByCategory = async () => {
    const response = await axiosInstance.get(`/filters/products/${categoryId}`);
    return response.data;
  };

  // Use the useQuery hook to manage product data and its state
  const {
    data: productsData,
    isLoading,
    error,
    refetch,
  } = useQuery([selectedCategory], fetchProductsByCategory);

  // Effect to handle data refetch when category or selectedCategory changes
  useEffect(() => {
    handleRefetchAllCategories();
    refetch();
  }, [categoryId, selectedCategory, refetch]);

  return (
    <div>
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
      {productsData && productsData.products.length > 0 ? (
        <div className="products-productsContainer">
          {productsData.products.map((product) => (
            // Render product items
            <ProductItem key={product.uuid} product={product} />
          ))}
        </div>
      ) : (
        <div className="products-imageContainer">
          <img style={{ width: "40%" }} src={products} alt="No Products" />
          <p className="products-imageDescription">No Products Found!</p>
        </div>
      )}
    </div>
  );
};

export default ProductsByCategories;
