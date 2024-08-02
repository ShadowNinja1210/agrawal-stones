import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Home | Agrawal Stones",
  description: "Bringing the beauty of nature to your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
