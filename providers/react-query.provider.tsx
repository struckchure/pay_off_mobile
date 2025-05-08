import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { ReactNode } from "react";
import Toast from "react-native-toast-message";

interface ReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: any) => {
        if (error instanceof AxiosError) {
          Toast.show({
            type: "error",
            text1: error?.response?.data?.message || error.message,
          });
        } else {
          Toast.show({
            type: "error",
            text1: error?.message || "An error occurred",
          });
        }
      },
    },
  },
});

export default function ReactQueryProvider(props: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
