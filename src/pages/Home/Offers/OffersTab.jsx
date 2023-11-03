import React from "react";
import "./offerInnerScreen.css";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../components/MainLayout";
// import InnerSearchBar from "../../../components/Home/Nav/innerSearch";
import OfferScreen from "./Offers";
import Coupon from "../../../components/Coupon";

const OffersTab = () => {
  const fetchCoupons = async () => {
    const response = await axiosInstance.get("/coupons");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["Coupons"], fetchCoupons);

  return (
    <MainLayout>
      <div>
        <OfferScreen />
      </div>
      <div>
        <div className="coupon-container">
          {data &&
            data.data.map((item) => {
              return <Coupon key={item.uuid} item={item} />;
            })}
        </div>
      </div>
    </MainLayout>
  );
};
export default OffersTab;
