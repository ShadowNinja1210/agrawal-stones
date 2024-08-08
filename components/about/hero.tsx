import { cormorantGaramond } from "@/lib/direct-font";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className=" md:px-24 relative px-16 py-6">
      <Image
        src="/assets/stone-background.jpg"
        alt="Stone Background"
        fill
        objectFit="cover"
        className="w-screen absolute brightness-50 top-0 left-0 -z-10"
      />
      <h1 className={`${cormorantGaramond.className} text-white text-6xl font-bold`}>Agrawal Stones&#39; Story</h1>
    </section>
  );
}
