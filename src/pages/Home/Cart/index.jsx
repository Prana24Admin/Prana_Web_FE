import React, { useEffect, useState } from "react";

import EmptyCart from "../../../assets/images/VectorImages/cart empty.png";

import "./cart.css";
// import Error from "../../../assets/images/ErrorPages/404 Error.png";

import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { BadgePercent, IndianRupee } from "lucide-react";

import { useNavigate } from "react-router-dom";

import CartCard from "../../../components/CartCard";
import MainLayout from "../../../components/MainLayout";
import { Button, useDisclosure } from "@chakra-ui/react";
import Slider from "../../../components/Slider";

import { CouponDrawer } from "../../../components/Slider/CouponDrawer";
import Bill from "../../../components/Bill";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigate = useNavigate();

  const fetchCart = async () => {
    const response = await axiosInstance.get("/cart");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["cart"], fetchCart);

  const [selectedCoupon, setSelectedCoupon] = useState(null);

  useEffect(() => {
    const coupon = JSON.parse(localStorage.getItem("appliedCoupon"));
    if (coupon) {
      setSelectedCoupon(coupon);
    } else {
      setSelectedCoupon(null);
    }
  }, []);

  const [couponValue, setCouponValue] = useState(null);

  const subTotal = data?.reduce((sum, product) => {
    return sum + product.product.price * product.quantity;
  }, 0);

  useEffect(() => {
    const couponDiscount = () => {
      if (
        subTotal <= selectedCoupon.max_value &&
        subTotal >= selectedCoupon.min_value
      ) {
        const couponPrice = subTotal * (selectedCoupon.discount / 100);
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
  }, [subTotal, selectedCoupon]);

  const handleRemoveCoupon = () => {
    localStorage.removeItem("appliedCoupon");
    setSelectedCoupon(null);
    setCouponValue(null);
  };

  return (
    <MainLayout>
      <section>
        {isLoading && <p>Loading..</p>}
        <div className="cart-mainContainer">
          <div className="cart-marginContainer">
            {data &&
              (data.length < 1 ? (
                <div style={{ margin: "auto" }}>
                  <img
                    className="vector-image"
                    src={EmptyCart}
                    alt="cartEmpty"
                  />
                </div>
              ) : (
                <>
                  <div className="cart-cardContainer">
                    <p className="main-head-title">Items in Your cart</p>
                    {data.map((item) => (
                      <CartCard
                        key={item.product.uuid}
                        cartItem={item}
                        labItem={null}
                      />
                    ))}
                  </div>
                  <div className="cart-rightContainer">
                    {/* Bill */}
                    <Bill
                      subTotal={subTotal}
                      couponValue={couponValue}
                      selectedCoupon={selectedCoupon}
                      btnRef={btnRef}
                      handleRemoveCoupon={handleRemoveCoupon}
                      onOpen={onOpen}
                    />
                  </div>
                </>
              ))}
          </div>
          <Slider
            onClose={onClose}
            isOpen={isOpen}
            btnRef={btnRef}
            header={"Apply Coupon"}
            drawerBody={
              <CouponDrawer
                selectedCoupon={selectedCoupon}
                setSelectedCoupon={setSelectedCoupon}
                onClose={onClose}
              />
            }
          />
        </div>
        {error && <img className="vector-image" src={Error} alt="Error" />}
      </section>
    </MainLayout>
  );
};
export default Cart;
