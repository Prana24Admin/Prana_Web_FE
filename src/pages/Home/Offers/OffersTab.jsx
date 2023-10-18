import React from "react";
import Flat from "../../../assets/images/offers/flat.jpg";
import Plus from "../../../assets/images/offers/plusoffer.jpg";
import Card from "react-bootstrap/Card";
import "../../../assets/css/Offers/offerInnerScreen.css";
import axiosInstance from "../../libs/axios";
import { useQuery } from "@tanstack/react-query";
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

  const { data, isLoading, error } = useQuery(["coupons"], fetchCoupons);

  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        <div className="d-flex flex-column">
          {data &&
            data.data.map((item) => {
              return (
                <>
                  <Card className="cardScreen">
                    <div className="trend-col">
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column offer-col1">
                          <img className="offer-img" src={item.image} />
                        </div>
                        <div className="d-flex flex-column offer-col2 offer-inner-col">
                          <p>{item.Text}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-column offer-col2 offer-inner-col">
                        <p className="offer-inner-par">{item.Par}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-row col-offer-inner-row">
                      <div className="d-flex flex-column">
                        <p className="coupon">
                          Code:<span className="code">{item.code}</span>{" "}
                        </p>
                      </div>
                      <div className="d-flex flex-column">
                        <p className="copy-code">Copy Code</p>
                      </div>
                    </div>
                  </Card>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default OffersTab;
