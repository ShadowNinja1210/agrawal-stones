import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between px-24 py-4 items-center">
      {/* Left */}
      <div className="flex gap-6">
        {/* Logo */}
        <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />

        {/* Menu */}
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#services">About</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex gap-4 items-center">
        {/* Search */}
        <button className=" p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400">
          <Search />
        </button>

        {/* Contact Number */}
        <Link href="tel:+919929812181">+91 99298-12181</Link>

        {/* Contact Button */}
        <Button variant="outline">Contact Us</Button>
      </div>
    </nav>
  );
};
