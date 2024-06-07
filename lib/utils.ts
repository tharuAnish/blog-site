// lib/utils.ts

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { StaticImageData } from "next/image"

// Existing utility function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// New function to generate image URLs
export function generateImageUrl(imagePath: string | StaticImageData) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/"
  const path = typeof imagePath === "string" ? imagePath : imagePath.src
  return `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`
}
