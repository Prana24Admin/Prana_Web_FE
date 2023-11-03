import React from "react";
import Flat from "../../../assets/images/offers/flat.jpg";
import Plus from "../../../assets/images/offers/plusoffer.jpg";

import "./offerInnerScreen.css";
// import InnerSearch from "../../../components/Home/Nav/innerSearch";
import OfferScreen from "./Offers";

import MainLayout from "../../../components/MainLayout";
import { format } from "date-fns";
import Coupon from "../../../components/Coupon";
const Diagnostic = () => {
  const OfferArr = [
    {
      Text: "Flat 15% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Flat,
      expiry_date: 2023 - 10 - 21,
      status: "ACTIVE",
      discount: 20,
      min_value: 10,
      max_value: 80,
      max_amount: 80,
    },
    {
      Text: "Flat 25% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Plus,
      expiry_date: 2023 - 10 - 21,
      status: "ACTIVE",
      discount: 20,
      min_value: 10,
      max_value: 80,
      max_amount: 80,
    },
    {
      Text: "Flat 45% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Flat,
      expiry_date: 2023 - 10 - 21,
      status: "ACTIVE",
      discount: 20,
      min_value: 10,
      max_value: 80,
      max_amount: 80,
    },
    {
      Text: "Flat 50% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Plus,
      expiry_date: 2023 - 10 - 21,
      status: "ACTIVE",
      discount: 20,
      min_value: 10,
      max_value: 80,
      max_amount: 80,
    },
  ];

  return (
    <MainLayout>
      <div>
        <OfferScreen />
      </div>
      <div>
        <div className="coupon-container">
          {OfferArr.map((item) => {
            return <Coupon key={item.uuid} item={item} />;
          })}
        </div>
      </div>
    </MainLayout>
  );
};
export default Diagnostic;
