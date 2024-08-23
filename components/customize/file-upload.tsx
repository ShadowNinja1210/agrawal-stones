"use client";

import { UploadButton, UploadDropzone } from "@/lib/utils";

export default function FileUpload({ onChange, value }: { onChange: (url?: string) => void; value: string }) {
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
