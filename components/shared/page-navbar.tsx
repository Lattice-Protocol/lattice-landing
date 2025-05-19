"use client";

import { FullLogo, PageNavItem } from ".";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { PageNavbarProps } from "utils/types/shared.types";

export const PageNavbar: React.FC<PageNavbarProps> = ({ commonLinks = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed m-2 sm:m-4 left-0 top-0 z-50 flex text-sm items-center justify-between right-0">
      <Link href="/">
        <figure className="flex items-center gap-2 bg-[#211b19] px-3 py-2">
          <FullLogo size={20} className="text-sm" />
        </figure>
      </Link>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden flex items-center p-2 bg-[#211b19] cursor-pointer"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <ul className="hidden lg:flex items-center gap-4 lg:gap-6 px-3 py-2 bg-[#211b19]">
        {commonLinks.map((link, index) => (
          <li key={index}>
            <PageNavItem item={link} />
          </li>
        ))}
      </ul>

      <div
        className={`absolute top-full right-0 mt-2 w-full lg:hidden transition-all duration-300 ease-in-out transform origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col w-full gap-2 p-4 bg-[#211b19] shadow-lg">
          {commonLinks.map((link, index) => (
            <li key={index} onClick={() => setMobileMenuOpen(false)}>
              <PageNavItem item={link} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
