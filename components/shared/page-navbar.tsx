"use client";

import { FullLogo, PageNavItem } from ".";
import type { PageNavbarProps } from "utils/types/shared.types";

export const PageNavbar: React.FC<PageNavbarProps> = ({ commonLinks = [] }) => {
  return (
    <nav className="fixed m-4 left-0 top-0 z-50 flex text-sm items-center justify-between right-0">
      <figure className="flex items-center gap-2 bg-[#211b19] px-3 py-2">
        <FullLogo size={20} className="text-sm" />
      </figure>

      <ul className="flex items-center gap-6 px-3 py-2 bg-[#211b19]">
        {commonLinks.map((link, index) => (
          <li key={index}>
            <PageNavItem item={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
