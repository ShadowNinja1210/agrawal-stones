import { cormorantGaramond } from "@/lib/direct-font";
import { ArrowUp, ChevronUp, Mail, Phone } from "lucide-react";

export default function MainFooter() {
  return (
    <>
      <div className=" md:px-24 px-16 flex gap-4 flex-col py-10 shadow-xl">
        {/* Heading */}
        <h1 className={`${cormorantGaramond.className} pb-6 font-bold text-2xl`}>Producing Quality Products</h1>

        <div className="flex lg:flex-row flex-col gap-10">
          {/* Left */}
          <p className=" lg:w-1/2 w-full lg:p-2 ">
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
                <strong>Shree Agrawal Stone Industry</strong>
              </h3>
              <p>F-8, RIICO Industrial Area, Bhawani Mandi, Jhalawar, Rajasthan, 326502</p>
            </div>

            {/* Second Address */}
            <div>
              <h3>
                <strong>Krishna Udhyog</strong>
              </h3>
              <p>G-329, Road number 6, Indraprast Industrial area, Kota, Rajasthan, 324001</p>
            </div>

            {/* Contact */}
            <div>
              <p className="flex flex-col">
                <span className="flex gap-2">
                  <Phone className=" w-4" />
                  <a href="tel:+919929812181" className=" hover:text-white/80">
                    +91 99298-12181
                  </a>
                </span>
                <span className="flex gap-2">
                  <Phone className=" w-4" />
                  <a href="tel:+919214567181" className=" hover:text-white/80">
                    +91 92145-67181
                  </a>
                </span>
                <span className="flex gap-2">
                  <Mail className=" w-4" />
                  <a href="mailto:agrawalanuj97@gmail.com" className=" hover:text-white/80">
                    agrawalanuj97@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className=" rounded-full absolute text-center content-center h-12 w-12 bottom-6 self-center bg-primary-2 hover:brightness-90">
          <ChevronUp className="w-8 m-auto" />
        </div>
      </div>

      {/* ----------------------- */}
      {/* Last Footer */}
      <div className="flex sm:flex-row flex-col sm:text-left text-center justify-between md:px-24 px-16 py-3">
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
