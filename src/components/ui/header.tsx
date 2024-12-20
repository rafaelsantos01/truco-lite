"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

import Link from "next/link";

import { Button } from "./button";
import Image from "next/image";
import logo from "../../../public/images/truco.png";

import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="top-0 left-0 w-full flex justify-between items-center bg-primary px-3">
      <Link href="/" className="text-white text-2xl">
        <Image src={logo} alt="logo" width={65} height={65} />
      </Link>

      <Button
        variant={"default"}
        className="text-white text-2xl"
        onClick={toggleMenu}
      >
        {menuOpen ? <MdMenuOpen /> : <MdOutlineMenu />}
      </Button>
      <nav
        className={cn(
          "absolute top-16 left-0 w-full bg-primary flex flex-col items-center",
          { hidden: !menuOpen }
        )}
      >
        <Link href="/" className="text-white p-4">
          Inicio
        </Link>
        {/* <Link href="/donation" className="text-white p-4">
          Doação
        </Link> */}
      </nav>
    </header>
  );
};
