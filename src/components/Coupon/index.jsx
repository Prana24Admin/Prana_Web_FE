import { format } from "date-fns";
import React from "react";
import "./coupon.css";
import toast from "react-hot-toast";

const Coupon = ({
  item,
  smallCoupon = false,
  subTotal,
  setSelectedCoupon,
  onClose,
}) => {
  // Function to handle coupon selection
  const handleCouponSelect = (coupon) => {
    // Set the selected coupon in the parent component state
    if (subTotal > coupon.max_value) {
      return toast.error("Coupon cannot be applied");
    }
    setSelectedCoupon(coupon);
    toast.success("Coupon applied");

    // Store the selected coupon in local storage
    localStorage.setItem("appliedCoupon", JSON.stringify(coupon));

    // Close the coupon card
    onClose();
  };

  // JSX structure for the Coupon component
  return (
    <div className={smallCoupon ? "small-card" : "card"}>
      <div className={smallCoupon ? "small-main" : "main"}>
        {/* Coupon image section */}
        <div className={smallCoupon ? "small-co-img" : "co-img"}>
          <img
            loading="lazy"
            src="https://i.pinimg.com/originals/c7/84/67/c78467db9ff497393cb548a48f02d451.png"
            alt={"coupon"}
            className="coupon-image"
          />
        </div>
        {/* Vertical line separator */}
        <div className={smallCoupon ? "small-vertical" : "vertical"}></div>
        {/* Coupon content section */}
        <div className={smallCoupon ? "small-content" : "content"}>
          <h2>{item.status}</h2>
          <h1>
            {item.discount}% <span>Coupon</span>
          </h1>
          <p>Valid till {format(new Date(item.expiry_date), "dd MMMM yyyy")}</p>
        </div>
      </div>
      {/* Copy button and coupon code section */}
      <div className={smallCoupon ? "small-copy-button" : "copy-button"}>
        <input id="copyvalue" type="text" readOnly value={item.code} disabled />
        {/* "SELECT" button for small coupon cards */}
        {smallCoupon && (
          <button
            onClick={() => handleCouponSelect(item)}
            className="small-copybtn"
          >
            "SELECT"
          </button>
        )}
      </div>
      {/* Coupon note section */}
      <div className={smallCoupon ? "small-coupon-note" : "coupon-note"}>
        <p>
          *Get {item.discount}% off up to ₹{item.max_amount} on orders above ₹
          {item.min_value}
        </p>
      </div>
    </div>
  );
};

export default Coupon;
