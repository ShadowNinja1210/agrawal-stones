"use client";
import { useEffect } from "react";

import Commitment from "@/components/commitment";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero-2";
import Hero3 from "@/components/hero-3";
import Stones from "@/components/stones";
import Testimonials from "@/components/testimonials";
import MainFooter from "@/components/main-footer";

export default function Home() {
  useEffect(() => {
    const element = document.querySelector(".scrollable-element") as HTMLElement;

    if (element) {
      const handleScroll = () => {
        element.classList.add("scrolling");
        clearTimeout((element as any).scrollTimeout);

        (element as any).scrollTimeout = setTimeout(() => {
          element.classList.remove("scrolling");
        }, 1000); // Hide scrollbar 1 second after scrolling stops
      };

      element.addEventListener("scroll", handleScroll);

      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <main>
        <Hero />
        <Hero2 />
        <Hero3 />
        <Commitment />
        <Stones />
        <Testimonials />
      </main>
      <footer className="lg:sticky lg:bottom-0 bg-primary-2 lg:-z-40 z-0 static text-white">
        <MainFooter />
      </footer>
    </>
  );
}
