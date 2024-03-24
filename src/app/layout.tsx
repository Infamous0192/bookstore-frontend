import { AppProvider } from "@/components/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Store App",
  description: "Book Store App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter antialiased bg-slate-50 text-slate-900 tracking-tight">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
