"use client";

import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { creds } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!creds) return;

    router.replace("/");
  }, [router, creds]);

  if (creds) return null;

  return (
    <div className="w-full h-screen lg:grid grid-cols-2">
      <div className="bg-white h-screen w-full flex items-center justify-center">
        {children}
      </div>
      <div className="bg-slate-200 h-screen w-full hidden lg:block relative">
        <img
          src="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
