"use client";

// Global CSS
import "../globals.css";

// Components
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Navbar } from "@/components/navbar";
import MainFooter from "@/components/main-footer";
import ModalProvider from "@/components/modal-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <ModalProvider />
      {children}
      <ProgressBar height="4px" color="hsl(0 99% 39%)" options={{ showSpinner: false }} shallowRouting />
      <footer className="bg-primary-2 relative text-white">
        <MainFooter />
      </footer>
    </>
  );
}
