"use client";

import CustomBreadCrumb from "@/components/services/bread-crumb";
import ImageCard from "@/components/services/products/image-card";
import ProductsPage from "@/components/services/products/product-page";
import ServicesSubCard from "@/components/services/services-sub-card";
import { ReverseKebab } from "@/lib/function-store";
import useStateStore from "@/lib/state-store";
import { productsData } from "@/lib/types";
import { awsBaseUrlFree, products } from "@/public/assets/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ServicesSubCategory() {
  const path = usePathname();
  const list = path?.split("/");
  const categoryName = ReverseKebab(list?.[2] ?? "");
  let subCategoryName = ReverseKebab(list?.[3] ?? "");
  let subName;

  if (subCategoryName === "Slabs" || subCategoryName === "Wall Cladding" || subCategoryName === "Cobbles") {
    subName = subCategoryName;
    subCategoryName = categoryName + " " + subCategoryName;
  } else if (subCategoryName === "3 D 2 D Work") {
    subCategoryName = "3D/2D Work";
  }

  console.log(subCategoryName, " & ", categoryName);
  const { setServicesTitle } = useStateStore();

  const productData: productsData | undefined = products.find((item) => item.name === subCategoryName) as
    | productsData
    | undefined;

  useEffect(() => {
    setServicesTitle(subCategoryName);
  }, []);

  const subCategoryData = products.filter((item) => item.category === subCategoryName);
  console.log(subCategoryData);

  if (
    subCategoryName === "Lime Stone Chess Checkered" ||
    subCategoryName === "Lime Stone Diamond Checkered" ||
    subCategoryName === "Lime Stone Cobbles" ||
    subCategoryName === "Sandstone Cobbles" ||
    subCategoryName === "Basalt Cobbles"
  ) {
    const productData = products.find((item) => item.name === subCategoryName) as productsData;
    console.log("Product data for checkered", productData);
    return (
      <main className="flex flex-col gap-4 lg:items-start items-center">
        <CustomBreadCrumb list={list as string[]} />
        <div className="space-y-6">{productData ? <ProductsPage {...productData} /> : "No products available."}</div>
      </main>
    );
  }
  return (
    <main>
      <CustomBreadCrumb list={list as string[]} />
      <div className="flex justify-around gap-10 flex-wrap py-4">
        {subCategoryName === "3D/2D Work" || subCategoryName === "Jaali Work" ? (
          products
            .filter((product) => {
              console.log("Product", product);
              return product.category === subCategoryName;
            })
            .map((product) => {
              console.log("CNC Produt", product);
              return (
                <ImageCard
                  key={product.model}
                  model={product.model}
                  src={(awsBaseUrlFree + product.src) as string}
                  alt={product.model}
                />
              );
            })
        ) : subName === "Wall Cladding" || subCategoryName === "Basalt Slabs" ? (
          <div className="space-y-6">{productData ? <ProductsPage {...productData} /> : "No products available."}</div>
        ) : (
          subCategoryData.map((products) => (
            <ServicesSubCard key={products.model} category={{ name: products.name, imgUrl: products.mainImg }} linkOn />
          ))
        )}
      </div>
    </main>
  );
}
