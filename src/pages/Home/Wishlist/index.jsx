import React from "react";
import "./wishlist.css";
import image from "../../../assets/images/home/Beautynew.jpg";
import { Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import axiosInstance from "../../../libs/axios";
import { handleRefetchWishlistData } from "../../../libs/queryFunctions";
import MainLayout from "../../../components/MainLayout";
import ProductItem from "../../../components/ProductItem";
import wishlist from "../../../assets/images/VectorImages/WHISHLIST.png";
import Loader from "../../../components/Loader";

const Wishlist = () => {
  const fetchWishlist = async () => {
    const response = await axiosInstance.get("/wishlist");
    return response.data;
  };
  const { data, isLoading, error } = useQuery(["Wishlist"], fetchWishlist);

  const removeFromWishlist = async (id) => {
    const response = await axiosInstance.delete(`/wishlist/${id}`);
    if (response.status === 200) {
      toast.success("Removed");
      handleRefetchWishlistData();
    }
    return response.data;
  };

  return (
    <MainLayout>
      <div className="favorites-mainContainer">
        <p className="wishlist-title">
          Favorites<span style={{ color: "var(--crimsonPink)" }}>.</span>
        </p>
        {isLoading && (
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          <div>
            <p>Error fetching. Try again</p>
          </div>
        )}
        {data && data.length > 0 ? (
          <div className="favorites-gridContainer">
            {data.map((item) => (
              <ProductItem
                wishlistItem={item}
                key={item.uuid}
                removeFromWishlist={removeFromWishlist}
                product={""}
              />
            ))}
          </div>
        ) : (
          <div className="wishlist-imageContainer">
            <img className="wishlist-image" src={wishlist} alt="no items" />

            <p className="wishlist-text">You haven't saved any items yet</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Wishlist;
