import React, { useEffect } from "react";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../../../components/ProductItem";
import { handleRefetchAllCategories } from "../../../../libs/queryFunctions";
import products from "../../../../assets/images/VectorImages/NO_PRODUCTS.png";

import "./products.css";
import Loader from "../../../../components/Loader";

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
    <div>
      {isLoading && (
        <div className="fullContainer">
          <Loader width={"4rem"} height={"4rem"} />
        </div>
      )}
      {error && (
        <div>
          <p>Error fetching. Try again</p>
        </div>
      )}
      {productsData && productsData.products.length > 0 ? (
        <div className="products-productsContainer">
          {productsData.products.map((product) => (
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
