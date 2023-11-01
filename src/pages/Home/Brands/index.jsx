import React from "react";
import "../../../components/CarouselLayout/carousel.css";
import MainLayout from "../../../components/MainLayout";
import MainBannerCarousel from "../../../components/CarouselLayout/MainBannerCarousel";
import { brands } from "../../../utils/brands";
import { banners1 } from "../../../utils/banners";

const Brands = () => {
  return (
    <MainLayout>
      <div style={{ maxWidth: "1240px", margin: "auto", paddingTop: "10rem" }}>
        <MainBannerCarousel multiData={banners1} />
        <p className="main-title">Brands</p>
        <div
          className="favorites-gridContainer"
          style={{ marginBottom: "1rem" }}
        >
          {brands.map((item) => (
            <div className="card-borderContainer">
              <img className="card-image" src={item.Image} alt="" />
              {item.Text && <p className="card-title">{item.Text}</p>}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Brands;
