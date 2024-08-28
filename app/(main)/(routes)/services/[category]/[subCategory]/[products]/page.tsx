"use client";

import CustomBreadCrumb from "@/components/services/bread-crumb";
import ProductsPage from "@/components/services/products/product-page";
import { ReverseKebab } from "@/lib/function-store";
import { productsData } from "@/lib/types";
import { products } from "@/public/assets/data";
import { usePathname } from "next/navigation";

export default function ServicesSubCategory() {
  const path = usePathname();
  const list = path?.split("/");
  const productName = ReverseKebab(list?.[4] ?? "");

  const productData: productsData | undefined = products.find((item) => item.name === productName) as
    | productsData
    | undefined;

  return (
    <main className="flex flex-col gap-4 lg:items-start items-center">
      <CustomBreadCrumb list={list as string[]} />
      <div className="space-y-6">{productData ? <ProductsPage {...productData} /> : "No products available."}</div>
    </main>
  );
}
