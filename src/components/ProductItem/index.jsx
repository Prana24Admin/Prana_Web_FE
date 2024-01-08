import React from "react";
import "../../pages/Home/Wishlist/wishlist.css";

import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../../services/cartService";
import { removeFromWishlist } from "../../services/wishlistService";

// ProductItem component represents an item in the wishlist or product list
const ProductItem = ({ product, wishlistItem = null }) => {
  // React Router hook for navigation
  const navigate = useNavigate();

  // UseMutation hook for adding a product to the cart
  const { mutate } = useMutation(
    (productId) => {
      return addToCart(productId);
    },
    {
      // On successful addition to cart
      onSuccess: () => {
        // Remove the product from the wishlist
        removeFromWishlist(wishlistItem.uuid);
        // Display a success toast message
        toast.success("Added to cart");
      },
    },
    {
      // On error during cart addition
      onError: () => {
        // Display an error toast message
        toast.error("Try again");
      },
    }
  );

  // JSX structure for rendering the ProductItem component
  return (
    <div
      className="favorites-cardWrapper"
      style={wishlistItem ? { height: "360px" } : { height: "auto" }}
    >
      {/* Product card container */}
      <div
        className="favorites-cardContainer"
        onClick={() =>
          wishlistItem
            ? navigate(`/product/${wishlistItem?.product?.uuid}`)
            : navigate(`/product/${product?.uuid}`)
        }
      >
        {/* ... (rest of the component) ... */}
      </div>
      {/* Trash icon for removing from wishlist */}
      {wishlistItem && (
        <div onClick={() => removeFromWishlist(wishlistItem?.uuid)}>
          <Trash2 className="favorites-trashIcon" size={32} />
        </div>
      )}
      {/* Add to cart button for wishlist items */}
      {wishlistItem && (
        <button
          onClick={() => mutate(wishlistItem?.product?.uuid)}
          className="wishlist-addToCartButton"
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
