import toast from "react-hot-toast";
import axiosInstance from "../libs/axios";
import { handleRefetchLabCartData } from "../libs/queryFunctions";

// Function to fetch lab cart data
export const fetchLabCartData = async () => {
  const response = await axiosInstance.get(
    "cart/labcart"
  );
  return response.data;
};

//Adding lab test to cart
export const handleAddToLabCart = async (testId, navigate, data) => {
  if (!JSON.parse(localStorage.getItem("isAuthenticated"))) {
    return toast.error("Login");
  }
  const response = await axiosInstance.post(
    "cart/labcart",
    {
      lab_test_id: testId,
    }
  );

  if (response.status === 200) {
    navigate("/lab/cart");
  }

  return response.data;
};

//Function to remove lab test from cart
export const removeLabCartItem = async (testId) => {
  const response = await axiosInstance.delete(
    `cart/labcart/${testId}`
  );
  if (response.status === 200) {
    toast.success("Test removed");
    handleRefetchLabCartData();
  }
  return response.data;
};
