import React from "react";

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

  const subTotal = data?.reduce((sum, product) => {
    return sum + product.product.price * product.quantity;
  }, 0);

  return (
    <MainLayout>
      <section>
        {isLoading && <p>Loading..</p>}
        <div className="cart-mainContainer">
          <div className="cart-marginContainer">
            {data &&
              (data.length < 1 ? (
                <div>
                  <p>No products in cart</p>
                </div>
              ) : (
                <>
                  <div className="cart-cardContainer">
                    <p className="main-head-title">Items in Your cart</p>
                    {data.map((item) => (
                      <CartCard key={item.product.uuid} cartItem={item} />
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
                      Apply Coupon
                    </Button>
                    <div className="cart-billContainer">
                      <p className="cart-titleText">Bill Summary</p>
                      <div className="cart-flex">
                        <p className="cart-descriptionText">Total Mrp</p>
                        <p className="cart-descriptionText">₹{subTotal}</p>
                      </div>
                      <div className="cart-flex">
                        <p className="cart-descriptionText">Delivery charges</p>
                        <p className="cart-descriptionText">₹324</p>
                      </div>
                      <div className="cart-flex">
                        <p className="cart-descriptionText">Discount</p>
                        <p className="cart-descriptionText">₹324</p>
                      </div>
                      <div className="checkout-line" />
                      <div className="cart-flex">
                        <p className="cart-descriptionTextDark">Cart value</p>
                        <p className="cart-descriptionTextDark">₹324</p>
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
                      drawerBody={<CouponDrawer />}
                    />
                  </div>
                </>
              ))}
          </div>
        </div>
        {error && <img className="error-image" src={Error} alt="Error" />}
      </section>
    </MainLayout>
  );
};
export default Cart;
