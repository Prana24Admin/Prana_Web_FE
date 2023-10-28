import React from "react";
import "./main.css";
import MainLayout from "../../../components/MainLayout";
import MultiItemCarousel from "../../../components/CarouselLayout";
import { brands } from "../../../utils/brands";
import { quickLinks } from "../../../utils/quickLinks";
import QuickLinkCard from "../../../components/QuickLinkCard";
import { quickLabTests } from "../../../utils/quickLabTests";
import { banners2 } from "../../../utils/banners";
import Prescription from "../../../components/Home/innerHome/prescription";
import { catagories } from "../../../utils/categories";
import Rating from "../../../components/Home/innerHome/homeChoose";

const Main = () => {
  return (
    <MainLayout>
      <div className="max-w-container">
        {/* ---------------------QuickLinks-------------------- */}
        <div className="homeCard-consultationContainer">
          {quickLinks.map((link) => (
            <QuickLinkCard key={link.id} Card={link} />
          ))}
        </div>

        {/* ---------------------Brands---------------------------- */}
        <div>
          <p className="main-title">Brands</p>
          <MultiItemCarousel multiData={brands} />
        </div>

        {/* -----------------------LabTests--------------------------- */}
        <div>
          <div className="labTest-mainContainer">
            <div className="labTest-container">
              <p className="main-title">Lab Tests by Health Concern</p>
              <p className="main-description">Powered by 8H%Tai</p>
            </div>
            <MultiItemCarousel multiData={quickLabTests} />
          </div>
        </div>

        {/* ----------------------Offers------------------------------ */}
        <div></div>

        {/* ----------------------Banners-------------------------- */}
        <div>
          <p className="main-title">Offers Just For You</p>
          <MultiItemCarousel multiData={banners2} />
        </div>

        {/* -------------------------Payment Offers--------------------- */}
        {/* <div>
          <p className="main-title">Payment Offers</p>
          <MultiItemCarousel multiData={paymentOffers} />
        </div> */}

        {/* -------------------------Prescription------------------- */}
        <div>
          <Prescription />
        </div>

        {/* -----------------------Catagories----------------------- */}
        <div>
          <MultiItemCarousel multiData={catagories} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;
