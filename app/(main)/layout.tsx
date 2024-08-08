"use client";

import useStateStore from "@/lib/state-store";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import MainLoader from "@/components/loaders/main-loader";
import MainFooter from "@/components/main-footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading } = useStateStore();

  return isLoading ? (
    <MainLoader />
  ) : (
    <>
      <Navbar />
      {children}
      <footer className="bg-primary-2 relative text-white">
        <MainFooter />
      </footer>
    </>
  );
}
