import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

import Link from "next/link";

export const Footer = ({ className }: { className?: ClassValue }) => {
  return (
    <div className={cn("fixed bottom-0 left-0 right-0  bg-primary", className)}>
      {/* <Link
        href="/donation"
        className="underline text-secondary flex items-center justify-center"
      >
        Me pague um café
      </Link> */}
      <p className="flex items-center justify-center text-secondary text-xs ">
        © 2024 - Developed by Rafael Santos
      </p>
    </div>
  );
};
