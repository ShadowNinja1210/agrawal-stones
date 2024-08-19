import { cormorantGaramond } from "@/lib/direct-font";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { awsBaseUrlFree } from "@/public/assets/data";

export default function Hero3() {
  return (
    <section className=" relative md:pb-36 pb-14 flex lg:flex-row flex-col md:px-24 px-10 py-8 gap-12 items-center justify-center bg-neutral-100">
      <Image
        src={awsBaseUrlFree + "/assets/services-collage.png"}
        width={1000}
        height={1000}
        alt="Services collage"
        className="md:max-w-screen-sm max-w-96 z-10"
      />

      <div className="space-y-6 pb-24">
        <h1
          className={`${cormorantGaramond.className} font-semibold text-primary-2 leading-tight md:text-6xl text-4xl `}
        >
          Leading Natural Stone Exporter
        </h1>
        <p className=" sm:text-lg leading-6">
          Discover how we can bring your vision to life with our tailored solutions and expert craftsmanship.
        </p>

        <hr className="w-full" />

        <div className="flex flex-col gap-4">
          <div>
            <Link href="/services">
              <Button size="lg" className="text-lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Image
        src={awsBaseUrlFree + "/assets/services-design.svg"}
        width={1000}
        height={1000}
        className="w-screen absolute -bottom-1 opacity-80"
        style={{
          objectFit: "cover",
        }}
        alt="Services design"
      />
    </section>
  );
}
