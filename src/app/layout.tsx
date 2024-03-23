import { AppProvider } from "@/components/providers";
import { Metadata } from "next";

import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body className="font-inter antialiased bg-slate-50 text-slate-900 tracking-tight">
          {children}
        </body>
      </html>
    </AppProvider>
  );
}
