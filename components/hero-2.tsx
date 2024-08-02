import Image from "next/image";
import { cormorantGaramond } from "@/lib/direct-font";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero2() {
  return (
    <section className="flex lg:flex-row flex-col md:px-24 py-10 px-16 bg-white gap-6 items-center justify-center">
      <div className="space-y-4">
        <div className=" space-y-2">
          <h1 className={`${cormorantGaramond.className} leading-tight md:text-7xl text-5xl `}>
            Custome. Design. <br />
            Embrace.
          </h1>
          <p className=" sm:text-lg leading-6">
            Dive into the design world of natural stones with our catalogued design or Customize it yourself to reflect
            your personality in each of our master natural stone products.
          </p>
        </div>

        <hr className="w-full" />

        <div className="flex flex-col gap-4">
          <div>
            <Link href="/services">
              <Button size="lg" className="text-lg">
                Check Our Services
              </Button>
            </Link>
          </div>
          <div>
            <Button size="lg" variant="outline" className="text-lg">
              <a href="/assets/agrawal-stones.pdf" download="agrawal-stones">
                Our Catalog
              </a>
            </Button>
          </div>
        </div>
      </div>

      <img src="/assets/collage-1.png" alt="collage" className="w-full max-w-screen-md lg:block hidden" />

      <Image src="/assets/single-1.png" alt="collage" width={500} height={500} className=" lg:hidden w-full md:px-10" />
    </section>
  );
}