import Image from "next/image";
import { cormorantGaramond } from "@/lib/direct-font";
import { awsBaseUrlFree } from "@/public/assets/data";

export default function Hero() {
  return (
    <div className="relative md:h-96 h-72 flex items-center justify-center">
      <Image
        className=" brightness-[0.4]"
        src={awsBaseUrlFree + "/assets/hero-image.jpg"}
        alt="stone-image"
        fill
        style={{
          objectFit: "cover",
        }}
        loading="eager"
      />
      <h1
        className={`absolute text-center text-neutral-100 lg:text-7xl md:text-5xl text-4xl px-4 mb-24 font-bold ${cormorantGaramond.className}`}
      >
        Bringing the beauty of nature to your projects
      </h1>
      <Image
        src={awsBaseUrlFree + "/assets/hero-design.svg"}
        alt="Design"
        width={1000}
        height={1000}
        className="w-screen absolute -bottom-1"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
