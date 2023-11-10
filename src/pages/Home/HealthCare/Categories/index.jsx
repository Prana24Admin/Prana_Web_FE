import React from "react";
import "./categories.css";

import ImageP from "../../../../assets/images/inner/med/popular/inner-smoking.jpg";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../components/Loader";
import { fetchCategories } from "../../../../services/filtersService";

const Categories = () => {
  const navigate = useNavigate();

  // Use the useQuery hook to manage category data and its state
  const { data, isLoading, error } = useQuery(["categories"], fetchCategories);

  return (
    <>
      <div className="categories-container">
        {isLoading && (
          // Show a loader while data is loading
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          // Display an error message if there's an error
          <div>
            <p>Error fetching data! Try again</p>
          </div>
        )}
        {data && (
          <div className="categories-marginContainer">
            <div className="categories-box">
              {data.data.map((category) => (
                // Render each category card
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
                        src={ImageP} // Use the imported image for now
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
