// For Tailwind
import { type ClassValue, clsx } from "clsx";

// For UploadThing
import { twMerge } from "tailwind-merge";
import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

// Tailwind cn function to merge classes and apply tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// UploadThing components
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
