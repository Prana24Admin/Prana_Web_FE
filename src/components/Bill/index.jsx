import React from "react";
import { useNavigate } from "react-router-dom";

const Bill = ({ subTotal, selectedCoupon, couponValue }) => {
  const pathName = window.location.pathname;
  const navigate = useNavigate();
  const handleToCheckout = () => {
    localStorage.setItem(
      "bill",
      JSON.stringify({
        subTotal,
        selectedCoupon,
        couponValue,
      })
    );
    navigate("/checkout");
  };
  return (
    <div className="cart-billContainer">
      <p className="cart-titleText">Bill Summary</p>
      <div className="cart-flex">
        <p className="cart-descriptionText">Total Mrp</p>
        <p className="cart-descriptionText">₹{subTotal.toFixed(2)}</p>
      </div>
      <div className="cart-flex">
        <p className="cart-descriptionText">Delivery charges</p>
        <p className="cart-descriptionText">
          ₹{Math.ceil(subTotal * 0.1).toFixed(2)}
        </p>
      </div>
      <div className="cart-flex">
        <p className="cart-descriptionText">Discount</p>
        <p className="cart-descriptionText">₹{subTotal.toFixed(2)}</p>
      </div>
      {couponValue && (
        <div className="cart-flex">
          <p className="cart-descriptionText">Coupon</p>
          <p className="cart-selectedCouponText">₹{couponValue?.toFixed(2)}</p>
        </div>
      )}
      <div className="checkout-line" />
      <div className="cart-flex">
        <p className="cart-descriptionTextDark">Cart value</p>
        <p className="cart-descriptionTextDark">
          ₹{(subTotal - couponValue + Math.ceil(subTotal * 0.1)).toFixed(2)}
        </p>
      </div>
      {pathName === "/cart" && (
        <button className="cart-button" onClick={handleToCheckout}>
          Proceed To Checkout
        </button>
      )}
    </div>
  );
};

export default Bill;
