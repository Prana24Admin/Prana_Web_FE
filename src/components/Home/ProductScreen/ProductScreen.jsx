import React, { useState } from "react";
import { ChevronDown, ShoppingBag, Truck } from "lucide-react";
import "./ProductScreen.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axios";
import toast from "react-hot-toast";
import { handleRefetchCartItems } from "../../../libs/queryFunctions";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import image from "../../../assets/images/health/Safety.jpg";

const ProductScreen = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const { id } = useParams();

  const fetchProduct = async () => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  };

  const {
    data: productData,
    isLoading,
    error,
  } = useQuery(["Product"], fetchProduct);

  const handleQuantity = async (product) => {
    const response = await axiosInstance.post("/cart", {
      quantity: product.quantity ?? 1,
      product_id: product.productId,
    });
    if (response.status === 400) toast.error("Try again");

    if (response.status === 201 || response.status === 200)
      toast.success("Added to cart");
    return response.data;
  };
  const { mutate, isLoading: quantityLoading } = useMutation(
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
      {productData && (
        <>
          <div className="product-leftContainer">
            <div className="product-leftImage">
              <img
                className="product-img"
                // src={productData.image}
                // alt={productData.name}
                src={image}
                alt="Sanju"
              />
            </div>
          </div>
          <div className="product-rightContainer">
            <div className="product-detailsContainer">
              <p className="product-productTitle">{productData.name}</p>
              <p className="product-productDescription">
                {productData.description}
              </p>
            </div>
            <div className="product-flexContainer">
              <div>
                <div className="product-priceContainer">
                  <p className="product-amountText">₹{productData.discount}</p>
                  <p className="product-mrpDescriptionText">
                    MRP :
                    <span className="product-mrpDescription">
                      ₹{productData.price}
                    </span>
                  </p>
                </div>
                <p className="product-mrpDescriptionText">
                  Inclusive of all Taxes
                </p>
              </div>
              <div
                className="product-quantityContainer"
                onClick={() => setToggleDropDown(!toggleDropDown)}
              >
                <p className="product-quantity">
                  Qty:
                  <span style={{ fontWeight: "bold" }}>
                    {localStorage.getItem(productData.uuid) ?? 1}
                  </span>
                </p>
                <div className="product-chevronIcon">
                  <ChevronDown size={18} strokeWidth={2.5} color="#0e382c" />
                </div>

                {toggleDropDown && (
                  <div className="product-dropdown">
                    {Array.from({ length: 20 }, (_, index) => index + 1).map(
                      (number) => (
                        <div
                          onClick={() =>
                            localStorage.setItem(productData.uuid, number)
                          }
                          key={number}
                          className="product-dropDownQuantity"
                        >
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
                Only <span style={{ color: "#e50f0f" }}>1 items </span> left!
                Don't miss it
              </p>
            </div>
            <div className="product-buttonsContainer">
              <button className="product-buyButton">
                <p>Buy Now</p>
              </button>
              <button
                className="product-cartButton"
                onClick={() => {
                  mutate({
                    quantity: localStorage.getItem(productData.uuid),
                    productId: productData.uuid,
                  });
                }}
              >
                {quantityLoading ? (
                  <Spinner animation="border" size="sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
            <div className="product-deliveryContainer">
              <div className="product-deliveryBody">
                <div className="product-footerContainer">
                  <Truck size={20} />
                  <p className="product-footerText">Fast Delivery</p>
                </div>
                <p className="product-footerDescriptionText">
                  Delivery in 3days.
                </p>
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
        </>
      )}
    </div>
  );
};

export default ProductScreen;
