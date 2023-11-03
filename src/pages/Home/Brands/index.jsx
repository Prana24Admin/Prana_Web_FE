import React from "react";
import "../../../components/CarouselLayout/carousel.css";
import MainLayout from "../../../components/MainLayout";
import MainBannerCarousel from "../../../components/CarouselLayout/MainBannerCarousel";
import { brands } from "../../../utils/brands";
import { banners1 } from "../../../utils/banners";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const navigate = useNavigate();

  const fetchAllBrands = async () => {
    const response = await axiosInstance.get("/brands");
    return response.data;
  };
  const {
    data: brandsData,
    isLoading,
    error,
  } = useQuery(["Brands"], fetchAllBrands);

  const brandNavigation = (brandId) => {
    navigate(`/brands/${brandId}`);
  };

  return (
    <MainLayout>
      <div style={{ maxWidth: "1240px", margin: "auto", paddingTop: "10rem" }}>
        <MainBannerCarousel multiData={banners1} />
        <p className="main-title" style={{ marginTop: "1.5rem" }}>
          Brands
        </p>
        {brandsData && brandsData.data.length > 0 && (
          <div
            className="favorites-gridContainer"
            style={{ marginBottom: "1rem" }}
          >
            {brandsData.data.map((brand) => (
              <div
                className="card-borderContainer"
                onClick={() => brandNavigation(brand.uuid)}
              >
                <img
                  loading="lazy"
                  className="card-image"
                  src={brand.image}
                  alt={brand.name}
                />
                <p className="card-title">{brand.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Brands;
