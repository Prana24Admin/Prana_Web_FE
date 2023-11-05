import React from "react";
import MainLayout from "../../../../components/MainLayout";
import "./brandDetails.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import "../../Wishlist/wishlist.css";

const BrandDetails = () => {
  const { id } = useParams();
  const fetchBrandDetails = async () => {
    const response = await axiosInstance.get(`/brands/${id}`);
    return response.data;
  };
  const {
    data: brandDetailsData,
    isLoading,
    error,
  } = useQuery(["BrandDetails"], fetchBrandDetails);

  return (
    <MainLayout>
      <section className="brandDetails-container">
        {brandDetailsData && (
          <>
            <div className="brandDetails-flexContainer">
              <div className="brandDetails-leftContainer">
                <img src={brandDetailsData.image} alt={brandDetailsData.name} />
              </div>
              <div className="brandDetails-rightContainer">
                <p className="brandDetails-brandHeading">
                  {brandDetailsData.name}
                </p>
                <p className="brandDetails-description">
                  {brandDetailsData.description}
                </p>
                <p className="brandDetails-context">
                  {brandDetailsData.context}
                </p>
              </div>
            </div>
            <div>
              <p className="brandDetails-productHeading">
                Products from{" "}
                <span className="brandDetails-brandName">
                  {brandDetailsData.name}
                </span>
              </p>
              <div
                className="favorites-gridContainer"
                style={{ marginBottom: "1rem" }}
              >
                {brandDetailsData.items.length > 0 ? (
                  brandDetailsData.items.map((product) => (
                    <div className="card-borderContainer">
                      <img
                        loading="lazy"
                        className="card-image"
                        src={product.image}
                        alt={product.name}
                      />
                      <p className="card-title">{product.name}</p>
                    </div>
                  ))
                ) : (
                  <p>No Products</p>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </MainLayout>
  );
};

export default BrandDetails;
