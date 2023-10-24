import React from "react";

import "../../Cart/cart.css";
import "./labCart.css";
import EmptyCart from "../../../../assets/images/VectorImages/cart empty.png";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { BadgePercent, IndianRupee } from "lucide-react";

import { useNavigate } from "react-router-dom";

import CartCard from "../../../../components/CartCard";
import MainLayout from "../../../../components/MainLayout";
import { Button, useDisclosure } from "@chakra-ui/react";
import Slider from "../../../../components/Slider";

import { CouponDrawer } from "../../../../components/Slider/CouponDrawer";

const LabCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigate = useNavigate();

  const fetchLabCart = async () => {
    const response = await axiosInstance.get("/cart/labcart");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["LabCart"], fetchLabCart);

  const subTotal = data?.data.reduce((sum, test) => {
    return sum + parseFloat(test.lab_test.price);
  }, 0);
  const sampleCollectionCharges = data?.data.reduce((sum, test) => {
    return sum + parseFloat(test.lab_test.home_sample_charge);
  }, 0);
  const totalDiscount = data?.data.reduce((sum, test) => {
    return (
      sum + parseFloat(test.lab_test.price * (test.lab_test.discount / 100))
    );
  }, 0);

  return (
    <MainLayout>
      <section>
        {isLoading && <p>Loading..</p>}
        <div className="cart-mainContainer">
          <div className="cart-marginContainer">
            {data &&
              (data.data.length < 1 ? (
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
                    {data.data.map((test) => (
                      <CartCard key={test.uuid} labItem={test} />
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
                        <p className="cart-descriptionText">Sub Total</p>
                        <p className="cart-descriptionText">
                          ₹{subTotal.toFixed(2)}
                        </p>
                      </div>
                      <div className="cart-flex">
                        <p className="cart-descriptionText">
                          Sample collection charges
                        </p>
                        <p className="cart-descriptionText">
                          ₹{sampleCollectionCharges.toFixed(2)}
                        </p>
                      </div>
                      <div className="cart-flex">
                        <p className="cart-descriptionText">Discount</p>
                        <p className="cart-descriptionText">
                          ₹{totalDiscount.toFixed(2)}
                        </p>
                      </div>
                      <div className="checkout-line" />
                      <div className="cart-flex">
                        <p className="cart-descriptionTextDark">Cart value</p>
                        <p className="cart-descriptionTextDark">
                          ₹
                          {(
                            subTotal +
                            sampleCollectionCharges -
                            totalDiscount
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
                        <span style={{ fontWeight: "bold" }}>
                          ₹{totalDiscount}
                        </span>{" "}
                        on this order
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
        {error && <img className="vector-image" src={Error} alt="Error" />}
      </section>
    </MainLayout>
  );
};
export default LabCart;
