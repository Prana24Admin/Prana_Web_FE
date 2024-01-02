import React, { useEffect, useState } from "react";
import "./cart.css";

import { useQuery } from "@tanstack/react-query";
import { useDisclosure } from "@chakra-ui/react";

import MainLayout from "../../../components/MainLayout";
import CartCard from "../../../components/CartCard";
import Slider from "../../../components/Slider";
import { CouponDrawer } from "../../../components/Slider/CouponDrawer";
import Bill from "../../../components/Bill";
import Loader from "../../../components/Loader";

import EmptyCart from "../../../assets/images/VectorImages/cart empty.png";
import { fetchCartData } from "../../../services/cartService";

const Cart = () => {
  // Using React Hooks for state and side effects
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { data, isLoading, error } = useQuery(["cart"], fetchCartData);

  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [couponValue, setCouponValue] = useState(null);

  // Calculate subTotal based on items in the cart
  const subTotal = data?.reduce((sum, product) => {
    return sum + product.product.price * product.quantity;
  }, 0);

  const totalDiscount = data?.reduce((sum, product) => {
    return (
      sum +
      parseFloat(
        product.product.price *
          (product.product.discount / 100) *
          product.quantity
      )
    );
  }, 0);

  // Effect to check for a previously applied coupon in local storage
  useEffect(() => {
    const coupon = JSON.parse(localStorage.getItem("appliedCoupon"));
    if (coupon) {
      setSelectedCoupon(coupon);
    } else {
      setSelectedCoupon(null);
    }
  }, [subTotal, totalDiscount]);

  // Effect to apply coupon discount based on subtotal and selected coupon
  useEffect(() => {
    const couponDiscount = () => {
      if (
        subTotal - totalDiscount <= selectedCoupon.max_value &&
        subTotal - totalDiscount >= selectedCoupon.min_value
      ) {
        const couponPrice =
          (subTotal - totalDiscount) * (selectedCoupon.discount / 100);
        if (selectedCoupon.max_amount >= couponPrice) {
          setCouponValue(couponPrice);
        } else {
          setCouponValue(selectedCoupon.max_amount);
        }
      }
      return;
    };
    if (selectedCoupon) {
      couponDiscount();
    }
  }, [subTotal, selectedCoupon, totalDiscount]);

  // Function to handle removing applied coupon
  const handleRemoveCoupon = () => {
    localStorage.removeItem("appliedCoupon");
    setSelectedCoupon(null);
    setCouponValue(null);
  };

  return (
    <MainLayout>
      <section>
        <div className="cart-mainContainer">
          <div className="cart-marginContainer">
            {/* Loader while fetching data */}
            {isLoading && (
              <div className="fullContainer">
                <Loader width={"4rem"} height={"4rem"} />
              </div>
            )}
            {/* Error message if fetching fails */}
            {error && (
              <div>
                <p>Error fetching. Try again</p>
              </div>
            )}
            {/* Check for cart items */}
            {data &&
              (data.length < 1 ? ( // Display empty cart image if no items
                <div className="cart-emptyContainer" style={{ margin: "auto" }}>
                  <img
                    className="vector-image"
                    src={EmptyCart}
                    alt="cartEmpty"
                  />
                  <p className="cart-title">Your Healthcare cart is empty!</p>
                </div>
              ) : (
                // Display cart items and bill section
                <>
                  <div className="cart-cardContainer">
                    <p className="main-head-title">Items in Your cart</p>
                    {data.map((item) => (
                      <div key={item.product.uuid}>
                        <CartCard cartItem={item} labItem={null} />
                      </div>
                    ))}
                  </div>
                  <div className="cart-rightContainer">
                    <Bill
                      subTotal={subTotal}
                      couponValue={couponValue}
                      discount={totalDiscount}
                      selectedCoupon={selectedCoupon}
                      btnRef={btnRef}
                      handleRemoveCoupon={handleRemoveCoupon}
                      onOpen={onOpen}
                    />
                  </div>
                </>
              ))}
          </div>
          {/* Apply Coupon Slider */}
          <Slider
            onClose={onClose}
            isOpen={isOpen}
            btnRef={btnRef}
            header={"Apply Coupon"}
            drawerBody={
              <CouponDrawer
                selectedCoupon={selectedCoupon}
                setSelectedCoupon={setSelectedCoupon}
                subTotal={subTotal - totalDiscount}
                onClose={onClose}
              />
            }
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default Cart;
