import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { cormorantGaramond } from "@/lib/direct-font";

export default function SubCategoryHero({
  name,
  model,
  size,
  thickness,
  mainImg,
}: {
  name: string;
  model: string;
  size: string;
  thickness: string;
  mainImg: string;
}) {
  console.log(name, model, size, thickness, mainImg);
  return (
    <section>
      <div className="flex">
        <Image width={300} height={400} src={mainImg} alt={name} className=" aspect-[3/4]" />

        <div className=" flex flex-col">
          {/* Name */}
          <h1 className={cn("text-6xl font-bold", cormorantGaramond.className)}>{name}</h1>

          {/* Specs */}
          <ul>
            <li>Brand Name: Agrawal Stones</li>
            <li>Model Number: {model}</li>
            <li>Size: {size}</li>
            <li>Thickness: {thickness}</li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4">
            <button className="rounded-sm h-8 w-8 bg-blue-700 flex justify-center items-center text-white">
              <Facebook />
            </button>
            <button className="rounded-sm h-8 w-8 bg-blue-700 flex justify-center items-center text-white">
              <Facebook />
            </button>
            <button className="rounded-sm h-8 w-8 bg-blue-700 flex justify-center items-center text-white">
              <Facebook />
            </button>
            <button className="rounded-sm h-8 w-8 bg-blue-700 flex justify-center items-center text-white">
              <Facebook />
            </button>
          </div>

          {/* Enquiry Button */}
          <Button size="lg" className="text-lg">
            Enquiry
          </Button>
        </div>
      </div>
    </section>
  );
}
