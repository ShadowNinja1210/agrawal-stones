import Image from "next/image";
import { cormorantGaramond, questrial } from "@/lib/direct-font";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { awsBaseUrlFree } from "@/public/assets/data";

const stones = [
  {
    image: "/assets/stone1.svg",
    title: "Natural Stones",
    description:
      "Agrawal Stones' Collection is a versatile range of natural stone options, designed to enhance both interiors and exteriors with their timeless beauty and durability.",
    link: "/products",
  },
  {
    image: "/assets/stone2.svg",
    title: "CNC Work",
    description:
      "Agrawal Stones' CNC Work brings precision and artistry together, offering intricate designs that add a unique character to both modern and traditional spaces.",
    link: "/products/#sandstone",
  },
  {
    image: "/assets/stone3.svg",
    title: "Handmade Modern Artifacts",
    description:
      "Agrawal Stones' Handmade Modern Artifacts blend traditional craftsmanship with contemporary design, creating pieces that serve as stunning focal points in any environment.",
    link: "/products/#limestone",
  },
];

const Card = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <Link href={link} className="z-10">
      <div className=" max-w-[420px] p-4  bg-white rounded-sm">
        <Image src={image} alt={title} width={500} height={500} />
        <div className="p-2 space-y-1">
          <h1 className={`${cormorantGaramond.className} text-4xl font-bold`}>{title}</h1>
          <p className={`${questrial.className}`}>{description}</p>
          <p className={`${questrial.className} underline underline-offset-2 flex items-center gap-1`}>
            Explore
            <ArrowRight className="h-4 w-4" />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function Stones() {
  return (
    <section className="relative bg-white">
      <div className=" z-20 flex flex-wrap gap-6 justify-around md:px-24 sm:px-16 px-10 py-12 items-end">
        {stones.map((stone) => (
          <Card key={stone.title} {...stone} />
        ))}
      </div>

      <Image
        src={awsBaseUrlFree + "/assets/stones-design.svg"}
        width={1000}
        height={1000}
        className="w-screen z-0 absolute bottom-0 opacity-80"
        style={{
          objectFit: "cover",
        }}
        alt="Services design"
      />
    </section>
  );
}
