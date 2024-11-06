import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Arquivos na pasta lib são utilizados pelo shadcn nos componentes que
// ele provê
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
