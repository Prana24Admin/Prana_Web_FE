import React, { useState } from "react";
import Image from "../../../assets/images/profile/avatar.jpg";
import {
  ChevronDown,
  IndianRupee,
  Loader,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";
import "./ProductScreen.css";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axios";
import toast from "react-hot-toast";
import { handleRefetchCartItems } from "../../../libs/queryFunctions";

const ProductScreen = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const handleQuantity = async (product) => {
    const response = await axiosInstance.post("/cart", {
      quantity: product.quantity,
      product_id: product.productId,
    });
    if (response.status === 400) {
      toast.error("Try again");
    }
    return response.data;
  };
  const { mutate, isLoading } = useMutation(
    (product) => {
      return handleQuantity(product);
    },
    {
      onSuccess: () => {
        return handleRefetchCartItems();
      },
    }
  );

  return (
    <div className="product-mainContainer">
      <div className="product-leftContainer">
        <div className="product-leftImage">
          <img className="product-img" src={Image} alt={"sa"} />
        </div>
      </div>
      <div className="product-rightContainer">
        <div className="product-detailsContainer">
          <p className="product-productTitle">Sanju</p>
          <p className="product-productDescription">
            Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels
            -Helps In Weight Management - 1ly
          </p>
        </div>
        <div className="product-flexContainer">
          <div>
            <div className="product-priceContainer">
              <IndianRupee size={15} strokeWidth={2.5} />
              <p className="product-amountText">900</p>
              <p className="product-mrpDescriptionText">
                MRP:<span className="product-mrpDescription">₹222</span>
              </p>
            </div>
            <p className="product-mrpDescriptionText">Inclusive of all Taxes</p>
          </div>
          <div
            className="cart-quantityContainer"
            onClick={() => setToggleDropDown(!toggleDropDown)}
          >
            {isLoading ? (
              <div className="cart-loaderContainer">
                <Loader />
              </div>
            ) : (
              <>
                <p className="cart-quantity">
                  Qty:
                  <span style={{ fontWeight: "bold" }}>1</span>
                </p>
                <div className="cart-chevronIcon">
                  <ChevronDown size={18} strokeWidth={2.5} color="#0e382c" />
                </div>
              </>
            )}
            {toggleDropDown && (
              <div className="cart-dropdown">
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                  (number) => (
                    <div key={number} className="cart-dropDownQuantity">
                      <p>{number}</p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
        <div className="">
          <p>
            Only <span style={{ color: "#e50f0f" }}>1 items </span> left! Don't
            miss it
          </p>
        </div>
        <div className="product-buttonsContainer">
          <button className="product-buyButton">
            <p>Buy Now</p>
          </button>
          <button className="product-cartButton">Add to Cart</button>
        </div>
        <div className="product-deliveryContainer">
          <div className="product-deliveryBody">
            <div className="product-footerContainer">
              <Truck size={20} />
              <p className="product-footerText">Fast Delivery</p>
            </div>
            <p className="product-footerDescriptionText">Delivery in 3days.</p>
          </div>
          <div className="product-deliveryBody">
            <div className="product-footerContainer">
              <ShoppingBag size={20} />
              <p className="product-footerText">Return Delivery</p>
            </div>
            <p className="product-footerDescriptionText">
              Free 10days Delivery Returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
