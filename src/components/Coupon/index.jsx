import { format } from "date-fns";
import React from "react";
import "./coupon.css";

const Coupon = ({ item }) => {
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
          <p>Valid till {format(new Date(item.expiry_date), "dd MMMM yyyy")}</p>
        </div>
      </div>
      <div class="copy-button">
        <input id="copyvalue" type="text" readonly value={item.code} disabled />
        <button onclick="copyIt()" class="copybtn">
          COPY
        </button>
      </div>
      <div className="coupon-note">
        <p>
          *Get {item.discount}% off upto ₹{item.max_amount} on orders above ₹
          {item.min_value} Maximum discount ₹{item.max_value}
        </p>
      </div>
    </div>
  );
};

export default Coupon;
