"use client";

import CustomBreadCrumb from "@/components/services/bread-crumb";
import ProductsPage from "@/components/services/products/product-page";
import SubCategoryHero from "@/components/services/sub-category-hero";
import { ReverseKebab } from "@/lib/function-store";
import useStateStore from "@/lib/state-store";
import { productsData } from "@/lib/types";
import { products } from "@/public/assets/data";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ServicesSubCategory() {
  const path = usePathname();
  const list = path?.split("/");
  const productName = ReverseKebab(list?.[4] ?? "");

  const productData: productsData | undefined = products.find((item) => item.name === productName);

  return (
    <main>
      <CustomBreadCrumb list={list as string[]} />
      <div className="space-y-6">{productData ? <ProductsPage {...productData} /> : "No products available."}</div>
    </main>
  );
}
