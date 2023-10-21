import React from "react";

import Navigation from "./Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProfileProvider from "./context/ProfileProvider";
import { ChakraProvider } from "@chakra-ui/react";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <ProfileProvider>
            <Navigation />
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster
              containerStyle={{
                zIndex: 1000000000,
              }}
            />
          </ProfileProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
