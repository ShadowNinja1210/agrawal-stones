import type { Metadata } from "next";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

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
      <HydrationOverlay>
        <body className={questrial.className}>{children}</body>
      </HydrationOverlay>
    </html>
  );
}
