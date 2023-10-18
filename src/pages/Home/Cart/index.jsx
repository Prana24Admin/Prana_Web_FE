import React from "react";

import "./cart.css";

import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { IndianRupee } from "lucide-react";

import { useNavigate } from "react-router-dom";

import CartCard from "../../../components/CartCard";
import MainLayout from "../../../components/MainLayout";

const Cart = () => {
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
                    <h3>Items in Your cart</h3>
                    {data.map((item) => (
                      <CartCard key={item.product.uuid} cartItem={item} />
                    ))}
                  </div>
                  <div className="cart-rightContainer">
                    <div className="cart-savingsContainer">
                      <IndianRupee size={15} className="cart-ruppeIcon" />
                      <p className="savingsText">
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
                    </div>
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
