import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CustomForm from "./form";
import { cn } from "@/lib/utils";
import { cormorantGaramond } from "@/lib/direct-font";
import { awsBaseUrlFree } from "@/public/assets/data";

export default function CustomHero() {
  return (
    <main className="container p-10 flex md:flex-nowrap gap-10 w-screen md:justify-around">
      {/* Left Side */}
      <section className="flex flex-col gap-10 items-center ">
        <Image
          src={awsBaseUrlFree + "/assets/customize.png"}
          className="p-16 pb-2"
          alt="Customize your product"
          width={500}
          height={500}
        />

        <div className="space-y-4 max-w-[550px]">
          <h1
            className={cn("leading-tight text-primary-2 md:text-7xl text-5xl capitalize", cormorantGaramond.className)}
          >
            Craft Your Unique Stone Masterpiece
          </h1>
          <p className="sm:text-lg leading-6 ">
            Elevate your space with personalized stone creations. Explore our catalog of meticulously designed stone
            products or customize your own to reflect your style. Whether it&apos;s for your home, office, or any
            project, our custom stone solutions are crafted to meet your exact specifications. Let your imagination
            shape the natural beauty of stone into a true work of art.
          </p>
        </div>
      </section>

      {/* Right Side */}
      <section className="flex flex-col gap-8 w-full max-w-[600px]">
        {/* Customize Form */}
        <Card className="bg-neutral-100 md:p-6">
          <CardHeader>
            <CardTitle className="text-primary-2 text-3xl">Customize your product</CardTitle>
          </CardHeader>
          <CardContent>
            <CustomForm />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
