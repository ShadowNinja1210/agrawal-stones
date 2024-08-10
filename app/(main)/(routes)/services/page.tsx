import ServicesCard from "@/components/services/services-card";
import { cormorantGaramond } from "@/lib/direct-font";
import { cn } from "@/lib/utils";
import { collections } from "@/public/assets/data";

export default function ServicesPage() {
  return (
    <main className="">
      <div className="bg-primary-2 p-4">
        <h1 className={cn("text-5xl font-bold text-neutral-100 text-center", cormorantGaramond.className)}>
          Our Services
        </h1>
      </div>
      <div className="flex flex-col gap-10 md:px-24 px-16 py-6">
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
    </main>
  );
}
