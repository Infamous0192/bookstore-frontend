"use client";

import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./AuthProvider";
import { ToastContainer } from "react-toastify";

import { ModalProvider } from "@/modules/modal";
import { DialogProvider } from "@/modules/dialog";

import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <DialogProvider>
          <AuthProvider>{children}</AuthProvider>
        </DialogProvider>
      </ModalProvider>

      <ToastContainer autoClose={1000} position="bottom-right" />
    </QueryClientProvider>
  );
};
