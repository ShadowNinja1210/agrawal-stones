"use client";

import { Hammer, HandHelping, Home, PanelRight, Pencil, PenTool, Phone, Search, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { awsBaseUrlFree, contacts } from "@/public/assets/data";
import SearchButton from "./search-button";

export const Navbar = () => {
  const url = usePathname();
  const pathPart = url?.split("/")[1];
  const page = pathPart?.split("#")[0] ? pathPart.split("#")[0] : pathPart;

  return (
    <nav className="flex justify-between font-medium lg:px-24 px-8 sm:py-4 py-2 items-center bg-neutral-100 ">
      {/* Left */}
      <div className="flex gap-6">
        {/* Logo */}
        <Link href="/">
          <Image src={awsBaseUrlFree + "/assets/logo.svg"} alt="logo" width={30} height={30} />
        </Link>

        {/* Menu */}
        <ul className="md:flex hidden gap-4 items-center text-neutral-500">
          <li className={`${page === "" ? "text-neutral-900 font-semibold" : ""} hover:text-neutral-800`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${page === "products" ? "text-neutral-900 font-semibold" : ""} hover:text-neutral-800`}>
            <Link href="/products">Products</Link>
          </li>
          <li className={`${page === "customize" ? "text-neutral-900 font-semibold" : ""} hover:text-neutral-800`}>
            <Link href="/customize">Customize</Link>
          </li>
          <li className={`${page === "about" ? "text-neutral-900 font-semibold" : ""} hover:text-neutral-800`}>
            <Link href="/about">About us</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex gap-6 items-center">
        {/* Search */}
        <SearchButton className="" />

        {/* Contact Number */}
        <Link className=" hidden md:flex gap-2" href={`tel:+91${contacts[0].contact}`}>
          <Phone className="h-6 w-6" />
          +91 {contacts[0].contact.toString().slice(0, 5)}-{contacts[0].contact.toString().slice(5)}
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
                {/* Logo */}
                <Link
                  href="/"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-md overflow-hidden gap-2 bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <SheetClose>
                    <Image src={awsBaseUrlFree + "/assets/logo.svg"} alt="logo" width={40} height={40} />
                  </SheetClose>
                </Link>

                <Link
                  href="/"
                  className={cn(
                    " px-2.5 hover:text-foreground",
                    page === "" ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <SheetClose className="flex items-center gap-4">
                    <Home />
                    Home
                  </SheetClose>
                </Link>

                <Link
                  href="/products"
                  className={cn(
                    "hover:text-foreground px-2.5",
                    page === "services" ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <SheetClose className="flex items-center gap-4">
                    <HandHelping />
                    Services
                  </SheetClose>
                </Link>

                <Link
                  href="/customize"
                  className={cn(
                    "hover:text-foreground px-2.5",
                    page === "customize" ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <SheetClose className="flex items-center gap-4">
                    <Hammer />
                    Customize
                  </SheetClose>
                </Link>

                <Link
                  href="/about"
                  className={cn(
                    "px-2.5 hover:text-foreground",
                    page === "about" ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <SheetClose className="flex items-center gap-4">
                    <Users />
                    About us
                  </SheetClose>
                </Link>

                <hr />

                {/* Contact Number */}
                <Link
                  className=" flex gap-4 items-center px-2.5 text-base text-muted-foreground hover:text-foreground"
                  href={`tel:+91${contacts[0].contact}`}
                >
                  <SheetClose className="flex items-center gap-4">
                    <Phone className="h-5 w-5" />
                    +91 {contacts[0].contact.toString().slice(0, 5)}-{contacts[0].contact.toString().slice(5)}
                  </SheetClose>
                </Link>
              </nav>

              <Link href="/contact" className=" md:hidden w-full">
                <SheetClose>
                  <Button className=" w-full">Contact Us</Button>
                </SheetClose>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
