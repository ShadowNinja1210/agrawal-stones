"use client";

import CustomBreadCrumb from "@/components/services/bread-crumb";
import _ from "lodash";
import { usePathname } from "next/navigation";
import { awsBaseUrlFree, collections, products } from "@/public/assets/data";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// const ServicesCard = dynamic(() => import("@/components/services/services-card"));
import ServicesCard from "@/components/services/services-card";
import { cormorantGaramond } from "@/lib/direct-font";
import { ReverseKebab } from "@/lib/function-store";
import useStateStore from "@/lib/state-store";
import { useEffect } from "react";
import ImageCard from "@/components/services/products/image-card";

export default function ServicesCategory() {
  const path = usePathname();
  const list = path?.split("/");

  let categoryName = ReverseKebab(list?.[2] ?? "");
  if (categoryName === "Cnc Work") {
    categoryName = "CNC Work";
  }

  const { setServicesTitle } = useStateStore();
  let artifacts;
  useEffect(() => {
    setServicesTitle(categoryName);
  }, []);

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
            {list?.[2] === "handmade-modern-artifact"
              ? products
                  .filter((item) => item.category === "Handmade Modern Artifact")
                  .map((product, i) => {
                    return (
                      <ImageCard
                        alt={product.model}
                        src={awsBaseUrlFree + product.src}
                        key={product.model}
                        model={product.model}
                      />
                    );
                  })
              : subCategories.map((subCategory: any, index: number) => (
                  <ServicesCard key={index} category={subCategory} />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}
