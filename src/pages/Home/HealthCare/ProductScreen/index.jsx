import React, { useState } from "react";
import "./ProductScreen.css";

import MainLayout from "../../../../components/MainLayout";
import { ChevronDown, ShoppingBag, Truck } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../../libs/axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import image from "../../../../assets/images/home/covid.jpg";
import Loader from "../../../../components/Loader";
import { Spinner } from "@chakra-ui/react";

const Product = () => {
  // State for toggling quantity dropdown
  const [toggleDropDown, setToggleDropDown] = useState(false);
  // Get the "id" parameter from the URL
  const { id } = useParams();

  // Define an asynchronous function to fetch product data by ID
  const fetchProduct = async () => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching product data");
    }
  };

  const {
    data: productData,
    isLoading,
    error,
  } = useQuery(["Product"], fetchProduct);

  // Function to handle quantity updates and add to cart
  const handleQuantity = async (product) => {
    const cartData = await axiosInstance.get("/cart");
    const existingCartItem = cartData.data.find(
      (item) => item.product.uuid === product.productId
    );
    if (existingCartItem) {
      if (existingCartItem.quantity === parseInt(product.quantity)) {
        toast.error("Product is already present in the cart.");
        return;
      } else {
        const response = await axiosInstance.post(`/cart`, {
          quantity: product.quantity,
          product_id: product.productId,
        });
        if (response.status === 200) {
          toast.success("Product quantity updated in the cart.");
        }
      }
    } else {
      const response = await axiosInstance.post("/cart", {
        quantity: product.quantity ?? 1,
        product_id: product.productId,
      });
      if (response.status === 201 || response.status === 200) {
        toast.success("Added to cart");
      }
    }
  };

  // Use the useMutation hook to handle quantity updates and cart addition
  const { mutate, isLoading: quantityLoading } = useMutation((product) => {
    return handleQuantity(product);
  });

  return (
    // Render the Product component within the MainLayout
    <MainLayout>
      <div className="product-mainContainer">
        {isLoading && (
          // Show a loader while data is loading
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          // Display an error message if there's an error
          <div>
            <p>Error fetching. Try again</p>
          </div>
        )}
        {productData && (
          <>
            <div className="product-leftContainer">
              <div className="product-leftImage">
                <img
                  className="product-img"
                  loading="lazy"
                  src={productData.image}
                  alt="Product"
                />
              </div>
            </div>
            <div className="product-rightContainer">
              {/* Display product information */}
              <p className="product-productTitle">{productData.name}</p>
              <p className="product-brandName">{productData.brand.name}</p>
              <p className="product-productDescription">
                {productData.description}
              </p>

              <div className="product-flexContainer">
                <div>
                  <div className="product-priceContainer">
                    <p className="product-amountText">
                      ₹{productData.discount}
                    </p>
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
                    <ChevronDown size={18} strokeWidth={2.5} />
                  </div>

                  {toggleDropDown && (
                    <div className="product-dropdown">
                      {/* Display quantity options */}
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
                  Only{" "}
                  <span style={{ color: "#e50f0f" }}>
                    {productData.quantity} items{" "}
                  </span>{" "}
                  left! Don't miss it
                </p>
              </div>
              <div className="product-buttonsContainer">
                {/* <button className="product-buyButton">
                  <p>Buy Now</p>
                </button> */}
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
                    // Show a loading spinner while adding to cart
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
                    Delivery in 3 days.
                  </p>
                </div>
                <div className="product-deliveryBody">
                  <div className="product-footerContainer">
                    <ShoppingBag size={20} />
                    <p className="product-footerText">Return Delivery</p>
                  </div>
                  <p className="product-footerDescriptionText">
                    Free 10 days Delivery Returns.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

// Export the Product component
export default Product;
