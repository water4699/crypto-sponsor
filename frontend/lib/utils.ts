import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility helper to merge Tailwind CSS class names.
 *
 * - First resolves conditional classes via `clsx`
 * - Then merges conflicting Tailwind classes via `tailwind-merge`
 */
export function cn(...inputs: Array<string | number | null | undefined | false>) {
  return twMerge(clsx(inputs));
}
