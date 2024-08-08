import { cormorantGaramond, questrial } from "@/lib/direct-font";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Commitment() {
  return (
    <section className=" relative md:pb-20 pb-0 flex lg:flex-row flex-col-reverse md:px-24 px-16 md:py-8 py-4 justify-around gap-4 items-center bg-neutral-100">
      <div className="space-y-4 mb-24 bg-primary-2 p-12 max-w-[420px] rounded-xl text-white">
        <h1 className={`${cormorantGaramond.className} font-semibold text-white text-5xl `}>
          Our <br />
          Commitment
        </h1>
        <div className={`${questrial.className} space-y-4`}>
          <p className=" sm:text-base">Enhance your space with our exquisite natural stones.</p>
          <p className=" sm:text-base">
            We work closely with our partners to ensure they share our values and commitment to sustainability.
            Together, we strive to make a positive impact on the environment.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <Link href="/about">
              <Button className="text-base bg-white hover:bg-neutral-100 active:bg-neutral-200 text-primary-2">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/assets/commitment-image.svg"
        width={1000}
        height={1000}
        alt="Commitment Stone Image"
        className="md:max-w-[600px] max-w-96 z-10"
      />

      <Image
        src="/assets/commitment-design.svg"
        width={1000}
        height={1000}
        className="w-screen absolute -bottom-1 opacity-80"
        style={{
          objectFit: "cover",
        }}
        alt="Commitment design"
      />
    </section>
  );
}
