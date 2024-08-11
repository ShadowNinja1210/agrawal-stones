"use client";

import CustomBreadCrumb from "@/components/bread-crumb";
import _ from "lodash";
import { usePathname } from "next/navigation";
import { collections } from "@/public/assets/data";
import { cn } from "@/lib/utils";
import ServicesCard from "@/components/services/services-card";
import { cormorantGaramond } from "@/lib/direct-font";
import { ReverseKebab } from "@/lib/function-store";

export default function ServicesCategory() {
  const path = usePathname();
  const list = path?.split("/");
  const categoryName = ReverseKebab(list?.[2] ?? "");
  const subCategories = collections
    .map((collection) => collection.categories.filter((category) => category.name === categoryName))
    .flat()[0].subCategories;

  return (
    <main>
      <CustomBreadCrumb list={list as string[]} />
      <div className="flex flex-col gap-10">
        <div className=" space-y-5">
          <div>
            <h1 className={cn("text-4xl font-bold text-primary-2 text-center", cormorantGaramond.className)}>
              {categoryName}
            </h1>
            <hr className="mt-2" />
          </div>
          <div className="flex justify-around gap-10 flex-wrap">
            {subCategories.map((subCategory: any, index: number) => (
              <ServicesCard key={index} category={subCategory} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
