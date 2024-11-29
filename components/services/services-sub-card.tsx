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
  category: { name: string | undefined; imgUrl: string | undefined };
  linkOn: boolean | undefined;
}) {
  const path = usePathname();
  const list = path?.split("/");
  const categoryName = list?.[2] ?? "";
  const subCategoryName = list?.[3] ?? "";
  const categoryKebab = _.kebabCase(category.name);

  const categoryUrl = linkOn
    ? "/products/" + categoryName + "/" + subCategoryName + "/" + categoryKebab
    : category.imgUrl;

  const linkTarget = linkOn ? "_self" : "_blank";

  if (categoryUrl === undefined || category.name === undefined || category.imgUrl === undefined) return null;
  return (
    <Link
      href={categoryUrl}
      target={linkTarget}
      className={" bg-primary-2/80 max-w-80 overflow-hidden rounded-t-xl hover:shadow-lg transition-all "}
    >
      <div className="overflow-hidden shadow-md  hover:shadow-none transition-all">
        <Image
          src={category.imgUrl}
          alt={category.name}
          width={400}
          height={500}
          className={cn(
            "max-h-64 max-w-80 object-cover transition-all duration-1000 hover:scale-105 aspect-[1000/690]"
          )}
        />
      </div>

      <div className=" relative">
        {/* <hr className="border-2  border-primary-2 " /> */}
        <h3 className="m-2 text-2xl text-white font-medium text-center leading-none">
          <strong>{category.name}</strong>
        </h3>
      </div>
    </Link>
  );
}
