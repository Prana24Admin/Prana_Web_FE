import { ChevronDown, ChevronUp, Loader, Trash2 } from "lucide-react";
import React, { useState } from "react";
import axiosInstance from "../../libs/axios";
import { handleRefetchCartItems } from "../../libs/queryFunctions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CartCard = ({ cartItem }) => {
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

  const removeItem = async (productId) => {
    const response = await axiosInstance.delete(`/cart/${productId}`);
    if (response.status === 200) {
      toast.success("Product removed");
      localStorage.removeItem(productId);
      handleRefetchCartItems();
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
    <div key={cartItem.uuid} className="cart-Container">
      <div className="cart-card">
        <div className="cart-flexContainer">
          <img
            className="cart-Image"
            src={cartItem.product.image}
            alt={cartItem.product.name}
          />
          <div className="cart-productDescription">
            <p className="cart-titleText">{cartItem.product.name}</p>
            <p className="cart-priceText">
              Mrp:
              <span className="cart-linethrough">
                {"₹" + cartItem.product.price}
              </span>
              <p className="cart-discountText">
                {"₹" + cartItem.product.price}
              </p>
            </p>
          </div>
          <div className="cart-quantityContainerFlex">
            <div
              className="cart-removeButtonContainer"
              onClick={() => removeItem(cartItem.uuid)}
            >
              <Trash2 size={15} color="red" />
              <p className="cart-removeText">REMOVE</p>
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
                    <span style={{ fontWeight: "bold" }}>
                      {" " + cartItem.quantity}
                    </span>
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
                      <div
                        key={number}
                        onClick={() =>
                          mutate({
                            quantity: number,
                            productId: cartItem.product.uuid,
                          })
                        }
                        className="cart-dropDownQuantity"
                      >
                        <p>{number}</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
