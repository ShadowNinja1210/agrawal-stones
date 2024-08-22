"use client";

import "../../../globals.css";
import { cn } from "@/lib/utils";
import { cormorantGaramond } from "@/lib/direct-font";
import useStateStore from "@/lib/state-store";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { servicesTitle } = useStateStore();
  return (
    <>
      <header className="bg-primary-2 p-4">
        <h1 className={cn("text-5xl font-bold text-neutral-100 text-center", cormorantGaramond.className)}>
          {servicesTitle}
        </h1>
      </header>
      <main className="md:px-24 px-10 md:py-6 py-2">{children}</main>
      <Image
        src="/assets/sub_categories-design.svg"
        alt="ads"
        width={2000}
        height={2000}
        className="object-cover w-full"
      />
    </>
  );
}
