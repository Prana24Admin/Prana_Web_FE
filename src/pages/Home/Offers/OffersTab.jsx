import React from "react";
import Plus from "../../../assets/images/offers/plusoffer.jpg";
import Card from "react-bootstrap/Card";
import "./offerInnerScreen.css";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../../components/MainLayout";
import InnerSearchBar from "../../../components/Home/Nav/innerSearch";
import OfferScreen from "./Offers";
import { format } from "date-fns";

const OffersTab = () => {
  const OfferArr = [
    {
      Text: "Flat 15% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Plus,
    },
    {
      Text: "Flat 25% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Plus,
    },
    {
      Text: "Flat 45% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Plus,
    },
    {
      Text: "Flat 50% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Plus,
    },
  ];

  const fetchCoupons = async () => {
    const response = await axiosInstance.get("/coupons");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["Coupons"], fetchCoupons);

  return (
    <MainLayout>
      <div>
        <InnerSearchBar />
      </div>
      <div>
        <OfferScreen />
      </div>
      <div className="d-flex flex-row justify-content-center mt-5 mb-5">
        <div className="coupon-container">
          {data &&
            data.data.map((item) => {
              return (
                <div class="card">
                  <div class="main">
                    <div class="co-img">
                      <img
                        src="https://i.pinimg.com/originals/c7/84/67/c78467db9ff497393cb548a48f02d451.png"
                        alt=""
                        className="coupon-image"
                      />
                    </div>
                    <div class="vertical"></div>
                    <div class="content">
                      <h2>{item.status}</h2>
                      <h1>
                        {item.discount}% <span>Coupon</span>
                      </h1>
                      <p>
                        Valid till{" "}
                        {format(new Date(item.expiry_date), "dd MMMM yyyy")}
                      </p>
                    </div>
                  </div>
                  <div class="copy-button">
                    <input
                      id="copyvalue"
                      type="text"
                      readonly
                      value={item.code}
                      disabled
                    />
                    <button onclick="copyIt()" class="copybtn">
                      COPY
                    </button>
                  </div>
                  <div className="coupon-note">
                    <p>
                      *Get {item.discount}% off upto ₹{item.max_amount} on
                      orders above ₹{item.min_value} Maximum discount ₹
                      {item.max_value}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </MainLayout>
  );
};
export default OffersTab;
