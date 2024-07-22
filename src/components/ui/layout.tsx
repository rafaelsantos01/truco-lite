import type { ClassValue } from "clsx";

import { cn } from "@/lib/utils";
import { Footer } from "./footer";
import { Header } from "./header";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  className?: ClassValue;
};

export const Layout = ({ className, children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className={cn(
          "flex-grow flex flex-col items-center justify-center p-24 bg-orange-500",
          className
        )}
      >
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
