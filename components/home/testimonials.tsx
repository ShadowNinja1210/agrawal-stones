import Image from "next/image";
import { cormorantGaramond } from "@/lib/direct-font";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { awsBaseUrlFree, testimonialsData } from "@/public/assets/data";

const Cards = ({
  name,
  title,
  imageUrl,
  review,
}: {
  name: string;
  title: string;
  imageUrl: string;
  review: string;
}) => {
  const firstLetter = name.charAt(0).toUpperCase();
  return (
    <div className=" italic bg-white w-3/4 max-w-[560px] p-4 flex sm:gap-4 gap-3 justify-between flex-col text-foreground h-fit">
      <p className="md:text-xl text-lg sm:leading-7 leading-6">{review}</p>
      <div className="flex items-center gap-2 text-muted-foreground">
        <div
          className={`h-8 w-8 rounded-full text-white text-2xl overflow-hidden font-extrabold bg-primary-2 not-italic flex items-center justify-center ${cormorantGaramond.className}`}
        >
          {imageUrl ? (
            <Image src={imageUrl} alt={name} width={100} height={100} className=" h-[33px] w-[33px]" />
          ) : (
            firstLetter
          )}
        </div>
        <h3 className=" flex md:flex-row flex-col whitespace-pre-wrap">
          <span>{name}</span>
          <span className="md:text-base text-xs">
            <span className="hidden md:inline"> &#8226; </span>
            {title}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className=" relative md:bg-[#e1e1e1] bg-primary-2/80 z-30">
      <div className="md:px-24 px-0 py-24 lg:pb-72 testimonial-media">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={() => plugin.current.play()}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="flex justify-center">
                <Cards {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:flex hidden" />
          <CarouselNext className="md:flex hidden" />
        </Carousel>
      </div>

      <Image
        src={awsBaseUrlFree + "/assets/testimonials-design.svg"}
        alt="testimonial design"
        width={2000}
        height={676}
        className="w-full absolute md:block hidden top-0 -z-20 "
      />

      <div className=" shadow-xl bg-[#e1e1e1] flex md:flex-row justify-between lg:space-x-40 md:space-x-10 space-x-0 md:space-y-0 space-y-4 flex-col md:items-start items-center lg:px-24 md:px-16 px-10 md:pt-0 pt-16 lg:pb-24 md:pb-16 pb-12">
        <h1
          className={`${cormorantGaramond.className} lg:text-4xl  md:text-left text-center sm:text-3xl text-2xl font-bold`}
        >
          Enhance your projects with the beauty and strength of natural stones.
        </h1>
        <Link href="/contact">
          <Button size="lg" className=" hidden md:block text-lg">
            Get in touch with us
          </Button>
          <Button className="md:hidden text-lg">Get in touch with us</Button>
        </Link>
      </div>
    </section>
  );
}
