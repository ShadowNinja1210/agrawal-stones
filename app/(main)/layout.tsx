"use client";

import useStateStore from "@/lib/state-store";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import MainLoader from "@/components/loaders/main-loader";
import MainFooter from "@/components/main-footer";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <footer className="bg-primary-2 relative text-white">
        <MainFooter />
      </footer>
    </>
  );
}
