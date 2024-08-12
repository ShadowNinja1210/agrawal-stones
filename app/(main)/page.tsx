"use client";
import { useEffect, useState } from "react";

import Commitment from "@/components/commitment";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero-2";
import Hero3 from "@/components/hero-3";
import Stones from "@/components/stones";
import Testimonials from "@/components/testimonials";
import MainLoader from "@/components/loaders/main-loader";
import useStateStore from "@/lib/state-store";
import CustomPage from "@/components/custom";

export default function Home() {
  const { isLoading, setIsLoading } = useStateStore();
  const loaderTimeout = () => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  useEffect(loaderTimeout, [setIsLoading]);

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
      {isLoading && <MainLoader />}
      <main>
        <Hero />
        <Hero2 />
        <Hero3 />
        <Commitment />
        <CustomPage />
        <Stones />
        <Testimonials />
      </main>
    </>
  );
}
