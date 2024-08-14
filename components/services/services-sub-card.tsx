"use client";

import { cn } from "@/lib/utils";
import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServicesSubCard({
  category,
  linkOn = false,
}: {
  category: { name: string; imgUrl: string };
  linkOn: boolean;
}) {
  const path = usePathname();
  const list = path?.split("/");
  const categoryName = list?.[2] ?? "";
  const subCategoryName = list?.[3] ?? "";
  const categoryKebab = _.kebabCase(category.name);

  const categoryUrl = linkOn
    ? "/services/" + categoryName + "/" + subCategoryName + "/" + categoryKebab
    : category.imgUrl;

  const linkTarget = linkOn ? "_self" : "_blank";

  return (
    <Link href={categoryUrl} target={linkTarget} className={" bg-neutral-100 max-w-80 overflow-hidden rounded-t-xl "}>
      <div className="overflow-hidden">
        <Image
          src={category.imgUrl}
          alt={category.name}
          width={400}
          height={500}
          className={cn("max-h-64 max-w-80 object-cover transition-all hover:scale-105 aspect-[4/3]")}
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
