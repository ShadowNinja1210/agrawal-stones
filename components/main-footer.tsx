import { cormorantGaramond } from "@/lib/direct-font";
import { ChevronUp, Mail, Phone } from "lucide-react";

import { addresses, contacts } from "@/public/assets/data";

export default function MainFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className=" md:px-24 px-10 flex gap-4 flex-col py-10 shadow-xl">
        {/* Heading */}
        <h1 className={`${cormorantGaramond.className} pb-6 font-bold text-2xl`}>Producing Quality Products</h1>

        <div className="flex lg:flex-row flex-col gap-10">
          {/* Left */}
          <p className=" lg:w-1/2 w-full lg:p-2 pt-0 lg:pt-0">
            We are a team of passionate people whose goal is to improve everyone&#39;s lifestyle through our natural and
            rare products. We build great products to solve your project quality requirements. Our products are designed
            for anyone looking to elevate their space and want to welcome themselves in the luxury world of natural
            stones
          </p>

          {/* Right */}
          <div className="flex flex-col lg:gap-10 gap-4">
            {/* First Address */}
            <div className="flex flex-col">
              <h3>
                <strong>{addresses[0].name}</strong>
              </h3>
              <p>{addresses[0].address[0]}</p>
              <p>{addresses[0].address[1]}</p>
            </div>

            {/* Second Address */}
            <div>
              <h3>
                <strong>{addresses[1].name}</strong>
              </h3>
              <p>{addresses[1].address[0]}</p>
              <p>{addresses[1].address[1]}</p>
            </div>

            {/* Contact */}
            <div>
              <p className="flex flex-col">
                <span className="flex gap-2">
                  <Phone className=" w-4" />
                  <a href={`tel:+91${contacts[0].contact}`} className=" hover:text-white/80">
                    +91 {contacts[0].contact.toString().slice(0, 5)}-{contacts[0].contact.toString().slice(5)}
                  </a>
                </span>
                <span className="flex gap-2">
                  <Phone className=" w-4" />
                  <a href={`tel:+91${contacts[1].contact}`} className=" hover:text-white/80">
                    +91 {contacts[1].contact.toString().slice(0, 5)}-{contacts[1].contact.toString().slice(5)}
                  </a>
                </span>
                <span className="flex gap-2">
                  <Mail className=" w-4" />
                  <a href={`mailto:${contacts[2].contact}`} className=" hover:text-white/80">
                    {contacts[2].contact}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className=" rounded-full absolute text-center content-center h-12 w-12 sm:bottom-6 bottom-14 self-center bg-primary-2 hover:brightness-90"
        >
          <ChevronUp className="w-8 m-auto" />
        </button>
      </div>

      {/* ----------------------- */}
      {/* Last Footer */}
      <div className="flex sm:flex-row flex-col sm:text-left text-center justify-between sm:pt-3 pt-5 md:px-24 px-4 py-3">
        <p>Copyright &#169; Agrawal Stones Industry</p>
        <p className=" sm:text-base text-xs">
          Developed by{" "}
          <strong>
            <a
              href="https://mohitjeswani.live/"
              className="underline underline-offset-2 hover:text-neutral-950/60"
              target="blank"
            >
              MJ Devs
            </a>
          </strong>
        </p>
      </div>
    </>
  );
}
