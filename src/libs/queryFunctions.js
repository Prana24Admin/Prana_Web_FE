import { queryClient } from "../App";

export const handleRefetchCartItems = () =>
  queryClient.refetchQueries(["cart"]);
