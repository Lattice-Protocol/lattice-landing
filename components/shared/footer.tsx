"use client";

import { FullLogo } from ".";
import { GITHUB_URL, TWITTER_URL } from "@/utils/constants";
import { RiTwitterLine, RiGithubLine } from "@remixicon/react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const sitemapCopy: {
    content: React.ReactNode;
    href: string;
  }[] = [
    {
      content: "Litepaper",
      href: "/litepaper",
    },
    {
      content: "Blogs",
      href: "/blogs",
    },
  ];

  const socialsCopy: {
    icon: React.ReactNode;
    href: string;
  }[] = [
    {
      icon: <RiTwitterLine />,
      href: TWITTER_URL,
    },
    {
      icon: <RiGithubLine />,
      href: GITHUB_URL,
    },
  ];

  return (
    <footer className="flex flex-col items-center bg-[#1A1310]/80 px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-36">
      <div className="flex w-full flex-col items-center justify-center gap-x-8 gap-y-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center justify-between gap-4 md:items-start">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <FullLogo />

            <div className="flex gap-2">
              {socialsCopy.map(({ icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-muted-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <ul className="flex flex-wrap justify-center gap-4 md:justify-end">
            {sitemapCopy.map(({ content, href }) => (
              <li key={content?.toString()}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {content}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground mt-full text-center text-sm md:text-right">
            &copy; 2025 Lattice AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
