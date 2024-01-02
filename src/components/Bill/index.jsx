import React from "react";
import "../../pages/Home/Cart/cart.css";

import { BadgePercent, IndianRupee } from "lucide-react";
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
    // Storing the bill details in localStorage before navigation
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

    // Determining the correct checkout route based on the pathname
    if (pathName === "/lab/cart") navigate("/lab/checkout");
    else navigate("/checkout");
  };

  // JSX structure for rendering the bill section in the cart
  return (
    <section className="cart-billSectionWrapper">
      {/* Container for applying and removing coupons */}
      {!pathName.includes("/checkout") && (
        <div style={{ position: "relative" }}>
          {/* Button to apply coupons */}
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

          {/* Button to remove applied coupon */}
          {selectedCoupon && (
            <button
              onClick={handleRemoveCoupon}
              className="cart-couponRemoveButton"
            >
              Remove
            </button>
          )}
        </div>
      )}

      {/* Container for displaying the bill details */}
      <div className="cart-billContainer">
        {/* Title for the bill summary */}
        <p className="cart-titleText">Bill Summary</p>
        {/* Displaying total MRP */}
        <div className="cart-flex">
          <p className="cart-descriptionText">Total Price</p>
          <p className="cart-descriptionText">₹{subTotal.toFixed(2)}</p>
        </div>
        {/* Displaying sample collection charges */}
        {sampleCollectionCharges && (
          <div className="cart-flex">
            <p className="cart-descriptionText">Sample collection charges</p>
            <p className="cart-descriptionText">
              + ₹{sampleCollectionCharges.toFixed(2)}
            </p>
          </div>
        )}
        {/* Displaying discount */}
        {discount && (
          <div className="cart-flex">
            <p className="cart-descriptionText">Discount</p>
            <p className="cart-descriptionText">- ₹{discount.toFixed(2)}</p>
          </div>
        )}

        {/* Displaying coupon value */}
        {couponValue && (
          <div className="cart-flex">
            <p className="cart-descriptionText">Coupon</p>
            <p className="cart-selectedCouponText">
              - ₹{couponValue?.toFixed(2)}
            </p>
          </div>
        )}

        {/* Displaying delivery charges for the cart page */}
        {pathName === "/checkout" && (
          <div className="cart-flex">
            <p className="cart-descriptionText">Delivery charges</p>
            <p className="cart-descriptionText">
              + ₹
              {Math.ceil((subTotal - discount - couponValue) * 0.1).toFixed(2)}
            </p>
          </div>
        )}

        {/* Horizontal line for separation */}
        <div className="checkout-line" />
        {/* Displaying the total cart value */}
        <div className="cart-flex">
          <p className="cart-descriptionTextDark">Cart value</p>
          <p className="cart-descriptionTextDark">
            {pathName.includes("/lab")
              ? `₹${(subTotal + sampleCollectionCharges - discount).toFixed(2)}`
              : `₹${(
                  subTotal -
                  discount -
                  couponValue +
                  (!pathName.includes("/cart")
                    ? Math.ceil((subTotal - discount - couponValue) * 0.1)
                    : 0)
                ).toFixed(2)}`}
          </p>
        </div>
        {/* Proceed to checkout button for the cart page */}
        {pathName === "/cart" && (
          <button className="cart-button" onClick={handleToCheckout}>
            Proceed To Checkout
          </button>
        )}
        {/* Proceed to checkout button for the lab/cart page */}
        {pathName === "/lab/cart" && (
          <button className="cart-button" onClick={handleToCheckout}>
            Proceed To Checkout
          </button>
        )}
      </div>

      {/* Container for displaying total savings information */}
      {discount && (
        <div className="cart-savingsContainer">
          <IndianRupee size={15} className="cart-ruppeIcon" />
          <p className="cart-savingsText">
            Total savings of{" "}
            <span style={{ fontWeight: "bold" }}>
              ₹{couponValue ? couponValue + discount : discount}
            </span>{" "}
            on this order
          </p>
        </div>
      )}
    </section>
  );
};

// Exporting the Bill component as the default export
export default Bill;
