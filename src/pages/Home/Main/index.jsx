import React from "react";
import "./main.css";

import MainLayout from "../../../components/MainLayout";
import MultiItemCarousel from "../../../components/CarouselLayout";
import { brands } from "../../../utils/brands";
import { quickLinks } from "../../../utils/quickLinks";
import QuickLinkCard from "../../../components/QuickLinkCard";
import { quickLabTests } from "../../../utils/quickLabTests";
import { banners1, banners2 } from "../../../utils/banners";
import Prescription from "../../../components/Home/innerHome/prescription";
import { categories } from "../../../utils/categories";
import BannerCarousel from "../../../components/CarouselLayout/BannerCarousel";
import MainBannerCarousel from "../../../components/CarouselLayout/MainBannerCarousel";
import HighLights from "../../../components/Home/innerHome/highLights";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LabTestsCarousel from "../../../components/CarouselLayout/LabTestsCarousel";
import Downlaod from "../../../components/Home/innerHome/homeDownload";

const Main = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="max-w-container">
        {/* ----------------------Banners-------------------------- */}
        <div>
          <MainBannerCarousel multiData={banners1} />
        </div>

        {/* ---------------------QuickLinks-------------------- */}
        <div className="homeCard-consultationContainer">
          {quickLinks.map((link) => (
            <QuickLinkCard key={link.id} Card={link} />
          ))}
        </div>

        {/* ---------------------Brands---------------------------- */}
        <div style={{ marginTop: "1.25rem" }}>
          <div className="main-titleFlex">
            <p className="main-title">Popular Brands</p>
            <div className="main-leftText" onClick={() => navigate("/brands")}>
              <p>View More</p>
              <ChevronRight size={15} />
            </div>
          </div>
          <MultiItemCarousel multiData={brands} />
        </div>

        {/* -----------------------LabTests--------------------------- */}
        <div>
          <div className="labTest-mainContainer">
            <div className="main-titleFlex">
              <p className="main-title">Popular Lab Tests</p>
              <div
                className="main-leftText"
                onClick={() => navigate("/lab/all-tests")}
              >
                <p>View More</p>
                <ChevronRight size={15} />
              </div>
            </div>
            <LabTestsCarousel multiData={quickLabTests} />
          </div>
        </div>

        {/* ----------------------Offers------------------------------ */}
        <div></div>

        {/* ----------------------Banners-------------------------- */}
        <div>
          <p className="main-title">Offers Just For You</p>
          <BannerCarousel multiData={banners2} />
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
          <div className="main-titleFlex">
            <p className="main-title">Shop by Categories</p>
            <div
              className="main-leftText"
              onClick={() => navigate("/healthcare")}
            >
              <p>View More</p>
              <ChevronRight size={15} />
            </div>
          </div>
          <MultiItemCarousel multiData={categories} />
        </div>

        {/* ---------------------------Highlights---------------------- */}
        <div>
          <HighLights />
        </div>
        <div>
          <Downlaod />
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;
