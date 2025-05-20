"use client";

import { FullLogo, PageNavItem } from ".";
import Link from "next/link";
import type { PageNavbarProps } from "utils/types/shared.types";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";

export const PageNavbar: React.FC<PageNavbarProps> = ({ commonLinks = [] }) => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 m-2 flex items-center justify-between text-sm sm:m-4">
      <Link href="/">
        <figure className="flex items-center gap-2 bg-[#211b19] px-3 py-2">
          <FullLogo size={18} className="text-xs sm:text-sm" />
        </figure>
      </Link>

      {/* <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden flex items-center p-2 bg-[#211b19] cursor-pointer"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button> */}

      <ul className="flex items-center gap-4 bg-[#211b19] px-3 py-2 lg:gap-6">
        {commonLinks.map((link, index) => (
          <li key={index}>
            <PageNavItem item={link} />
          </li>
        ))}
      </ul>

      {/* <div
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
      </div> */}
    </nav>
  );
};
