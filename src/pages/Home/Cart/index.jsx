import React, { useEffect, useState } from "react";

import EmptyCart from "../../../assets/images/VectorImages/cart empty.png";

import "./cart.css";
import Error from "../../../assets/images/ErrorPages/404 Error.png";

import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { BadgePercent, IndianRupee } from "lucide-react";

import { useNavigate } from "react-router-dom";

import CartCard from "../../../components/CartCard";
import MainLayout from "../../../components/MainLayout";
import { Button, useDisclosure } from "@chakra-ui/react";
import Slider from "../../../components/Slider";

import { CouponDrawer } from "../../../components/Slider/CouponDrawer";

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
        if (couponPrice > selectedCoupon.max_amount) {
          setCouponValue(selectedCoupon.max_amount);
        } else {
          setCouponValue(couponPrice);
        }
      }
      return;
    };
    if (selectedCoupon) {
      couponDiscount();
    }
  });

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
                    <Button
                      ref={btnRef}
                      borderColor={"var(--cloudGray)"}
                      borderWidth={"1px"}
                      colorScheme="teal"
                      gap={"5px"}
                      onClick={onOpen}
                    >
                      <BadgePercent size={18} />
                      {selectedCoupon
                        ? selectedCoupon.code + " Applied"
                        : "Apply Coupon"}
                    </Button>
                    <div className="cart-billContainer">
                      <p className="cart-titleText">Bill Summary</p>
                      <div className="cart-flex">
                        <p className="cart-descriptionText">Total Mrp</p>
                        <p className="cart-descriptionText">
                          ₹{subTotal.toFixed(2)}
                        </p>
                      </div>
                      <div className="cart-flex">
                        <p className="cart-descriptionText">Delivery charges</p>
                        <p className="cart-descriptionText">
                          ₹{Math.ceil(subTotal * 0.1).toFixed(2)}
                        </p>
                      </div>
                      <div className="cart-flex">
                        <p className="cart-descriptionText">Discount</p>
                        <p className="cart-descriptionText">
                          ₹{subTotal.toFixed(2)}
                        </p>
                      </div>
                      {selectedCoupon && (
                        <div className="cart-flex">
                          <p className="cart-descriptionText">Coupon</p>
                          <p className="cart-selectedCouponText">
                            ₹{couponValue?.toFixed(2)}
                          </p>
                        </div>
                      )}
                      <div className="checkout-line" />
                      <div className="cart-flex">
                        <p className="cart-descriptionTextDark">Cart value</p>
                        <p className="cart-descriptionTextDark">
                          ₹
                          {(
                            subTotal -
                            couponValue +
                            Math.ceil(subTotal * 0.1)
                          ).toFixed(2)}
                        </p>
                      </div>
                      <button
                        className="cart-button"
                        onClick={() => navigate("/checkout")}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                    <div className="cart-savingsContainer">
                      <IndianRupee size={15} className="cart-ruppeIcon" />
                      <p className="cart-savingsText">
                        Total savings of{" "}
                        <span style={{ fontWeight: "bold" }}>₹324</span> on this
                        order
                      </p>
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
                </>
              ))}
          </div>
        </div>
        {error && <img className="vector-image" src={Error} alt="Error" />}
      </section>
    </MainLayout>
  );
};
export default Cart;
