// Dependencies
import Image from "next/image";

// UI Components
import { Button } from "@/components/ui/button";

// Utilities
import { cn } from "@/lib/utils";
import { cormorantGaramond } from "@/lib/direct-font";
import { productsData } from "@/lib/types";

// Icons
import { GiToolbox } from "react-icons/gi";
import { LuShieldCheck } from "react-icons/lu";
import { PiHardHatBold } from "react-icons/pi";
import { FaTruckMoving } from "react-icons/fa";
import { Facebook } from "lucide-react";

export default function ProductsPage(props: productsData) {
  const { name, model, size, thickness, mainImg, description, images } = props;

  const packaging = [
    {
      name: "packaging-2",
      title: "Robust Packaging",
      description: "We craft durable wooden crates for strong build quality.",
      icon: <GiToolbox />,
    },
    {
      name: "packaging-4",
      title: "Secure Wrapping",
      description: "We use strong strips and high-quality plastic coverings.",
      icon: <LuShieldCheck />,
    },
    {
      name: "packaging-5",
      title: "Skilled Team",
      description: "Our team is experienced and skilled.",
      icon: <PiHardHatBold />,
    },
    {
      name: "packaging-6",
      title: "Safe Dispatch",
      description: "Ready for safe port dispatch.",
      icon: <FaTruckMoving />,
    },
  ];

  return (
    <section className="space-y-8">
      {/* ---------Hero--------- */}

      <div className="flex flex-wrap gap-14 items-center">
        {/* Main Image */}
        <div className=" max-w-[500px] max-h-[350px] rounded-md overflow-hidden">
          <Image width={500} height={350} src={mainImg} alt={name} className="hover:scale-105 transition-all" />
        </div>

        {/* Side Details */}
        <div className=" flex flex-col gap-4">
          {/* Name */}
          <h1 className={cn("md:text-7xl text-5xl font-bold", cormorantGaramond.className)}>{name}</h1>

          {/* Specs */}
          <ul className="text-lg">
            <li>
              <strong>Brand Name:</strong> Agrawal Stones
            </li>
            <li>
              <strong>Model Number:</strong> {model}
            </li>
            <li>
              <strong>Size:</strong> {size}
            </li>
            <li>
              <strong>Thickness:</strong> {thickness}
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4">
            <button className="rounded-sm h-9 w-9 p-2 hover:p-0 bg-blue-700 flex justify-center items-center text-white">
              <Facebook />
            </button>
            <button className="rounded-sm h-9 w-9 p-2 hover:p-0 bg-blue-700 flex justify-center items-center text-white">
              <Facebook />
            </button>
            <button className="rounded-sm h-9 w-9 p-2 hover:p-0 bg-blue-700 flex justify-center items-center text-white">
              <Facebook />
            </button>
            <button className="rounded-sm h-9 w-9 p-2 hover:p-0 bg-blue-700 flex justify-center items-center text-white">
              <Facebook />
            </button>
          </div>

          {/* Enquiry Button */}
          <Button size="lg" className="text-lg max-w-56">
            Send Enquiry
          </Button>
        </div>
      </div>

      {/* ---------Description--------- */}
      <div className="space-y-4">
        <h1 className={cn("md:text-5xl text-4xl font-bold underline", cormorantGaramond.className)}>Description</h1>
        <p className="text-lg">{description}</p>
      </div>

      {/* Packaging */}
      <div className="space-y-8">
        <h1 className={cn("md:text-5xl text-4xl font-bold underline", cormorantGaramond.className)}>Packaging</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-8">
          {packaging.map((item) => (
            <div key={item.name} className="w-72 h-52 overflow-hidden">
              <Image
                src={`/assets/packaging/packaging-${item.name}.png`}
                alt={`packaging-${item.name}`}
                width={1000}
                height={1000}
                objectFit="cover"
                className="aspect-[4/3] w-72 h-52 cursor-pointer hover:scale-105 transition-all"
              />
              <h1>
                {item.icon} {item.title}
              </h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
