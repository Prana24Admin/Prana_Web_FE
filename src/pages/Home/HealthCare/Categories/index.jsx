import React from "react";

import ImageP from "../../../../assets/images/inner/med/popular/inner-smoking.jpg";

// import "../../../assets/css/Health/healthCare.css";
import "./categories.css";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const fetchCategories = async () => {
    const response = await axiosInstance.get("/filters?type=MEDICINE_CATEGORY");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["categories"], fetchCategories);

  return (
    <>
      <div className="categories-container">
        {isLoading && <p>Loading</p>}
        {error && <p>Error fetching data! Try again</p>}
        {data && (
          <div className="categories-marginContainer">
            <div className="categories-box">
              {data.data.map((category) => (
                <div
                  key={category.id}
                  className="categories-card"
                  onClick={() =>
                    navigate(`/healthcare/categories/${category.uuid}`)
                  }
                >
                  <div className="categories-innerContainer">
                    <div className="categories-leftContainer">
                      <img
                        loading="lazy"
                        // src={category.image}
                        src={ImageP}
                        width="90"
                        height="90"
                        alt={category.name}
                        className="categories-image"
                      />
                    </div>
                    <div className="categories-titleContainer">
                      <p className="categories-title">{category.name}</p>
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
export default Categories;
