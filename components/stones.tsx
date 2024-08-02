import Image from "next/image";
import { cormorantGaramond, questrial } from "@/lib/direct-font";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stones = [
  {
    image: "/assets/stone1.svg",
    title: "Lime Stone",
    description:
      "Agrawal Stones' Limestones are durable and elegant, perfect for enhancing both indoor and outdoor spaces with a timeless touch.",
    link: "/services/#limestone",
  },
  {
    image: "/assets/stone2.svg",
    title: "Sand Stone",
    description:
      "Agrawal Stones' Sandstones are versatile and durable, ideal for adding a natural and timeless look to any space.",
    link: "/services/#sandstone",
  },
  {
    image: "/assets/stone3.svg",
    title: "More stones",
    description:
      "Explore Agrawal Stones' diverse range of stones, including granite, marble, and slate, perfect for enhancing any space with their unique textures and timeless beauty.",
    link: "/services",
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
        <div className="p-2">
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
      <div className=" z-20 flex flex-wrap gap-6 justify-around md:px-24 px-16 py-12 items-end">
        {stones.map((stone) => (
          <Card key={stone.title} {...stone} />
        ))}
      </div>

      <Image
        src="/assets/stones-design.svg"
        width={1000}
        height={1000}
        className="w-screen z-0 absolute bottom-0 opacity-80"
        objectFit="cover"
        alt="Services design"
      />
    </section>
  );
}
