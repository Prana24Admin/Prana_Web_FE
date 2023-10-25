import { format } from "date-fns";
import React from "react";
import "./coupon.css";

const Coupon = ({
  item,
  smallCoupon = false,
  selectedCoupon,
  setSelectedCoupon,
  onClose,
}) => {
  const handleCouponSelect = (coupon) => {
    setSelectedCoupon(coupon);
    localStorage.setItem("appliedCoupon", JSON.stringify(coupon));
    onClose();
  };
  return (
    <div className={smallCoupon ? "small-card" : "card"}>
      <div className={smallCoupon ? "small-main" : "main"}>
        <div className={smallCoupon ? "small-co-img" : "co-img"}>
          <img
            src="https://i.pinimg.com/originals/c7/84/67/c78467db9ff497393cb548a48f02d451.png"
            alt={"coupon"}
            className={smallCoupon ? "coupon-image" : "coupon-image"}
          />
        </div>
        <div className={smallCoupon ? "small-vertical" : "vertical"}></div>
        <div className={smallCoupon ? "small-content" : "content"}>
          <h2>{item.status}</h2>
          <h1>
            {item.discount}% <span>Coupon</span>
          </h1>
          <p>Valid till {format(new Date(item.expiry_date), "dd MMMM yyyy")}</p>
        </div>
      </div>
      <div className={smallCoupon ? "small-copy-button" : "copy-button"}>
        <input id="copyvalue" type="text" readOnly value={item.code} disabled />
        <button
          onClick={() => handleCouponSelect(item)}
          className={smallCoupon ? "small-copybtn" : "copybtn"}
        >
          {smallCoupon ? "SELECT" : "COPY"}
        </button>
      </div>
      <div className={smallCoupon ? "small-coupon-note" : "coupon-note"}>
        <p>
          *Get {item.discount}% off upto ₹{item.max_amount} on orders above ₹
          {item.min_value}
        </p>
      </div>
    </div>
  );
};

export default Coupon;
