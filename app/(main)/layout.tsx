"use client";

import "../globals.css";
import { Navbar } from "@/components/navbar";
import MainFooter from "@/components/main-footer";

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
