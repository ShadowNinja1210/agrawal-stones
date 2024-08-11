"use client";

import CustomBreadCrumb from "@/components/bread-crumb";
import { ReverseKebab } from "@/lib/function-store";
import { usePathname } from "next/navigation";

export default function ServicesSubCategory() {
  const path = usePathname();
  const list = path?.split("/");
  const subCategoryName = ReverseKebab(list?.[3] ?? "");
  return (
    <div>
      <CustomBreadCrumb list={list as string[]} />
      <h1>{subCategoryName}</h1>
    </div>
  );
}
