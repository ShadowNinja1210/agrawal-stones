"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadButton, UploadDropzone } from "@/lib/utils";

export default function FileUpload({ onChange, value }: { onChange: (url?: string) => void; value: string }) {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-40 w-48">
        <Image src={value} fill alt="Design" className="rounded-lg" />
      </div>
    );
  }
  return (
    <UploadDropzone
      className="cursor-pointer"
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}
