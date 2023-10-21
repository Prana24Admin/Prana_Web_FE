import React from "react";
import Flat from "../../../assets/images/offers/flat.jpg";
import Plus from "../../../assets/images/offers/plusoffer.jpg";
import Card from "react-bootstrap/Card";
import "./offerInnerScreen.css";
import InnerSearch from "../../../components/Home/Nav/innerSearch";
import OfferScreen from "./Offers";

import MainLayout from "../../../components/MainLayout";
import { format } from "date-fns";
const Diagnostic = () => {
  const OfferArr = [
    {
      Text: "Flat 15% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Flat,
    },
    {
      Text: "Flat 25% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Plus,
    },
    {
      Text: "Flat 45% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Flat,
    },
    {
      Text: "Flat 50% OFF + 5% Cashback + Free Plus Membership",
      Par: "Coupon applicable on orders above Rs.999.Hurry! Order now.",
      image: Plus,
    },
  ];

  return (
    <MainLayout>
      <div>
        <InnerSearch />
      </div>
      <div>
        <OfferScreen />
      </div>
      <div className="d-flex flex-row justify-content-center mt-5 mb-5">
        <div className="coupon-container">
          {OfferArr.map((item) => {
            return (
              <>
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
                        20% <span>Coupon</span>
                      </h1>
                      <p>
                        Valid till{" "}
                        {format(new Date(2023 - 10 - 21), "dd MMMM yyyy")}
                      </p>
                    </div>
                  </div>
                  <div class="copy-button">
                    <input
                      id="copyvalue"
                      type="text"
                      readonly
                      value="BUY100"
                      disabled
                    />
                    <button onclick="copyIt()" class="copybtn">
                      COPY
                    </button>
                  </div>
                  <div className="coupon-note">
                    <p>
                      *Get 20% off upto ₹100 on orders above ₹25 Maximum
                      discount ₹ 100
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};
export default Diagnostic;
