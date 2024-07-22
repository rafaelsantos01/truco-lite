"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

import Link from "next/link";
import MenuClose from "../icons/menu";
import { Button } from "./button";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-orange-500">
      <div className="text-white text-2xl">Logo</div>
      <Button
        variant={"ghost"}
        className="text-white text-2xl hover:bg-orange-500"
        onClick={toggleMenu}
      >
        <MenuClose />
      </Button>
      <nav
        className={cn(
          "absolute top-16 left-0 w-full bg-orange-500 flex flex-col items-center",
          { hidden: !menuOpen }
        )}
      >
        <Link href="/" className="text-white p-4">
          Inicio
        </Link>
        <Link href="/donation" className="text-white p-4">
          Doação
        </Link>
      </nav>
    </header>
  );
};
