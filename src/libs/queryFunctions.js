import { queryClient } from "../App";

export const handleRefetchCartItems = () =>
  queryClient.refetchQueries(["cart"]);

export const handleRefetchProfileData = () =>
  queryClient.refetchQueries(["Profile"]);
