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
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main
        className={cn(
          "flex-grow flex flex-col items-center justify-center px-24 ",
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
