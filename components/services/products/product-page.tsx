"use client";

// Dependencies
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { useRef } from "react";

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
import { awsBaseUrlFree } from "@/public/assets/data";

// UI Components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProductsPage(props: productsData) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const { name, model, size, thickness, mainImg, description, images } = props;

  const router = useRouter();

  const packaging = [
    {
      name: "packaging-2",
      title: "Robust Packaging",
      description: "We craft durable wooden crates.",
      icon: <GiToolbox />,
    },
    {
      name: "packaging-4",
      title: "Secure Wrapping",
      description: "We use strong strips and plastic.",
      icon: <LuShieldCheck />,
    },
    {
      name: "packaging-5",
      title: "Skilled Team",
      description: "Our team is experienced & skilled.",
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
    <section className="space-y-8 ">
      {/* ---------Hero--------- */}

      <div className="flex flex-wrap gap-14 lg:justify-start justify-center items-center">
        {/* Main Image */}
        <div className="xl:max-w-[500px] xl:max-h-[350px] max-w-[500px] max-h-[350px] lg:max-w-[400px] lg:max-h-[280px] rounded-md overflow-hidden">
          <Image width={500} height={350} src={mainImg} alt={name} className="hover:scale-105 transition-all" />
        </div>

        {/* Side Details */}
        <div className=" flex flex-col gap-4 lg:items-start items-center lg:text-left text-center">
          {/* Name */}
          <h1 className={cn("md:text-6xl  text-5xl text-primary-2  font-bold", cormorantGaramond.className)}>{name}</h1>

          {/* Specs */}
          <ul className="sm:text-lg">
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
          <Button
            size="lg"
            className="text-lg max-w-56"
            onClick={() => router.push(`/contact?stone=${encodeURIComponent(name)}`)}
          >
            Send Enquiry
          </Button>
        </div>
      </div>

      {/* ---------Description--------- */}
      <div className="space-y-4 lg:text-left text-center">
        <h1
          className={cn("md:text-5xl text-4xl font-bold underline decoration-primary-2", cormorantGaramond.className)}
        >
          Description
        </h1>
        <p className="text-lg">{description}</p>
      </div>

      {/* Packaging */}
      <div className="space-y-8 ">
        <h1
          className={cn(
            "lg:text-left text-center md:text-5xl text-4xl font-bold underline decoration-primary-2",
            cormorantGaramond.className
          )}
        >
          Packaging
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-8 justify-items-center">
          {packaging.map((item) => {
            return (
              <div key={item.name} className="max-w-72 space-y-2">
                <div className="w-72 h-52 overflow-hidden">
                  <Image
                    src={awsBaseUrlFree + "/assets/packaging/" + item.name + ".png"}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    className="aspect-[4/3] w-72 h-52 cursor-pointer object-cover hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <h1 className="text-4xl text-primary-2">{item.icon}</h1>
                  <p className="flex  flex-col">
                    <strong>
                      <span className="text-xl">{item.title}</span>
                    </strong>
                    <span>{item.description}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery */}
      <div className="space-y-8 lg:text-left text-center">
        <h1
          className={cn("md:text-5xl text-4xl font-bold underline decoration-primary-2", cormorantGaramond.className)}
        >
          Gallery
        </h1>
        <div className="flex gap-12 flex-wrap items-center lg:justify-start justify-center">
          {images.map((img) => (
            <div key={img} className="max-w-[350px] overflow-hidden">
              <Image width={500} height={350} src={img} alt={name} className="hover:scale-105 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
