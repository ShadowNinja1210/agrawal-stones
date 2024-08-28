import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function ImageCard({ src, alt, model }: { src: string; alt: string; model: string }) {
  return (
    <Link href={src} className={" bg-neutral-100 max-w-80 overflow-hidden rounded-t-xl hover:shadow-lg"}>
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={500}
          className={cn("max-h-64 max-w-80 object-contain bg-white transition-all hover:scale-105 aspect-[4/3]")}
        />
      </div>

      <div className="px-6 py-2 bg-primary-2 text-white rounded-b-xl">
        <h3 className="text-xl font-medium text-center leading-none tracking-wide ">
          <strong>Model: {model}</strong>
        </h3>
      </div>
    </Link>
  );
}
