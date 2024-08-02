import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { questrial } from "@/lib/direct-font";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agrawal Stones",
  description: "Bringing the beauty of nature to your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={questrial.className}>{children}</body>
    </html>
  );
}
