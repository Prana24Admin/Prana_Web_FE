import toast from "react-hot-toast";
import axiosInstance from "../libs/axios";
import { handleRefetchCartItems } from "../libs/queryFunctions";

// Function to fetch cart items using async function
export const fetchCartData = async () => {
  const response = await axiosInstance.get("cart");
  return response.data;
};

// Function to handle quantity updates and add to cart
export const handleCartQuantity = async (product) => {
  try {
    const cartData = await axiosInstance.get(
      "cart"
    );
    const existingCartItem = cartData.data.find(
      (item) => item.product.uuid === product.productId
    );
    if (existingCartItem) {
      if (existingCartItem.quantity === parseInt(product.quantity)) {
        toast.error("Product is already present in the cart.");
        return;
      } else {
        const response = await axiosInstance.post(
          `cart`,
          {
            quantity: product.quantity,
            product_id: product.productId,
          }
        );
        if (response.status === 200) {
          toast.success("Product quantity updated in the cart.");
        }
      }
    } else {
      const response = await axiosInstance.post(
        "cart",
        {
          quantity: product.quantity ?? 1,
          product_id: product.productId,
        }
      );
      if (response.status === 201 || response.status === 200) {
        toast.success("Added to cart");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

//Function to add item to cart
export const addToCart = async (productId) => {
  const response = await axiosInstance.post(
    "cart",
    {
      quantity: 1,
      product_id: productId,
    }
  );

  return response.data;
};

//Function to remove items from cart
export const removeCartItem = async (productId, onClose) => {
  const response = await axiosInstance.delete(
    `cart/${productId}`
  );
  if (response.status === 200) {
    toast.success("Product removed");
    localStorage.removeItem(productId);
    handleRefetchCartItems();
    onClose();
  }
  return response.data;
};
