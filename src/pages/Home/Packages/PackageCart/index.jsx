import React, { useEffect } from "react";

import "../../Cart/cart.css";
import "./packageCart.css";

import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { BadgePercent, Delete, IndianRupee, Trash2 } from "lucide-react";

import { useNavigate } from "react-router-dom";

import CartCard from "../../../../components/CartCard";
import MainLayout from "../../../../components/MainLayout";
import { Button, useDisclosure } from "@chakra-ui/react";
import Slider from "../../../../components/Slider";

import Coupon from "../../../../components/Coupon";

const DrawerBody = () => {
  const fetchCoupons = async () => {
    const response = await axiosInstance.get("/coupons");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["Coupons"], fetchCoupons);

  return (
    <div className="small-coupon-container">
      {data &&
        data.data.map((item) => {
          return <Coupon key={item.uuid} item={item} smallCoupon={true} />;
        })}
    </div>
  );
};

const PackageCart = () => {
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
      <section className="packageCart-mainContainer">
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
                    <p className="main-head-title">Lab Tests cart</p>
                    <div className="packageCart-borderContainer">
                      <div className="packageCart-justifyContainer">
                        <p className="packageCart-Title">
                          Vitamin D & B12 Combo
                        </p>
                        <p className="packageCart-flexContainer">
                          <Trash2 size={15} />
                          <span className="packageCart-removeButton">
                            Remove
                          </span>
                        </p>
                      </div>
                      <div className="packageCart-justifyContainer">
                        <div>
                          <p className="packageCart-mrp">
                            MRP:
                            <span className="packageCart-lineThrough">
                              ₹123
                            </span>
                          </p>
                          <p className="packageCart-discount">₹123</p>
                        </div>
                      </div>
                    </div>
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
                        onClick={() => navigate("/labtestcheckout")}
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
export default PackageCart;
