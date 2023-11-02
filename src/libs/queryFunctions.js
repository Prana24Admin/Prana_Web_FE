import { queryClient } from "../App";

export const handleRefetchCartItems = () =>
  queryClient.refetchQueries(["cart"]);

export const handleRefetchProfileData = () =>
  queryClient.refetchQueries(["Profile"]);

export const handleRefetchWishlistData = () =>
  queryClient.refetchQueries(["Wishlist"]);

export const handleRefetchCouponsData = () =>
  queryClient.refetchQueries(["Coupons"]);

export const handleRefetchLabCartData = () =>
  queryClient.refetchQueries(["LabCart"]);

export const handleRefetchAllCategories = () =>
  queryClient.refetchQueries(["AllCategories"]);
