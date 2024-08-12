import { cormorantGaramond } from "@/lib/direct-font";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CustomPage() {
  return (
    <section className=" bg-[#D00101] md:px-24 pt-6 py-10 px-10 w-full text-white flex justify-between gap-10 flex-wrap items-center">
      <Image
        src="/assets/custom-design.svg"
        width={1000}
        height={1000}
        alt="Custom Orders"
        className="md:max-w-[500px] pl-10"
      />

      {/* Right Side */}
      <div className=" space-y-4 max-w-[700px]">
        <div className=" space-y-2">
          <h1 className={cn("leading-tight md:text-7xl text-5xl capitalize", cormorantGaramond.className)}>
            Customize it <br />
            your Way.
          </h1>
          <p className=" sm:text-lg leading-6 ">
            Explore the timeless beauty of our natural stone designs or bring your vision to life with custom creations.
            Personalize each piece to reflect your style and make it truly yours.
          </p>
        </div>
        <hr className="w-full" />
        <div>
          <Link href="/custom">
            <Button size="lg" className="text-lg text-primary-2 bg-white hover:bg-neutral-100">
              Customize your product
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
