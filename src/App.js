import React from "react";

import Navigation from "./Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProfileProvider from "./context/ProfileProvider";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <Navigation />
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
        </ProfileProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
