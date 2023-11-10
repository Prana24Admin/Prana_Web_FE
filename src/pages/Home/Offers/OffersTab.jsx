import React from "react";
import "./offerInnerScreen.css";

import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../components/MainLayout";
import OfferScreen from "./Offers";
import Coupon from "../../../components/Coupon";
import Loader from "../../../components/Loader";
import { fetchCoupons } from "../../../services/couponService";

const OffersTab = () => {
  const { data, isLoading, error } = useQuery(["Coupons"], fetchCoupons);

  return (
    <MainLayout>
      <div>
        <OfferScreen />
      </div>
      <div>
        <div className="coupon-container">
          {isLoading && (
            <div className="fullContainer">
              <Loader width={"4rem"} height={"4rem"} />
            </div>
          )}
          {error && (
            <div>
              <p>Error fetching. Try again</p>
            </div>
          )}
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
