import React, { lazy, Suspense } from "react";
import "../../../components/CarouselLayout/carousel.css";
import MainLayout from "../../../components/MainLayout";
import MainBannerCarousel from "../../../components/CarouselLayout/MainBannerCarousel";

import { banners1 } from "../../../utils/banners";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader";

const BrandCard = lazy(() => import("../../../components/BrandCard"));

const Brands = () => {
  const fetchAllBrands = async () => {
    const response = await axiosInstance.get("/brands");
    return response.data;
  };
  const {
    data: brandsData,
    isLoading,
    error,
  } = useQuery(["Brands"], fetchAllBrands);

  return (
    <MainLayout>
      <div style={{ maxWidth: "1240px", margin: "auto", paddingTop: "10rem" }}>
        <MainBannerCarousel multiData={banners1} />
        <p className="main-title" style={{ marginTop: "1.5rem" }}>
          Brands
        </p>
        {isLoading && (
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          <div>
            <p>Error fetching. Try again!</p>
          </div>
        )}
        {brandsData && brandsData.data.length > 0 && (
          <div
            className="favorites-gridContainer"
            style={{ marginBottom: "1rem" }}
          >
            <Suspense fallback={<p>Loading</p>}>
              {brandsData.data.map((brand) => (
                <BrandCard brand={brand} key={brand.uuid} />
              ))}
            </Suspense>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Brands;
