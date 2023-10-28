import React from "react";
import "./main.css";
import MainLayout from "../../../components/MainLayout";
import MultiItemCarousel from "../../../components/CarouselLayout";
import { Brands } from "../../../utils/Brands";

const Main = () => {
  return (
    <MainLayout>
      <div className="max-w-container">
        <MultiItemCarousel multiData={Brands} />
      </div>
    </MainLayout>
  );
};

export default Main;
