"use client";

import { HandHelping, Home, PanelRight, Phone, Search, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const url = usePathname();
  const pathPart = url?.split("/")[1];
  const page = pathPart?.split("#")[0] ? pathPart.split("#")[0] : pathPart;

  return (
    <>
      <nav className="flex justify-between font-medium lg:px-24 px-8 sm:py-4 py-2 items-center bg-neutral-100">
        {/* Left */}
        <div className="flex gap-6">
          {/* Logo */}
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />
          </Link>

          {/* Menu */}
          <ul className="md:flex hidden gap-4 items-center text-neutral-500">
            <li className={`${page === "" ? "text-neutral-900 font-semibold" : ""} hover:text-neutral-800`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${page === "services" ? "text-neutral-900 font-semibold" : ""} hover:text-neutral-800`}>
              <Link href="/services">Services</Link>
            </li>
            <li className={`${page === "about" ? "text-neutral-900 font-semibold" : ""} hover:text-neutral-800`}>
              <Link href="/about">About us</Link>
            </li>
            <li className={`${page === "contact" ? "text-neutral-900 font-semibold" : ""} hover:text-neutral-800`}>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex gap-6 items-center">
          {/* Search */}
          <button className=" p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400">
            <Search />
          </button>

          {/* Contact Number */}
          <Link className=" hidden md:flex gap-2" href="tel:+919929812181">
            <Phone className="h-6 w-6" />
            +91 99298-12181
          </Link>

          {/* Contact Button */}
          <Link href="/contact" className="hidden md:block">
            <Button>Contact Us</Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="md:hidden h-8 w-8 order-1">
                <PanelRight className="h-4 w-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sm:max-w-xs flex flex-col justify-between">
              <div className="flex flex-col justify-between h-screen">
                <nav className=" grid gap-6 text-lg font-medium ">
                  <Link
                    href="/"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-md overflow-hidden gap-2 bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    {/* Logo */}
                    <Image src="/assets/logo.svg" alt="logo" width={40} height={40} />
                  </Link>
                  <Link
                    href="/"
                    className={`flex items-center gap-4 px-2.5 ${
                      page === "" ? "text-foreground" : "text-muted-foreground"
                    } hover:text-foreground`}
                  >
                    <Home />
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className={`flex items-center gap-4 px-2.5 ${
                      page === "services" ? "text-foreground" : "text-muted-foreground"
                    } hover:text-foreground`}
                  >
                    <HandHelping />
                    Services
                  </Link>
                  <Link
                    href="/about"
                    className={`flex items-center gap-4 px-2.5 ${
                      page === "about" ? "text-foreground" : "text-muted-foreground"
                    } hover:text-foreground`}
                  >
                    <Users />
                    About us
                  </Link>

                  <hr />

                  {/* Contact Number */}
                  <Link
                    className=" flex gap-4 items-center px-2.5 text-base text-muted-foreground hover:text-foreground"
                    href="tel:+919929812181"
                  >
                    <Phone className="h-5 w-5" />
                    +91 99298-12181
                  </Link>
                </nav>

                <Link href="/contact" className=" md:hidden w-full">
                  <Button className=" w-full">Contact Us</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};
