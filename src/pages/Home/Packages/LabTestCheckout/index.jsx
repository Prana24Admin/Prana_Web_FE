import React from "react";
import MainLayout from "../../../../components/MainLayout";
import "./labcheckout.css";

const LabTestCheckout = () => {
  return (
    <MainLayout>
      <div className="labCheckout-mainContainer">
        <div className="labCheckout-flexContainer">
          <div className="labCheckout-leftContainer">
            <p className="labCheckout-title">Payment Method</p>
            <label className="labCheckout-gap">
              <input type="radio" />
              <p className="labCheckout-description">
                Pay Cash at the time of sample collection{" "}
              </p>
            </label>
            <label className="labCheckout-gap">
              <input type="radio" />
              <p className="labCheckout-description">
                Pay Online at the time of sample collection{" "}
              </p>
            </label>
          </div>
          <div className="labCheckout-rightContainer">
            <p className="labCheckout-title">Bill Summary</p>
            <div className="labCheckout-justifyContainer">
              <p className="labCheckout-description">Item Total</p>
              <p className="labCheckout-mrp">
                <span className="labCheckout-discount">₹123.00</span>
                ₹123.00
              </p>
            </div>
            <div className="labCheckout-justifyContainer">
              <p className="labCheckout-description">Coupon Applied</p>
              <p className="labCheckout-mrp">₹1234.00</p>
            </div>
            <div className="labCheckout-justifyContainer">
              <p className="labCheckout-description">Home Collection Charges</p>
              <p className="labCheckout-mrp">
                <span className="labCheckout-discount">₹123.00</span>
                FREE
              </p>
            </div>
            <div className="labCheckout-line" />
            <div className="labCheckout-justifyContainer">
              <p
                className="labCheckout-description"
                style={{ fontWeight: "600" }}
              >
                Order Total
              </p>
              <p className="labCheckout-mrp">₹123.00</p>
            </div>
            <button className="cart-button">Proceed To Checkout</button>
            <div className="cart-savingsContainer labCheckout-savingsContainer">
              <p className="cart-savingsText">
                Total savings of{" "}
                <span style={{ fontWeight: "bold" }}>₹324</span> on this order
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LabTestCheckout;
