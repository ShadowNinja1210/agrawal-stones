"use client";

import CustomBreadCrumb from "@/components/services/bread-crumb";
import ServicesSubCard from "@/components/services/services-sub-card";
import { ReverseKebab } from "@/lib/function-store";
import useStateStore from "@/lib/state-store";
import { productsData } from "@/lib/types";
import { products } from "@/public/assets/data";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ServicesSubCategory() {
  const path = usePathname();
  const list = path?.split("/");
  const categoryName = ReverseKebab(list?.[2] ?? "");
  let subCategoryName = ReverseKebab(list?.[3] ?? "");

  if (subCategoryName === "Slabs" || subCategoryName === "Wall Cladding")
    subCategoryName = categoryName + " " + subCategoryName;

  console.log(subCategoryName, " & ", categoryName);
  const { setServicesTitle } = useStateStore();
  useEffect(() => {
    setServicesTitle(subCategoryName);
  }, []);

  const subCategoryData: productsData[] = products.filter((item) => item.category === subCategoryName);
  console.log(subCategoryData);

  return (
    <main>
      <CustomBreadCrumb list={list as string[]} />
      <div className="flex justify-around gap-10 flex-wrap py-4">
        {subCategoryData.map((products) => (
          <ServicesSubCard key={products.model} category={{ name: products.name, imgUrl: products.mainImg }} linkOn />
        ))}
      </div>
    </main>
  );
}
