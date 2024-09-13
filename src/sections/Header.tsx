"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useEffect, useState, MouseEvent } from "react";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Handle outside click to close the menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        menuOpen &&
        !target.closest(".dropdown-menu") &&
        !target.closest(".menu-icon")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener(
      "mousedown",
      handleClickOutside as unknown as EventListener
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as unknown as EventListener
      );
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-[#1d4c2d] text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Let's cart Farm Produce.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started with MetripMarigold Farms</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon
              className="h-5 w-5 md:hidden cursor-pointer menu-icon"
              onClick={toggleMenu}
            />
            <nav
              className={`${
                menuOpen ? "block" : "hidden"
              } md:flex md:gap-6 md:relative shadow-lg md:shadow-none absolute top-full right-0 w-auto md:w-full p-5 md:p-0 z-10 dropdown-menu`}
              style={{
                right: 0, // Ensures the menu aligns to the right
                minWidth: "200px", // Minimum width of the dropdown menu
              }}
            >
              <a href="#" className="block py-2 md:py-0 md:ml-auto">
                About
              </a>
              <a href="#" className="block py-2 md:py-0">
                Products
              </a>
              <a href="#" className="block py-2 md:py-0">
                Services
              </a>
              <a href="#" className="block py-2 md:py-0">
                Customers
              </a>
              <a href="#" className="block py-2 md:py-0">
                Help
              </a>
              <button className="bg-[#1d4c2d] text-white px-2 p-1 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
