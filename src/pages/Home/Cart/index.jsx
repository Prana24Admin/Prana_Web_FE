import React, { useEffect } from "react";

import "./cart.css";

import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { IndianRupee } from "lucide-react";

import { useNavigate } from "react-router-dom";

import CartCard from "../../../components/CartCard";
import MainLayout from "../../../components/MainLayout";
import { Button, useDisclosure } from "@chakra-ui/react";
import Slider from "../../../components/Slider";

import Coupon from "../../../components/Coupon";

const DrawerBody = () => {
  const fetchCoupons = async () => {
    const response = await axiosInstance.get("/coupons");
    console.log(response.data);
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["Coupons"], fetchCoupons);

  return (
    // <div className="d-flex flex-row justify-content-center mt-5 mb-5">
    <div className="coupon-container">
      {data &&
        data.data.map((item) => {
          return <Coupon key={item.uuid} item={item} />;
        })}
    </div>
    // </div>
  );
};

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
                    <div className="cart-savingsContainer">
                      <IndianRupee size={15} className="cart-ruppeIcon" />
                      <p className="cart-savingsText">
                        Total savings of{" "}
                        <span style={{ fontWeight: "bold" }}>₹324</span> on this
                        order
                      </p>
                    </div>
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
                      <p
                        className="cart-button"
                        onClick={() => navigate("/checkout")}
                      >
                        Proceed To Checkout
                      </p>
                      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                        Open
                      </Button>
                    </div>
                    <Slider
                      onClose={onClose}
                      isOpen={isOpen}
                      btnRef={btnRef}
                      header={"Apply Coupon"}
                      drawerBody={<DrawerBody />}
                    />
                  </div>
                </>
              ))}
          </div>
        </div>
        {error && <p>Error fetching! Try again</p>}
      </section>
    </MainLayout>
  );
};
export default Cart;
