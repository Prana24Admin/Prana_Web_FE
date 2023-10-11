import React from "react";

import "react-multi-carousel/lib/styles.css";

// import "../../../assets/css/Health/healthCare.css";
import "./products.css";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const fetchCategories = async () => {
    const response = await axiosInstance.get("/filters?type=MEDICINE_CATEGORY");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["categories"], fetchCategories);

  return (
    <>
      <div className="products-container">
        {isLoading && <p>Loading</p>}
        {error && <p>Error fetching data! Try again</p>}
        {data && (
          <div className="products-marginContainer">
            <div className="products-box">
              {data.data.map((category) => (
                <div key={category.id} className="products-card">
                  <div className="products-innerContainer">
                    <div>
                      <img
                        loading="lazy"
                        src={category.image}
                        width="90"
                        height="90"
                        alt={category.name}
                        className="products-image"
                      />
                    </div>
                    <div className="products-titleContainer">
                      <p className="products-title">{category.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Products;
