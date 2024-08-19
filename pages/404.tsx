"use client";

import { awsBaseUrlFree } from "@/public/assets/data";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Custom404() {
  return (
    <main className="flex justify-center items-center h-screen">
      <title>404 | Agrawal Stones</title>
      <div className="flex flex-col">
        <Image src={awsBaseUrlFree + "/assets/404.svg"} alt="404 - Page Not Found" width={500} height={500} />
        <Link href="/">
          <Image src={awsBaseUrlFree + "/assets/home-button.svg"} alt="Home" width={50} height={50} />
        </Link>
      </div>
    </main>
  );
}
