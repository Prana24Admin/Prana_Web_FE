import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../../../components/ProductItem";
import { handleRefetchAllCategories } from "../../../../libs/queryFunctions";

const ProductsByCategories = ({ categoryId, selectedCategory }) => {
  const fetchProductsByCategory = async () => {
    const response = await axiosInstance.get(`/filters/products/${categoryId}`);
    return response.data;
  };

  const {
    data: productsData,
    isLoading,
    error,
    refetch,
  } = useQuery([selectedCategory], fetchProductsByCategory);

  useEffect(() => {
    handleRefetchAllCategories();
    refetch();
  }, [categoryId, selectedCategory, refetch]);

  return (
    <div className="products-productsContainer">
      {productsData && productsData.products.length > 0 ? (
        productsData.products.map((product) => (
          <ProductItem key={product.uuid} product={product} />
        ))
      ) : (
        <p>No Products</p>
      )}
    </div>
  );
};

export default ProductsByCategories;
