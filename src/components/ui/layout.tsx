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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className={cn(
          "flex-grow flex flex-col items-center justify-center px-24 bg-primary",
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
