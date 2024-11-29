"use client";

import { cn } from "@/lib/utils";
import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServicesCard({ category }: { category: { name: string; imgUrl: string } }) {
  const path = usePathname();
  const list = path?.split("/");
  const categoryName = list?.[2] ?? "";
  const categoryKebab = _.kebabCase(category.name);

  let categoryUrl = "/products/" + categoryName + "/" + categoryKebab;
  if (category.name === "Custom Work") {
    categoryUrl = "/customize";
  }
  return (
    <Link href={categoryUrl} className={" bg-neutral-100 max-w-80 overflow-hidden rounded-t-xl hover:shadow-lg"}>
      <div className="overflow-hidden">
        <Image
          src={category.imgUrl}
          alt={category.name}
          width={400}
          height={500}
          className={cn("max-h-64 max-w-80 object-cover transition-all hover:scale-105 duration-1000 aspect-[4/3]")}
        />
      </div>

      <div className="px-6 py-2">
        <h3 className="text-xl font-medium text-center leading-none tracking-wide">
          <strong>{category.name}</strong>
        </h3>
      </div>
    </Link>
  );
}
