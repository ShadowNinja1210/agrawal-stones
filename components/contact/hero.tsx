"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ContactForm from "./form";
import GMap from "./g-map";
import { addresses, contacts } from "@/public/assets/data";

export default function ContactHero() {
  return (
    <section className="container p-10 flex md:flex-nowrap flex-wrap-reverse gap-10 w-screen md:justify-around">
      {/* Left Section - Maps */}
      <div className="flex flex-col gap-10">
        {/* Agrawal Stone */}
        <div className=" w-full flex flex-col gap-2">
          {/* Map */}
          <GMap mapUrl={addresses[0].mapUrl} />

          {/* Address */}
          <div className=" max-w-[400px]">
            <h1 className=" text-lg text-neutral-600">
              <strong>{addresses[0].name}</strong>
            </h1>
            <p>{addresses[0].address}</p>
          </div>
        </div>

        {/* Krishna Udhyog */}
        <div className=" flex flex-col gap-2 max-w-[400px]">
          {/* Map */}
          <GMap mapUrl={addresses[1].mapUrl} />

          {/* Address */}
          <div className=" max-w-[400px]">
            <h1 className=" text-lg text-neutral-600">
              <strong>{addresses[1].name}</strong>
            </h1>
            <p>{addresses[1].address}</p>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Details and Form */}
      <div className="flex flex-col gap-8 w-full max-w-[600px]">
        <Card className="bg-neutral-200 md:p-6">
          {/* Card Header */}
          <CardHeader>
            <CardTitle className="text-primary-2 underline underline-offset-2">
              <strong>Contact Details</strong>
            </CardTitle>
          </CardHeader>

          {/* Card Content */}
          <CardContent className="flex flex-col gap-4">
            {/* Contacts */}
            <div className="flex flex-col md:flex-row justify-between md:pr-20 gap-4 text-neutral-700">
              {/* Contact 1 */}
              <div className="flex flex-col">
                <h1 className=" text-xl pb-1">
                  <strong>{contacts[0].name}</strong>
                </h1>
                <a
                  href={`tel:+91${contacts[0].contact}`}
                  className=" flex gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Phone className="w-4" />
                  +91 {contacts[0].contact.toString().slice(0, 5)}-{contacts[0].contact.toString().slice(5)}
                </a>
                <a
                  className="flex gap-2 text-muted-foreground hover:text-foreground"
                  href={`mailto:${contacts[2].contact}`}
                >
                  <Mail className="w-4" />
                  {contacts[2].contact}
                </a>
              </div>

              {/* Contact 2 */}
              <div className="flex flex-col ">
                <h1 className=" text-xl pb-1">
                  <strong>{contacts[1].name}</strong>
                </h1>
                <a
                  href={`tel:+91${contacts[1].contact}`}
                  className=" flex gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Phone className="w-4" /> +91 {contacts[1].contact.toString().slice(0, 5)}-
                  {contacts[1].contact.toString().slice(5)}
                </a>
              </div>
            </div>

            {/* Addresses */}
            <div className="">
              <CardTitle className="text-primary-2 underline underline-offset-2 pb-6 pt-4">
                <strong>Addresses</strong>
              </CardTitle>
              <div className=" flex flex-col gap-4 text-neutral-700">
                {/* Address 1 */}
                <div className="max-w-[400px]">
                  <h1 className=" text-xl pb-1">
                    <strong>{addresses[0].name}</strong>
                  </h1>
                  <p className="text-muted-foreground flex gap-2">
                    <MapPin className="w-5" />
                    <span>
                      {addresses[0].address[0]}
                      <br />
                      {addresses[0].address[1]}
                    </span>
                  </p>
                </div>

                {/* Address 2 */}
                <div className="max-w-[400px]">
                  <h1 className=" text-xl pb-1">
                    <strong>{addresses[1].name}</strong>
                  </h1>
                  <p className="text-muted-foreground flex gap-2">
                    {" "}
                    <MapPin className="w-5" />
                    <span>
                      {addresses[1].address[0]}
                      <br />
                      {addresses[1].address[1]}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enquiry Form */}
        <Card className=" bg-neutral-200 md:p-6 ">
          <CardHeader>
            <CardTitle className="text-primary-2 underline underline-offset-2">
              <strong>Enquiry Form</strong>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
