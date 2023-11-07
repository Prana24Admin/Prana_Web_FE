import React from "react";

import Navigation from "./Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProfileProvider from "./context/ProfileProvider";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./context/AuthProvider";
import DoctorBookingProvider from "./context/DoctorBookingProvider";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AuthProvider>
            <ProfileProvider>
              <DoctorBookingProvider>
                <Navigation />
                <ReactQueryDevtools initialIsOpen={false} />
                <Toaster
                  containerStyle={{
                    zIndex: 1000000000,
                  }}
                />
              </DoctorBookingProvider>
            </ProfileProvider>
          </AuthProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
