"use client";

import ServicesCard from "@/components/services/services-card";
import { cormorantGaramond } from "@/lib/direct-font";
import useStateStore from "@/lib/state-store";
import { cn } from "@/lib/utils";
import { collections } from "@/public/assets/data";
import { useEffect } from "react";

export default function ServicesPage() {
  const { setServicesTitle } = useStateStore();

  useEffect(() => {
    setServicesTitle("Our Services");
  }, []);
  return (
    <>
      <div className="flex flex-col gap-10">
        {collections.map((collection: any, index: number) => (
          <div key={index} className=" space-y-5">
            <div>
              <h1 className={cn("text-4xl font-bold text-primary-2 text-center", cormorantGaramond.className)}>
                {collection.name}
              </h1>
              <hr className="mt-2" />
            </div>
            <div className="flex justify-around gap-10 flex-wrap">
              {collection.categories.map((category: any, index: number) => (
                <ServicesCard key={index} category={category} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
