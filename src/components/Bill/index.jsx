import { BadgePercent, IndianRupee } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Bill = ({
  subTotal,
  selectedCoupon,
  couponValue,
  sampleCollectionCharges,
  discount,
  btnRef,
  onOpen,
  handleRemoveCoupon,
}) => {
  const pathName = window.location.pathname;
  const navigate = useNavigate();

  const handleToCheckout = () => {
    localStorage.setItem(
      "bill",
      JSON.stringify({
        subTotal,
        selectedCoupon,
        couponValue,
        discount,
        sampleCollectionCharges,
      })
    );
    if (pathName === "/lab/cart") navigate("/lab/checkout");
    else navigate("/checkout");
  };

  return (
    <section className="cart-billSectionWrapper">
      <div style={{ position: "relative" }}>
        <button
          className="cart-applyCouponButton"
          ref={btnRef}
          onClick={onOpen}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <BadgePercent size={18} />
            {selectedCoupon ? selectedCoupon.code : "Apply Coupon"}
          </div>
        </button>

        {selectedCoupon && (
          <button
            onClick={handleRemoveCoupon}
            className="cart-couponRemoveButton"
          >
            Remove
          </button>
        )}
      </div>
      <div className="cart-billContainer">
        <p className="cart-titleText">Bill Summary</p>
        <div className="cart-flex">
          <p className="cart-descriptionText">Total Mrp</p>
          <p className="cart-descriptionText">₹{subTotal.toFixed(2)}</p>
        </div>
        {pathName === "/cart" && (
          <div className="cart-flex">
            <p className="cart-descriptionText">Delivery charges</p>
            <p className="cart-descriptionText">
              + ₹{Math.ceil(subTotal * 0.1).toFixed(2)}
            </p>
          </div>
        )}

        {sampleCollectionCharges && (
          <div className="cart-flex">
            <p className="cart-descriptionText">Sample collection charges</p>
            <p className="cart-descriptionText">
              + ₹{sampleCollectionCharges.toFixed(2)}
            </p>
          </div>
        )}
        {discount && (
          <div className="cart-flex">
            <p className="cart-descriptionText">Discount</p>
            <p className="cart-descriptionText">- ₹{discount.toFixed(2)}</p>
          </div>
        )}
        {couponValue && (
          <div className="cart-flex">
            <p className="cart-descriptionText">Coupon</p>
            <p className="cart-selectedCouponText">
              - ₹{couponValue?.toFixed(2)}
            </p>
          </div>
        )}
        <div className="checkout-line" />

        <div className="cart-flex">
          <p className="cart-descriptionTextDark">Cart value</p>
          <p className="cart-descriptionTextDark">
            {pathName.includes("/lab")
              ? `₹${(subTotal + sampleCollectionCharges - discount).toFixed(2)}`
              : `₹${(
                  subTotal -
                  couponValue +
                  Math.ceil(subTotal * 0.1)
                ).toFixed(2)}`}
          </p>
        </div>
        {pathName === "/cart" && (
          <button className="cart-button" onClick={handleToCheckout}>
            Proceed To Checkout
          </button>
        )}
        {pathName === "/lab/cart" && (
          <button className="cart-button" onClick={handleToCheckout}>
            Proceed To Checkout
          </button>
        )}
      </div>
      <div className="cart-savingsContainer">
        <IndianRupee size={15} className="cart-ruppeIcon" />
        <p className="cart-savingsText">
          Total savings of{" "}
          <span style={{ fontWeight: "bold" }}>
            ₹{discount ? discount : "320"}
          </span>{" "}
          on this order
        </p>
      </div>
    </section>
  );
};

export default Bill;
