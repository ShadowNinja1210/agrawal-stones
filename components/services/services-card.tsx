import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ServicesCard({ category }: { category: { name: string; imgUrl: string } }) {
  return (
    <Link href="#" className={" bg-neutral-100 max-w-96 rounded-md overflow-hidden"}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={category.imgUrl}
          alt={category.name}
          width={400}
          height={500}
          className={cn("max-h-82 max-w-96 object-cover transition-all hover:scale-105 aspect-[4/3]")}
        />
      </div>

      <div className="px-2 py-2">
        <h3 className="text-2xl font-medium text-center leading-none">
          <strong>{category.name}</strong>
        </h3>
      </div>
    </Link>
  );
}
