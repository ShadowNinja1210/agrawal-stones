import Image from "next/image";
import { Button } from "../ui/button";
import { Facebook } from "lucide-react";

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
  return (
    <section>
      <div>
        <Image width={1000} height={1000} src={mainImg} alt={name} />
        <div>
          {/* Name */}
          <h1>{name}</h1>

          {/* Specs */}
          <ul>
            <li>Brand Name: Agrawal Stones</li>
            <li>Model Number: {model}</li>
            <li>Size: {size}</li>
            <li>Thickness: {thickness}</li>
          </ul>

          {/* Social Media */}
          <div>
            <button>
              <Facebook />
            </button>
          </div>

          {/* Enquiry Button */}
          <Button size="lg">Enquiry</Button>
        </div>
      </div>
    </section>
  );
}
