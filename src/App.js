import React from "react";

import Navigation from "./Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProfileProvider from "./context/ProfileProvider";
import CartProvider from "./context/CartProvider";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <CartProvider>
            <Navigation />
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster
              containerStyle={{
                zIndex: 1000000000,
              }}
            />
          </CartProvider>
        </ProfileProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
