import type { Metadata } from "next";
import { questrial } from "@/lib/direct-font";
import "./globals.css";

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
