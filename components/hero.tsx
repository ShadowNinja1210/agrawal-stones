import Image from "next/image";
import { cormorantGaramond } from "@/lib/direct-font";

export default function Hero() {
  return (
    <div className="relative md:h-96 h-72 flex items-center justify-center">
      <Image
        className=" brightness-[0.4]"
        src="/assets/hero-image.jpg"
        alt="stone-image"
        layout="fill"
        objectFit="cover"
      />
      <h1
        className={`absolute text-center text-neutral-100 lg:text-7xl md:text-5xl text-4xl px-4 mb-24 font-bold ${cormorantGaramond.className}`}
      >
        Bringing the beauty of nature to your projects
      </h1>
      <Image
        src="/assets/hero-design.svg"
        alt="Design"
        width={1000}
        height={1000}
        className="w-screen absolute -bottom-1"
        objectFit="cover"
      />
    </div>
  );
}
