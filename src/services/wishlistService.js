import toast from "react-hot-toast";
import axiosInstance from "../libs/axios";
import { handleRefetchWishlistData } from "../libs/queryFunctions";

export const addToWishlist = async (productId) => {
  const response = await axiosInstance.post("/wishlist", {
    product_id: productId,
    quantity: 1,
  });

  return response.data;
};

export const removeFromWishlist = async (id) => {
  try {
    const response = await axiosInstance.delete(`/wishlist/${id}`);
    if (response.status === 200) {
      // Display a success notification using toast.
      toast.success("Removed");

      // After successfully removing from the wishlist, refetch the wishlist data.
      handleRefetchWishlistData();
    }
    return response.data;
  } catch (error) {
    // Handle and display any errors that may occur during removal.
    console.error("Error removing item from the wishlist:", error);
  }
};
